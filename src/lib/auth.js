// Mock authentication with localStorage JWT
const SESSION_STORAGE_KEY = 'event_site_token';

// Mock user database
const mockUsers = [];

// Signup function
export async function signup(email, username, password) {
  // Check if user already exists
  const existingUser = mockUsers.find(u => u.email === email || u.username === username);
  if (existingUser) throw new Error('User with this email or username already exists');

  // Create new user
  const newUser = { email, username, password };
  mockUsers.push(newUser);

  // Generate mock JWT token
  const token = btoa(JSON.stringify({ userId: email, timestamp: Date.now() }));

  const authData = {
    user: { id: email, email, username },
    token
  };

  // Store in localStorage
  localStorage.setItem(SESSION_STORAGE_KEY, JSON.stringify(authData));

  return authData;
}

// Login function
export async function login(emailOrUsername, password) {
  const user = mockUsers.find(u =>
    (u.email === emailOrUsername || u.username === emailOrUsername) && u.password === password
  );

  if (!user) throw new Error('Invalid credentials');

  // Generate mock JWT token
  const token = btoa(JSON.stringify({ userId: user.email, timestamp: Date.now() }));

  const authData = {
    user: { id: user.email, email: user.email, username: user.username },
    token
  };

  // Store in localStorage
  localStorage.setItem(SESSION_STORAGE_KEY, JSON.stringify(authData));

  return authData;
}

// Logout function
export function logout() {
  localStorage.removeItem(SESSION_STORAGE_KEY);
}

// Get current logged-in user
export function getCurrentUser() {
  try {
    const stored = localStorage.getItem(SESSION_STORAGE_KEY);
    if (!stored) return null;
    return JSON.parse(stored);
  } catch {
    return null;
  }
}

// Check authentication status
export function isAuthenticated() {
  return getCurrentUser() !== null;
}
