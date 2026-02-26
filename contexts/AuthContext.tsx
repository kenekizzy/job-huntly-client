/* eslint-disable @typescript-eslint/no-unused-vars */
'use client';

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { useAuthActions } from '@/features/Auth/hooks/useAuth';
import { toast } from 'react-toastify';
import { useToast } from '@/hooks/useToast';
import {
  setAuthData,
  clearAuthData,
  getUserData,
  getAuthToken
} from '@/lib/auth-utils';
import { useRouter } from 'next/navigation';


interface User {
  firstName: string;
  lastName: string;
  id: string;
  email: string;
  phone?: string;
  gender?: string;
  location?: string;
  bio?: string;
  profilePicture?: string;
  resumeUrl?: string;
  skills?: string[];
  experience?: string;
  education?: string;
  preferredJobTypes?: string[];
  preferredLocations?: string[];
  isActive?: boolean;
  emailVerified: boolean;
  provider?: string;
  providerId?: string;
  lastLogin: Date;
}

interface Company {
  companyName: string;
  email: string;
  password: string;
}

interface userRegister {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

interface companyRegister {
  companyName: string;
  email: string;
  password: string;
}

interface userLogin {
  email: string;
  password: string;
}

interface companyLogin {
  email: string;
  password: string;
}

interface AuthResult {
  success: boolean;
  error?: string;
  requiresVerification?: boolean;
  verificationLink?: string;
}

interface AuthContextType {
  user: User | null;
  isLoading: boolean;
  isAuthenticated: boolean;
  handleLogin: (credentials: userLogin) => Promise<AuthResult>;
  handleRegister: (credentials: userRegister) => Promise<void>;
  handleLogout: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const { login, register, logout } = useAuthActions();
  const { showSuccess, showError } = useToast();
  const router = useRouter();

  useEffect(() => {
    const token = getAuthToken();
    const userData = getUserData();

    if (token && userData) {
      try {
        setUser(userData);
      } catch (error) {
        console.error('Error loading user data:', error);
        clearAuthData();
      }
    }
    setIsLoading(false);
  }, []);

  const handleLogin = async (credentials: userLogin) => {
    setIsLoading(true);
    try {
      const response = await login(credentials);
      console.log('Login response:', response);
      const userData = response?.data?.user;

      if (response?.status !== 200) {
        showError(response?.data?.message || 'Login failed');
        setIsLoading(false);
        return { success: false }
      }

      // Store auth data using utility functions
      setAuthData(
        response?.data?.accessToken,
        response?.data?.refreshToken,
        userData
      );

      showSuccess('Login successful!', `Welcome ${userData.firstName}!`);
      setUser(userData);
      setIsLoading(false);
      return { success: true }
    } catch (err) {
      console.error('Login error:', err);
      showError('Login failed. Please try again.');
      setIsLoading(false);
      return { success: false }
    }
  };

  const handleRegister = async (credentials: userRegister) => {
    try {
      await register(credentials);
      toast.success('Registration successful!, check your email for further verification process');
    } catch (err) {
      console.error('Registration error:', err);
      showError('Registration failed. Please try again.');
    }
  };

  const handleLogout = async () => {
    try {
      await logout();
      router.push('/login');
    } catch (err) {
      console.error('Logout error:', err);
    } finally {
      clearAuthData();
      setUser(null);
    }
  };

  const value = {
    user,
    isLoading,
    isAuthenticated: !!user,
    handleLogin,
    handleRegister,
    handleLogout,
  }

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};