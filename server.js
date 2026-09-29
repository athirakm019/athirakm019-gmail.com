/**
 * VELOOP REWARDS — AUTHENTICATION & APPLICATION SERVER
 * Built using native Node.js core modules (http, fs, path, crypto, url).
 * Zero external C++ or npm dependencies required.
 */

const http = require('http');
const fs = require('fs');
const path = require('path');
const crypto = require('crypto');
const url = require('url');

const PORT = process.env.PORT || 3000;
const DATA_DIR = path.join(__dirname, 'data');
const USERS_FILE = path.join(DATA_DIR, 'users.json');

// In-memory active session tokens store: token -> { userId, email, name, expiresAt }
const activeSessions = new Map();
const SESSION_DURATION_MS = 24 * 60 * 60 * 1000; // 24 hours

// --------------------------------------------------------------------------
// 1. Password Security & Cryptography Utilities
// --------------------------------------------------------------------------

function hashPassword(password, salt) {
  return crypto.pbkdf2Sync(password, salt, 100000, 64, 'sha512').toString('hex');
}

function verifyPassword(password, storedHash, salt) {
  try {
    if (!password || !storedHash || !salt) return false;
    const hash = hashPassword(password, salt);
    const hashBuf = Buffer.from(hash, 'hex');
    const storedBuf = Buffer.from(storedHash, 'hex');
    if (hashBuf.length !== storedBuf.length) {
      return false;
    }
    return crypto.timingSafeEqual(hashBuf, storedBuf);
  } catch (err) {
    return false;
  }
}

function generateSecureToken() {
  return crypto.randomBytes(32).toString('hex');
}

function generateSalt() {
  return crypto.randomBytes(32).toString('hex');
}

// --------------------------------------------------------------------------
// 2. User Store Initialization
// --------------------------------------------------------------------------

function initUserStore() {
  if (!fs.existsSync(DATA_DIR)) {
    fs.mkdirSync(DATA_DIR, { recursive: true });
  }

  if (!fs.existsSync(USERS_FILE)) {
    fs.writeFileSync(USERS_FILE, JSON.stringify([], null, 2), 'utf8');
  }
}

function getUsers() {
  try {
    return JSON.parse(fs.readFileSync(USERS_FILE, 'utf8'));
  } catch (e) {
    return [];
  }
}

function saveUsers(users) {
  fs.writeFileSync(USERS_FILE, JSON.stringify(users, null, 2), 'utf8');
}

// --------------------------------------------------------------------------
// 3. MIME Types for Static Assets
// --------------------------------------------------------------------------

const MIME_TYPES = {
  '.html': 'text/html; charset=UTF-8',
  '.css': 'text/css; charset=UTF-8',
  '.js': 'application/javascript; charset=UTF-8',
  '.json': 'application/json; charset=UTF-8',
  '.svg': 'image/svg+xml',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.ico': 'image/x-icon',
  '.woff2': 'font/woff2',
  '.woff': 'font/woff',
  '.ttf': 'font/ttf'
};

// --------------------------------------------------------------------------
// 4. Request Parsers & Helpers
// --------------------------------------------------------------------------

function parseJsonBody(req) {
  return new Promise((resolve, reject) => {
    let body = '';
    req.on('data', chunk => {
      body += chunk;
      if (body.length > 1e6) { // 1MB limit
        req.destroy();
        reject(new Error('Payload Too Large'));
      }
    });
    req.on('end', () => {
      try {
        resolve(body ? JSON.parse(body) : {});
      } catch (err) {
        reject(new Error('Invalid JSON format'));
      }
    });
    req.on('error', reject);
  });
}

function sendJsonResponse(res, statusCode, data) {
  res.writeHead(statusCode, {
    'Content-Type': 'application/json',
    'Cache-Control': 'no-store, no-cache, must-revalidate'
  });
  res.end(JSON.stringify(data));
}

function getBearerToken(req) {
  const authHeader = req.headers['authorization'];
  if (authHeader && authHeader.startsWith('Bearer ')) {
    return authHeader.slice(7).trim();
  }
  return null;
}

function authenticateToken(token) {
  if (!token) return null;
  const session = activeSessions.get(token);
  if (!session) return null;
  if (Date.now() > session.expiresAt) {
    activeSessions.delete(token);
    return null;
  }
  return session;
}

// --------------------------------------------------------------------------
// 5. Auth API Endpoints
// --------------------------------------------------------------------------

async function handleApiAuth(req, res, pathname) {
  // 1. POST /api/auth/login
  if (req.method === 'POST' && pathname === '/api/auth/login') {
    try {
      const { emailOrUsername, password, rememberMe } = await parseJsonBody(req);

      if (!emailOrUsername || !password) {
        return sendJsonResponse(res, 400, {
          success: false,
          error: 'Email/username and password are required.'
        });
      }

      const users = getUsers();
      const identifier = emailOrUsername.trim().toLowerCase();
      const user = users.find(u => 
        u.email.toLowerCase() === identifier || 
        (u.username && u.username.toLowerCase() === identifier)
      );

      // Constant time check or generic error if not found to prevent user enumeration
      if (!user) {
        return sendJsonResponse(res, 401, {
          success: false,
          error: 'Invalid email or password.'
        });
      }

      const isValid = verifyPassword(password, user.passwordHash, user.salt);
      if (!isValid) {
        return sendJsonResponse(res, 401, {
          success: false,
          error: 'Invalid email or password.'
        });
      }

      // Issue secure session token
      const token = generateSecureToken();
      const expiry = rememberMe 
        ? Date.now() + (30 * 24 * 60 * 60 * 1000) // 30 days
        : Date.now() + SESSION_DURATION_MS;       // 24 hours

      activeSessions.set(token, {
        userId: user.id,
        email: user.email,
        name: user.name,
        tier: user.tier || 'Bronze',
        expiresAt: expiry
      });

      return sendJsonResponse(res, 200, {
        success: true,
        message: 'Login successful.',
        token: token,
        user: {
          id: user.id,
          name: user.name,
          email: user.email,
          tier: user.tier,
          level: user.level,
          balance: user.balance
        }
      });
    } catch (err) {
      return sendJsonResponse(res, 500, { success: false, error: 'Internal Server Error' });
    }
  }

  // 2. POST /api/auth/signup
  if (req.method === 'POST' && pathname === '/api/auth/signup') {
    try {
      const { name, email, password, confirmPassword } = await parseJsonBody(req);

      if (!name || !email || !password || !confirmPassword) {
        return sendJsonResponse(res, 400, {
          success: false,
          error: 'All fields are required.'
        });
      }

      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email.trim())) {
        return sendJsonResponse(res, 400, {
          success: false,
          error: 'Please provide a valid email address.'
        });
      }

      if (password !== confirmPassword) {
        return sendJsonResponse(res, 400, {
          success: false,
          error: 'Passwords do not match.'
        });
      }

      // Password requirement: 8+ chars, 1 uppercase, 1 lowercase, 1 number, 1 special char
      const pwdRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]).{8,}$/;
      if (!pwdRegex.test(password)) {
        return sendJsonResponse(res, 400, {
          success: false,
          error: 'Password must be at least 8 characters and include uppercase, lowercase, a number, and a special symbol.'
        });
      }

      const users = getUsers();
      const emailLower = email.trim().toLowerCase();
      const existingUser = users.find(u => u.email.toLowerCase() === emailLower);
      if (existingUser) {
        return sendJsonResponse(res, 409, {
          success: false,
          error: 'An account with this email address already exists.'
        });
      }

      const salt = generateSalt();
      const passwordHash = hashPassword(password, salt);
      const newUser = {
        id: `usr-${Date.now()}-${crypto.randomBytes(4).toString('hex')}`,
        name: name.trim(),
        email: emailLower,
        username: emailLower.split('@')[0],
        salt: salt,
        passwordHash: passwordHash,
        tier: 'Bronze',
        level: 1,
        balance: 10,
        createdAt: new Date().toISOString()
      };

      users.push(newUser);
      saveUsers(users);

      // Auto-issue token upon registration
      const token = generateSecureToken();
      activeSessions.set(token, {
        userId: newUser.id,
        email: newUser.email,
        name: newUser.name,
        tier: newUser.tier,
        expiresAt: Date.now() + SESSION_DURATION_MS
      });

      return sendJsonResponse(res, 201, {
        success: true,
        message: 'Account created successfully.',
        token: token,
        user: {
          id: newUser.id,
          name: newUser.name,
          email: newUser.email,
          tier: newUser.tier,
          level: newUser.level,
          balance: newUser.balance
        }
      });
    } catch (err) {
      return sendJsonResponse(res, 500, { success: false, error: 'Internal Server Error' });
    }
  }

  // 3. POST /api/auth/forgot-password
  if (req.method === 'POST' && pathname === '/api/auth/forgot-password') {
    try {
      const { email } = await parseJsonBody(req);
      if (!email) {
        return sendJsonResponse(res, 400, {
          success: false,
          error: 'Email address is required.'
        });
      }

      // Security standard: Always return success message even if account is not found
      // to prevent account enumeration attacks.
      return sendJsonResponse(res, 200, {
        success: true,
        message: 'If an account exists for that email, a password reset link has been prepared.'
      });
    } catch (err) {
      return sendJsonResponse(res, 500, { success: false, error: 'Internal Server Error' });
    }
  }

  // 4. GET /api/auth/me (Protected)
  if (req.method === 'GET' && pathname === '/api/auth/me') {
    const token = getBearerToken(req);
    const session = authenticateToken(token);
    if (!session) {
      return sendJsonResponse(res, 401, {
        success: false,
        error: 'Unauthorized. Invalid or expired session.'
      });
    }

    const users = getUsers();
    const user = users.find(u => u.id === session.userId);
    if (!user) {
      return sendJsonResponse(res, 404, { success: false, error: 'User not found.' });
    }

    return sendJsonResponse(res, 200, {
      success: true,
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
        tier: user.tier,
        level: user.level,
        balance: user.balance
      }
    });
  }

  // 5. POST /api/auth/logout
  if (req.method === 'POST' && pathname === '/api/auth/logout') {
    const token = getBearerToken(req);
    if (token) {
      activeSessions.delete(token);
    }
    return sendJsonResponse(res, 200, {
      success: true,
      message: 'Logged out successfully.'
    });
  }

  return sendJsonResponse(res, 404, { success: false, error: 'API route not found' });
}

// --------------------------------------------------------------------------
// 6. Master Request Router
// --------------------------------------------------------------------------

const server = http.createServer((req, res) => {
  const parsedUrl = url.parse(req.url);
  let pathname = decodeURIComponent(parsedUrl.pathname);

  // Security check for directory traversal
  if (pathname.includes('..')) {
    res.writeHead(403, { 'Content-Type': 'text/plain' });
    return res.end('Access Denied');
  }

  // API Requests
  if (pathname.startsWith('/api/auth/')) {
    return handleApiAuth(req, res, pathname);
  }

  // Normalize default file routing
  if (pathname === '/') {
    pathname = '/index.html';
  }

  const filePath = path.join(__dirname, pathname);

  fs.stat(filePath, (err, stats) => {
    if (err || !stats.isFile()) {
      // 404 handler
      res.writeHead(404, { 'Content-Type': 'text/html; charset=UTF-8' });
      return res.end(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
          <meta charset="UTF-8">
          <title>404 Not Found — VELOOP Rewards</title>
          <style>
            body { background: #161827; color: #F5F5F5; font-family: sans-serif; display: flex; align-items: center; justify-content: center; height: 100vh; margin: 0; text-align: center; }
            .card { background: #20263A; padding: 40px; border-radius: 16px; border: 1px solid rgba(255,255,255,0.1); max-width: 400px; }
            h1 { color: #F2A900; margin-top: 0; }
            a { color: #38bdf8; text-decoration: none; font-weight: bold; }
          </style>
        </head>
        <body>
          <div class="card">
            <h1>404</h1>
            <p>The requested page was not found.</p>
            <a href="/login.html">Go to Login →</a>
          </div>
        </body>
        </html>
      `);
    }

    const ext = path.extname(filePath).toLowerCase();
    const contentType = MIME_TYPES[ext] || 'application/octet-stream';

    res.writeHead(200, {
      'Content-Type': contentType,
      'Cache-Control': ext === '.html' ? 'no-cache' : 'public, max-age=3600'
    });

    const stream = fs.createReadStream(filePath);
    stream.pipe(res);
  });
});

// Initialize user store and start server
initUserStore();

server.listen(PORT, () => {
  console.log(`========================================================`);
  console.log(`🚀 VELOOP Rewards Application & Auth Server`);
  console.log(`🌐 Running at: http://localhost:${PORT}`);
  console.log(`🔐 Login URL:   http://localhost:${PORT}/login.html`);
  console.log(`📊 Dashboard:   http://localhost:${PORT}/index.html`);
  console.log(`========================================================`);
});
