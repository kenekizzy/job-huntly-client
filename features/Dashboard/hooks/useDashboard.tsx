'use client'

import axios from 'axios';

const apiUrl = process.env.NEXT_PUBLIC_API_BASE_URL;

export const useDashboard = () => {
    
}

export const updateProfile = async (token: string, profileData: any) => {
  try {
    const response = await axios.put(`${apiUrl}/users/profile`, profileData, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error updating profile:", error);
    throw error;
  }
};


export const updatePassword = async (token: string, passwordData: any) => {
  try {
    const response = await axios.put(`${apiUrl}/users/settings/password`, passwordData, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error updating password:", error);
    throw error;
  }
};

export const getProfile = async (token: string) => {
  try {
    const response = await axios.get(`${apiUrl}/users/profile`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching profile:", error);
    throw error;
  }
};

export const getApplications = async (token: string) => {
  try {
    const response = await axios.get(`${apiUrl}/applications`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching applications:", error);
    throw error;
  }
};

