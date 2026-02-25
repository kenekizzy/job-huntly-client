/**
 * Authentication utility functions
 */

export const AUTH_STORAGE_KEYS = {
  ACCESS_TOKEN: 'access_token',
  REFRESH_TOKEN: 'refresh_token',
  USER_DATA: 'user_data',
} as const;

/**
 * Store authentication tokens and user data
 */
export const setAuthData = (
  accessToken: string,
  refreshToken: string,
  userData: any
) => {
  if (typeof window === 'undefined') return;
  
  localStorage.setItem(AUTH_STORAGE_KEYS.ACCESS_TOKEN, accessToken);
  localStorage.setItem(AUTH_STORAGE_KEYS.REFRESH_TOKEN, refreshToken);
  localStorage.setItem(AUTH_STORAGE_KEYS.USER_DATA, JSON.stringify(userData));
  
  // Also set in cookies for middleware access
  document.cookie = `${AUTH_STORAGE_KEYS.ACCESS_TOKEN}=${accessToken}; path=/; max-age=${60 * 60 * 24 * 7}`; // 7 days
};

/**
 * Get authentication token
 */
export const getAuthToken = (): string | null => {
  if (typeof window === 'undefined') return null;
  return localStorage.getItem(AUTH_STORAGE_KEYS.ACCESS_TOKEN);
};

/**
 * Get refresh token
 */
export const getRefreshToken = (): string | null => {
  if (typeof window === 'undefined') return null;
  return localStorage.getItem(AUTH_STORAGE_KEYS.REFRESH_TOKEN);
};

/**
 * Get stored user data
 */
export const getUserData = (): any | null => {
  if (typeof window === 'undefined') return null;
  
  const userData = localStorage.getItem(AUTH_STORAGE_KEYS.USER_DATA);
  if (!userData) return null;
  
  try {
    return JSON.parse(userData);
  } catch (error) {
    console.error('Error parsing user data:', error);
    return null;
  }
};

/**
 * Clear all authentication data
 */
export const clearAuthData = () => {
  if (typeof window === 'undefined') return;
  
  localStorage.removeItem(AUTH_STORAGE_KEYS.ACCESS_TOKEN);
  localStorage.removeItem(AUTH_STORAGE_KEYS.REFRESH_TOKEN);
  localStorage.removeItem(AUTH_STORAGE_KEYS.USER_DATA);
  
  // Clear cookies
  document.cookie = `${AUTH_STORAGE_KEYS.ACCESS_TOKEN}=; path=/; max-age=0`;
};

/**
 * Check if user is authenticated
 */
export const isAuthenticated = (): boolean => {
  return !!getAuthToken();
};

/**
 * Get authorization header for API requests
 */
export const getAuthHeader = (): { Authorization: string } | {} => {
  const token = getAuthToken();
  return token ? { Authorization: `Bearer ${token}` } : {};
};
