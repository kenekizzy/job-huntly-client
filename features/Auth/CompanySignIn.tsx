'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { userLoginSchema, userLogin } from '@/schema';
import { Eye, EyeOff } from 'lucide-react';
import { JobHuntlyIcon, GoogleIcon } from '@/icons';

const CompanySignIn = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [rememberMe, setRememberMe] = useState(false);

    const { register, handleSubmit, formState: { errors } } = useForm<userLogin>({
        resolver: zodResolver(userLoginSchema),
        defaultValues: {
        email: '',
        password: '',
        },
        mode: 'onBlur',
    });

    const onSubmit = (data: userLogin) => {
        console.log(data);
    };

    const handleGoogleLogin = () => {
        // TODO: Implement Google OAuth
        console.log('Google signup');
    };
  return (
    <div className="min-h-screen flex">
      <div className="hidden lg:flex lg:w-1/2 relative">
        <Image
          src="/auth-background.png"
          alt="Background"
          fill
          className="object-cover"
          priority
        />

        <div className="absolute inset-0 bg-black/20 flex items-start p-12">
          <div className="flex items-center gap-2">
            <JobHuntlyIcon />
            <span className="text-2xl font-bold text-white">JobHuntly</span>
          </div>
        </div>
      </div>

      <div className="flex-1 flex items-center justify-center p-8">
        <div className="w-full max-w-md space-y-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 dark:text-gray-100 mb-2">Welcome Back</h1>
            <p className="text-gray-600 dark:text-gray-50">Sign in to your company account</p>
          </div>

          <div className="flex gap-2 bg-gray-100 p-1 rounded-lg">
            <Link
              href="/login"
              className="flex-1 py-2 px-4 rounded-md text-sm font-medium transition-colors text-gray-600 hover:text-gray-900 text-center"
            >
              Job Seeker
            </Link>
            <button
              className="flex-1 py-2 px-4 rounded-md text-sm font-medium transition-colors bg-indigo-100 text-indigo-700"
            >
              Company
            </button>
          </div>

          <form onSubmit={(e) => {
              e.preventDefault();
              handleSubmit(onSubmit)();
            }}  className="space-y-6">
            {/* Google Login Button */}
            <button
              type="button"
              onClick={handleGoogleLogin}
              className="w-full flex items-center justify-center gap-3 py-3 px-4 border border-gray-300 rounded-lg dark:bg-gray-50 transition-colors"
            >
              <GoogleIcon />
              <span className="text-gray-700 font-medium">Login with Google</span>
            </button>

            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-4 bg-white dark:bg-black text-gray-500">Or login with email</span>
              </div>
            </div>

            <div>
              <label
                htmlFor="companyEmail"
                className="block text-sm font-medium text-gray-700 dark:text-gray-100 mb-2"
              >
                Company Email Address
              </label>
              <input
                id="companyEmail"
                type="email"
                {...register('email')}
                placeholder="Enter company email address"
                className="w-full px-4 py-3 border border-gray-300 dark:bg-gray-100 dark:text-gray-900 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition-all"
                required
              />
              {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
            </div>

            <div>
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-100 mb-2"
                >
                  Password
                </label>

                <div className="relative">
                  <input
                    id="password"
                    type={showPassword ? 'text' : 'password'}
                    {...register('password')}
                    placeholder="Enter password"
                    className="w-full px-4 py-3 pr-12 border border-gray-300 rounded-lg dark:bg-gray-100 dark:text-gray-900
                              focus:ring-2 focus:ring-indigo-500 focus:border-transparent 
                              outline-none transition-all"
                    required
                  />

                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute inset-y-0 right-3 flex items-center text-gray-500 hover:text-gray-700"
                  >
                    {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                  </button>
                </div>

                {errors.password && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.password.message}
                  </p>
                )}
              </div>

            <div className="flex items-center">
              <input
                id="remember-me"
                type="checkbox"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
                className="w-4 h-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
              />
              <label htmlFor="remember-me" className="ml-2 text-sm text-gray-700">
                Remember me
              </label>
            </div>

            <button
              type="submit"
              className="w-full bg-indigo-600 text-white py-3 px-4 rounded-lg cursor-pointer font-medium hover:bg-indigo-700 transition-colors"
            >
              Login
            </button>

            <p className="text-center text-sm text-gray-600">
              Don&apos;t have an account?{' '}
              <Link
                href="/company/signup"
                className="text-indigo-600 font-medium hover:text-indigo-700"
              >
                Sign Up
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  )
}

export default CompanySignIn