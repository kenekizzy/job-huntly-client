'use client';

import { useState, useEffect } from 'react';
import { Upload, CheckCircle, XCircle, X} from 'lucide-react';
import DashboardHeader from '@/components/dashboard/DashboardHeader';
import {useAuth} from '@/contexts/AuthContext';
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { updateProfile, updatePassword } from './hooks/useDashboard';
import { profileSchema, resetPasswordSchema, ProfileFormValues, ResetPasswordFormValues } from './schema';


const Settings = () => {
  const [activeTab, setActiveTab] = useState('profile');
  const { user, isAuthenticated, isLoading } = useAuth();
  const [uploading, setUploading] = useState(false);
  const [preview, setPreview] = useState(user?.profilePicture || "");
  console.log("User Value", user)

  const tabs = [
    { id: 'profile', label: 'My Profile' },
    { id: 'login', label: 'Login Details' },
    { id: 'notifications', label: 'Notifications' },
  ];

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm<ProfileFormValues>({
    resolver: zodResolver(profileSchema),
    defaultValues: {
      firstName: user?.firstName || "",
      lastName: user?.lastName || "",
      email: user?.email || "",
      phone: user?.phone || "",
      bio: user?.bio || "",
      dateOfBirth: "",
      gender: user?.gender || "",
      location: user?.location || "",
      profilePicture: user?.profilePicture || "",
    },
  });

  const {
    register: registerResetPassword,
    handleSubmit: handleSubmitResetPassword,
    formState: { errors: errorsResetPassword, isSubmitting: isSubmittingResetPassword },
  } = useForm<ResetPasswordFormValues>({
    resolver: zodResolver(resetPasswordSchema),
    defaultValues: {
      currentPassword: "",
      newPassword: "",
      confirmPassword: "",
    },
  });

  const handleImageUpload = async (file: File) => {
    try {
      setUploading(true);

      const data = new FormData();
      data.append("file", file);
      data.append("upload_preset", "JOB_PRESETS");

      const res = await fetch(
        "https://api.cloudinary.com/v1_1/dmnru0bwu/image/upload",
        {
          method: "POST",
          body: data,
        }
      );

      const result = await res.json();

      setPreview(result.secure_url);
      setValue("profilePicture", result.secure_url);
    } catch (err) {
      console.error("Upload failed", err);
    } finally {
      setUploading(false);
    }
  };

  const onSubmit = async (data: ProfileFormValues) => {
    const {email, ...submitData} = data;
    const token = localStorage.getItem("access_token");
    if(!token){
      console.error("No token found");
      return;
    }
    try {
      const response = await updateProfile(token, submitData);
      console.log("Profile updated successfully", response);
    } catch (error) {
      console.error("Error updating profile", error);
    }
  };

  const onSubmitResetPassword = async (data: ResetPasswordFormValues) => {
    console.log("Form Data:", data);
    const token = localStorage.getItem("access_token");
    if(!token){
      console.error("No token found");
      return;
    }
    try {
      const response = await updatePassword(token, data);
      console.log("Password updated successfully", response);
    } catch (error) {
      console.error("Error updating password", error);
    }
  };

  return (
    <div className="m-4">
      <DashboardHeader title="Settings"/>
      <div className="flex items-center gap-8 mb-8 border-b border-gray-200 dark:border-gray-700">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`pb-4 px-2 font-medium transition-colors ${
              activeTab === tab.id
                ? 'border-b-2 border-indigo-600 text-indigo-600 dark:text-indigo-400'
                : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {activeTab === 'profile' && (
        <form
      onSubmit={handleSubmit(onSubmit)}
      className="max-w-4xl bg-white dark:bg-gray-800 rounded-lg border p-8 space-y-6"
    >
            <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
              Basic Information
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mb-8">
              This is your personal information that you can update anytime.
            </p>

            <div className="mb-8">
              <h3 className="font-semibold text-gray-900 dark:text-white mb-4">Profile Photo</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                This image will be shown publicly as your profile picture, it will help recruiters
                recognize you!
              </p>
              <div className="flex items-start gap-6">
                <div className="w-24 h-24 bg-gray-300 dark:bg-gray-600 rounded-full flex items-center justify-center">
                  {preview ? (
                    <img
                      src={preview}
                      alt="Profile"
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <span className="text-3xl">👨</span>
                  )}
          
                </div>
                {/* <div className="flex-1 border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-lg p-8 text-center">
                  <Upload className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                  <p className="text-indigo-600 font-medium">
                    {uploading ? "Uploading..." : "Click to upload"}
                  </p>
                  <input
                    type="file"
                    hidden
                    accept="image/*"
                    onChange={(e) => {
                      if (e.target.files?.[0]) { 
                        handleImageUpload(e.target.files[0]);
                      }
                    }}
                  />
                </div> */}
                <label
                  htmlFor="profileUpload"
                  className="flex-1 border-2 border-dashed rounded-lg p-6 text-center cursor-pointer"
                >
                  <Upload className="w-6 h-6 mx-auto mb-2" />
                  <p className="text-indigo-600 font-medium">
                    {uploading ? "Uploading..." : "Click to upload"}
                  </p>
                </label>

                <input
                  id="profileUpload"
                  type="file"
                  accept="image/*"
                  className="hidden"
                  onChange={(e) => {
                    if (e.target.files?.[0]) {
                      handleImageUpload(e.target.files[0]);
                    }
                  }}
                />
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  First Name <span className="text-red-500">*</span>
                </label>
                <input
                  {...register("firstName")}
                  placeholder="First Name"
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-indigo-500 outline-none"
                />
                {errors.firstName && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.firstName.message}
                  </p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Last Name <span className="text-red-500">*</span>
                </label>
                <input
                  {...register("lastName")}
                  placeholder="Last Name"
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-indigo-500 outline-none"
                />
                {errors.lastName && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.lastName.message}
                  </p>
                )}
              </div>

              <div className="grid grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Phone Number <span className="text-red-500">*</span>
                  </label>
                  <input
                    {...register("phone")}
                    placeholder="Phone Number"
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-indigo-500 outline-none"
                  />
                  {errors.phone && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.phone.message}
                    </p>
                  )}
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Email <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    {...register("email")}
                    disabled
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 disabled:border-gray-200 disabled:bg-gray-50 disabled:text-gray-500 disabled:shadow-none dark:disabled:border-gray-700 dark:disabled:bg-gray-800/20 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-indigo-500 outline-none"
                  />
                  {errors.email && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.email.message}
                    </p>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Date of Birth <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="date"
                    {...register("dateOfBirth")}
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-indigo-500 outline-none"
                  />
                  {errors.dateOfBirth && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.dateOfBirth.message}
                    </p>
                  )}
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Gender <span className="text-red-500">*</span>
                  </label>
                  <select {...register("gender")} className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-indigo-500 outline-none">
                    <option value="">Select Gender</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                  </select>
                  {errors.gender && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.gender.message}
                    </p>
                  )}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Description
                </label>
                <textarea
                  rows={4}
                  {...register("bio")}
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-indigo-500 outline-none"
                  defaultValue="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.">
                </textarea>
                {errors.bio && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.bio.message}
                  </p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Location
                </label>
                <input
                  type="text"
                  {...register("location")}
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-indigo-500 outline-none"
                />
                {errors.location && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.location.message}
                  </p>
                )}
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-4">Account Type</h3>

                <div className="space-y-3">
                  <label className="flex items-start gap-3 p-4 border border-gray-300 dark:border-gray-600 rounded-lg cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-700">
                    <input
                      type="radio"
                      name="accountType"
                      defaultChecked
                      disabled
                      className="mt-1"
                    />
                    <div>
                      <p className="font-medium text-gray-900 dark:text-white">Job Seeker</p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        Looking for a job
                      </p>
                    </div>
                  </label>
                  <label className="flex items-start gap-3 p-4 border border-gray-300 dark:border-gray-600 rounded-lg cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-700">
                    <input type="radio" name="accountType" className="mt-1" />
                    <div>
                      <p className="font-medium text-gray-900 dark:text-white">Employer</p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        Hiring, sourcing candidates, or posting a jobs
                      </p>
                    </div>
                  </label>
                </div>
              </div>

              <div className="flex justify-end">
                <button
                  type="submit"
                 
                  className="px-6 py-3 bg-indigo-600 text-white rounded-lg font-medium hover:bg-indigo-700 transition-colors cursor-pointer">
                  {isSubmitting ? 'Saving...' : 'Save Profile'}
                </button>
              </div>
            </div>
          </form>

      )}

      {activeTab === 'login' && (
        <form 
        className='max-w-4xl bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-8'
        onSubmit={handleSubmitResetPassword(onSubmitResetPassword)}>
            <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
              Basic Information
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mb-8">
              This is login information that you can update anytime.
            </p>

            <div className="space-y-8">
              <div>
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-1">
                      Update Email
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Update your email address to make sure it is safe
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-gray-900 dark:text-white flex items-center gap-2">
                      {user?.email}
                      {user?.emailVerified  ? <CheckCircle className="w-4 h-4 text-green-500" /> :
                      <XCircle className="w-4 h-4 text-red-500" />}
                    </p>
                      
                    {user?.emailVerified  ? (<p className="text-xs text-gray-500 dark:text-gray-400">
                      Your email address is verified
                    </p>) : (<p className="text-xs text-gray-500 dark:text-gray-400">
                      Your email address is not verified
                    </p>)}
                  </div>
                </div>
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    placeholder="Enter your new email"
                    disabled
                    value={user?.email}
                    className="w-full invalid:bg-gray-800 disabled:border-gray-200 disabled:bg-gray-50 disabled:text-gray-500 disabled:shadow-none dark:disabled:border-gray-700 dark:disabled:bg-gray-800/20 px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-indigo-500 outline-none"
                  />
                </div>
              </div>

              <div className="border-t border-gray-200 dark:border-gray-700 pt-8">
                <div className="mb-6">
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-1">
                    New Password
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Manage your password to make sure it is safe
                  </p>
                </div>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Old Password
                    </label>
                    <input
                      type="password"
                      {...registerResetPassword("currentPassword")}
                      placeholder="Enter your old password"
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-indigo-500 outline-none"
                    />
                    <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                      Minimum 8 characters
                    </p>
                    {errorsResetPassword.currentPassword && (
                      <p className="text-xs text-red-500 dark:text-red-400 mt-1">
                        {errorsResetPassword.currentPassword.message}
                      </p>
                    )}
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      New Password
                    </label>
                    <input
                      type="password"
                      {...registerResetPassword("newPassword")}
                      placeholder="Enter your new password"
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-indigo-500 outline-none"
                    />
                    <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                      Minimum 8 characters
                    </p>
                    {errorsResetPassword.newPassword && (
                      <p className="text-xs text-red-500 dark:text-red-400 mt-1">
                        {errorsResetPassword.newPassword.message}
                      </p>
                    )}
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Confirm New Password
                    </label>
                    <input
                      type="password"
                      {...registerResetPassword("confirmPassword")}
                      placeholder="Confirm your new password"
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-indigo-500 outline-none"
                    />
                    <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                      Minimum 8 characters
                    </p>
                    {errorsResetPassword.confirmPassword && (
                      <p className="text-xs text-red-500 dark:text-red-400 mt-1">
                        {errorsResetPassword.confirmPassword.message}
                      </p>
                    )}
                  </div>
                  <button className="px-6 py-3 bg-indigo-600 text-white rounded-lg font-medium hover:bg-indigo-700 transition-colors">
                    Change Password
                  </button>
                </div>
              </div>

              <div className="border-t border-gray-200 dark:border-gray-700 pt-8 flex justify-end">
                <button className="text-red-600 hover:text-red-700 font-medium flex items-center gap-2">
                  Close Account
                  <XCircle className="w-5 h-5" />
                </button>
              </div>
            </div>
          </form>
      )}

      {activeTab === 'notifications' && (
        <div className="max-w-4xl">
          <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-8">
            <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
              Basic Information
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mb-8">
              This is notifications preferences that you can update anytime.
            </p>

            <div className="flex gap-12">
              <div className="w-64">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                  Notifications
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Customize your preferred notification settings
                </p>
              </div>

              <div className="flex-1 space-y-6">
                <label className="flex items-start gap-4">
                  <input
                    type="checkbox"
                    defaultChecked
                    className="mt-1 w-5 h-5 text-indigo-600 rounded"
                  />
                  <div>
                    <p className="font-medium text-gray-900 dark:text-white">Applications</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      These are notifications for jobs that you have applied to
                    </p>
                  </div>
                </label>

                <label className="flex items-start gap-4">
                  <input type="checkbox" className="mt-1 w-5 h-5 text-indigo-600 rounded" />
                  <div>
                    <p className="font-medium text-gray-900 dark:text-white">Jobs</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      These are notifications for job openings that suit your profile
                    </p>
                  </div>
                </label>

                <label className="flex items-start gap-4">
                  <input type="checkbox" className="mt-1 w-5 h-5 text-indigo-600 rounded" />
                  <div>
                    <p className="font-medium text-gray-900 dark:text-white">Recommendations</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      These are notifications for personalized recommendations from our recruiters
                    </p>
                  </div>
                </label>

                <button className="px-6 py-3 bg-indigo-600 text-white rounded-lg font-medium hover:bg-indigo-700 transition-colors">
                  Update Email
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Settings;
