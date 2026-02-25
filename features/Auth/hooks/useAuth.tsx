'use client'

import axios from 'axios';

const apiUrl = process.env.NEXT_PUBLIC_API_BASE_URL;

interface userRegister {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
  }

  interface userLogin {
    email: string;
    password: string;
  }

export const useAuthActions = () => {
  const register = async (user: userRegister) => {
    try {
        const res = await axios.post(`${apiUrl}/auth/register`, user);
        return res;
    } catch (error) {
        console.log("Error", error);
        throw new Error('Error registering user');
    }
  }

  const login = async (user: userLogin) => {
    try {
        const res = await axios.post(`${apiUrl}/auth/login`, user);
        console.log("Results", res);
        return res;
    } catch (error) {
        console.log("Error", error);
        throw new Error('Error logging in user');
    }
  }

  const logout = async () => {
    localStorage.removeItem('access_token');
    localStorage.removeItem('refresh_token');
    localStorage.removeItem('user_data');

  }

  const verifyToken = async (token: string) => {
    try {
        const res = await axios.post(`${apiUrl}/auth/verify-email`, { token});
        console.log("Results", res);
        return res;
    } catch (error) {
        console.log("Error", error);
        throw new Error('Error verifying token');
    }
  }

  return {
    register,
    login,
    verifyToken,
    logout
  }
}