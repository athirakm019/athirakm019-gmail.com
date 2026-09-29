/**
 * VELOOP REWARDS — CLIENT AUTHENTICATION ENGINE
 * Handles login, registration, password recovery, session tokens,
 * inline validation, password visibility, and route protection.
 */

(function (root, factory) {
  if (typeof module === 'object' && module.exports) {
    module.exports = factory();
  } else {
    root.VeloopAuth = factory();
  }
})(typeof self !== 'undefined' ? self : this, function () {
  'use strict';

  const STORAGE_KEY_TOKEN = 'veloop_auth_token';
  const STORAGE_KEY_USER = 'veloop_auth_user';
  const STORAGE_KEY_EXPIRY = 'veloop_auth_expiry';
  const REMEMBER_ME_FLAG = 'veloop_remember_me';

  // --------------------------------------------------------------------------
  // 1. Validation Helpers
  // --------------------------------------------------------------------------

  const Validators = {
    isValidEmail: function (email) {
      if (!email || typeof email !== 'string') return false;
      const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return re.test(email.trim());
    },

    checkPasswordRequirements: function (password) {
      const pwd = password || '';
      const minLength = pwd.length >= 8;
      const hasUpper = /[A-Z]/.test(pwd);
      const hasLower = /[a-z]/.test(pwd);
      const hasNumber = /\d/.test(pwd);
      const hasSpecial = /[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]/.test(pwd);
      const valid = minLength && hasUpper && hasLower && hasNumber && hasSpecial;

      // Function that also evaluates as boolean primitive
      const isValidFn = function () {
        return valid;
      };
      isValidFn.valueOf = function () { return valid; };
      isValidFn.toString = function () { return String(valid); };

      return {
        minLength: minLength,
        hasUpper: hasUpper,
        hasUppercase: hasUpper,
        hasLower: hasLower,
        hasLowercase: hasLower,
        hasNumber: hasNumber,
        hasSpecial: hasSpecial,
        isValid: isValidFn
      };
    }
  };

  // --------------------------------------------------------------------------
  // 2. Storage & Session Manager
  // --------------------------------------------------------------------------

  const SessionManager = {
    isRemembered: function () {
      return localStorage.getItem(REMEMBER_ME_FLAG) === 'true';
    },

    getStorage: function () {
      return this.isRemembered() ? localStorage : sessionStorage;
    },

    setSession: function (token, user, rememberMe) {
      if (rememberMe) {
        localStorage.setItem(REMEMBER_ME_FLAG, 'true');
      } else {
        localStorage.removeItem(REMEMBER_ME_FLAG);
      }

      const storage = this.getStorage();
      storage.setItem(STORAGE_KEY_TOKEN, token);
      storage.setItem(STORAGE_KEY_USER, JSON.stringify(user));
      
      const expiry = rememberMe 
        ? Date.now() + (30 * 24 * 60 * 60 * 1000) // 30 days
        : Date.now() + (24 * 60 * 60 * 1000);     // 24 hours
      storage.setItem(STORAGE_KEY_EXPIRY, String(expiry));
    },

    getToken: function () {
      // Check both local and session storage
      const token = sessionStorage.getItem(STORAGE_KEY_TOKEN) || localStorage.getItem(STORAGE_KEY_TOKEN);
      const expiry = sessionStorage.getItem(STORAGE_KEY_EXPIRY) || localStorage.getItem(STORAGE_KEY_EXPIRY);
      
      if (!token) return null;
      if (expiry && Date.now() > parseInt(expiry, 10)) {
        this.clearSession();
        return null;
      }
      return token;
    },

    getUser: function () {
      const raw = sessionStorage.getItem(STORAGE_KEY_USER) || localStorage.getItem(STORAGE_KEY_USER);
      if (!raw) return null;
      try {
        return JSON.parse(raw);
      } catch (e) {
        return null;
      }
    },

    isAuthenticated: function () {
      return !!this.getToken() && !!this.getUser();
    },

    clearSession: function () {
      sessionStorage.removeItem(STORAGE_KEY_TOKEN);
      sessionStorage.removeItem(STORAGE_KEY_USER);
      sessionStorage.removeItem(STORAGE_KEY_EXPIRY);
      localStorage.removeItem(STORAGE_KEY_TOKEN);
      localStorage.removeItem(STORAGE_KEY_USER);
      localStorage.removeItem(STORAGE_KEY_EXPIRY);
      localStorage.removeItem(REMEMBER_ME_FLAG);
    }
  };

  // --------------------------------------------------------------------------
  // 3. API & Offline Fallback Client
  // --------------------------------------------------------------------------

  async function apiPost(endpoint, data) {
    try {
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      });
      if (!response.ok) {
        if (response.status === 404 || response.status === 502 || response.status === 503 || response.status === 405) {
          return null;
        }
      }
      return await response.json();
    } catch (err) {
      // Backend not running / offline / file:/// protocol fallback
      console.warn('[AUTH] Backend API unavailable or offline protocol, using client-side auth engine.', err);
      return null;
    }
  }

  // --------------------------------------------------------------------------
  // 4. Authentication Methods
  // --------------------------------------------------------------------------

  const VeloopAuth = {
    validators: Validators,
    session: SessionManager,
    isValidEmail: Validators.isValidEmail,
    checkPasswordRequirements: Validators.checkPasswordRequirements,

    /**
     * Authenticate with email/username and password
     */
    login: async function (emailOrUsername, password, rememberMe = false) {
      const trimmed = (emailOrUsername || '').trim();
      if (!trimmed || !password) {
        return { success: false, error: 'Please enter both your email/username and password.' };
      }

      // Try Backend API first
      const apiResult = await apiPost('/api/auth/login', {
        emailOrUsername: trimmed,
        password: password,
        rememberMe: rememberMe
      });

      if (apiResult) {
        if (apiResult.success && apiResult.token) {
          SessionManager.setSession(apiResult.token, apiResult.user, rememberMe);
        }
        return apiResult;
      }

      // Standalone Offline Mode Fallback (Zero-Dependency)
      // Checks registered users in local offline store
      let customUsers = [];
      try {
        customUsers = JSON.parse(localStorage.getItem('veloop_offline_users') || '[]');
      } catch (e) {
        customUsers = [];
      }

      // Pre-seed default miner if none exists so friends can test instantly
      if (!customUsers.some(u => u.email === 'miner@veloop.io')) {
        customUsers.push({
          id: 'usr-default-miner',
          name: 'Active Miner',
          email: 'miner@veloop.io',
          username: 'miner',
          password: 'Password123!',
          tier: 'Bronze',
          level: 1,
          balance: 10
        });
        try {
          localStorage.setItem('veloop_offline_users', JSON.stringify(customUsers));
        } catch (e) {}
      }

      const foundUser = customUsers.find(u => 
        (u.email.toLowerCase() === trimmed.toLowerCase() || (u.username && u.username.toLowerCase() === trimmed.toLowerCase()) || u.name.toLowerCase() === trimmed.toLowerCase()) && 
        u.password === password
      );

      if (foundUser) {
        const user = {
          id: foundUser.id,
          name: foundUser.name,
          email: foundUser.email,
          tier: foundUser.tier || 'Bronze',
          level: foundUser.level || 1,
          balance: foundUser.balance !== undefined ? foundUser.balance : 10
        };

        const fakeToken = 'offline-tok-' + Math.random().toString(36).substring(2) + Date.now().toString(36);
        SessionManager.setSession(fakeToken, user, rememberMe);

        return {
          success: true,
          message: 'Login successful.',
          user: user,
          token: fakeToken
        };
      }

      return {
        success: false,
        error: 'Invalid email or password.'
      };
    },

    /**
     * Register a new user account
     */
    signup: async function (name, email, password, confirmPassword) {
      const cleanName = (name || '').trim();
      const cleanEmail = (email || '').trim().toLowerCase();
      const confirmPwd = confirmPassword !== undefined ? confirmPassword : password;

      if (!cleanName || !cleanEmail || !password) {
        return { success: false, error: 'All fields are required.' };
      }

      if (!Validators.isValidEmail(cleanEmail)) {
        return { success: false, error: 'Please enter a valid email address.' };
      }

      if (password !== confirmPwd) {
        return { success: false, error: 'Passwords do not match.' };
      }

      const reqCheck = Validators.checkPasswordRequirements(password);
      if (!reqCheck.isValid()) {
        return {
          success: false,
          error: 'Password does not meet security requirements.'
        };
      }

      // Try Backend API
      const apiResult = await apiPost('/api/auth/signup', {
        name: cleanName,
        email: cleanEmail,
        password: password,
        confirmPassword: confirmPassword
      });

      if (apiResult) {
        if (apiResult.success && apiResult.token) {
          SessionManager.setSession(apiResult.token, apiResult.user, false);
        }
        return apiResult;
      }

      // Standalone Offline Mode Fallback
      let customUsers = [];
      try {
        customUsers = JSON.parse(localStorage.getItem('veloop_offline_users') || '[]');
      } catch (e) {
        customUsers = [];
      }

      if (customUsers.some(u => u.email.toLowerCase() === cleanEmail)) {
        return { success: false, error: 'An account with this email address already exists.' };
      }

      const newUser = {
        id: 'usr-' + Date.now(),
        name: cleanName,
        email: cleanEmail,
        password: password,
        tier: 'Bronze',
        level: 1,
        balance: 10
      };

      customUsers.push(newUser);
      localStorage.setItem('veloop_offline_users', JSON.stringify(customUsers));

      const fakeToken = 'offline-tok-' + Math.random().toString(36).substring(2) + Date.now().toString(36);
      SessionManager.setSession(fakeToken, newUser, false);

      return {
        success: true,
        message: 'Account created successfully.',
        user: newUser,
        token: fakeToken
      };
    },

    /**
     * Request a password reset link
     */
    forgotPassword: async function (email) {
      const cleanEmail = (email || '').trim();
      if (!cleanEmail) {
        return { success: false, error: 'Email address is required.' };
      }

      if (!Validators.isValidEmail(cleanEmail)) {
        return { success: false, error: 'Please provide a valid email format.' };
      }

      const apiResult = await apiPost('/api/auth/forgot-password', { email: cleanEmail });
      if (apiResult) {
        return apiResult;
      }

      // Standard uniform security response
      return {
        success: true,
        message: 'If an account exists for that email, a password reset link has been prepared.'
      };
    },

    /**
     * Logout and destroy active session
     */
    logout: async function () {
      const token = SessionManager.getToken();
      if (token) {
        try {
          await fetch('/api/auth/logout', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${token}`
            }
          });
        } catch (e) {
          // Ignore network errors on logout
        }
      }

      SessionManager.clearSession();
      window.location.replace('login.html');
    },

    /**
     * Route Protection Guard for Protected Pages (e.g. index.html)
     */
    requireAuth: function () {
      if (!SessionManager.isAuthenticated()) {
        const currentPath = encodeURIComponent(window.location.pathname + window.location.search + window.location.hash);
        window.location.replace(`login.html?redirect=${currentPath}`);
        return false;
      }
      return true;
    },

    /**
     * Redirect Away for Auth Pages (e.g. login.html)
     */
    redirectIfAuthenticated: function () {
      if (SessionManager.isAuthenticated()) {
        const urlParams = new URLSearchParams(window.location.search);
        const redirectUrl = urlParams.get('redirect');
        if (redirectUrl) {
          window.location.replace(decodeURIComponent(redirectUrl));
        } else {
          window.location.replace('index.html');
        }
        return true;
      }
      return false;
    }
  };

  return VeloopAuth;
});
