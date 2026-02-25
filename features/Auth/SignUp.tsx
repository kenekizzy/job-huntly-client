'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { userSchema, User } from '@/schema';
import { Eye, EyeOff } from 'lucide-react';
import { JobHuntlyIcon, GoogleIcon } from '@/icons';
import { useAuth } from '@/contexts/AuthContext';
import { toast } from 'react-toastify';

const SignUp = () => {
    const [showPassword, setShowPassword] = useState(false);
    const { handleRegister } = useAuth()

    const { register, handleSubmit, formState: { errors } } = useForm<User>({
        resolver: zodResolver(userSchema),
        defaultValues: {
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        },
        mode: 'onBlur',
    });

    const onSubmit = async (data: User) => {
        console.log(data);
        try {
          await handleRegister(data);
          // TODO: Handle successful registration, e.g., redirect to home page
          // You can also dispatch an action to update the user state in the context
        } catch (error) {
          console.error('Registration failed:', error);
          // TODO: Handle registration failure, e.g., show an error message
        }

    };

    const handleGoogleSignUp = () => {
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
            <h1 className="text-4xl font-bold text-gray-900 dark:text-gray-100 mb-2">Get more opportunities</h1>
          </div>

          <div className="flex gap-2 bg-gray-100 p-1 rounded-lg">
            <button
              className="flex-1 py-2 px-4 rounded-md text-sm font-medium transition-colors bg-indigo-100 text-indigo-700"
            >
              Job Seeker
            </button>
            <Link
              href="/company/signup"
              className="flex-1 py-2 px-4 rounded-md text-sm font-medium transition-colors text-gray-600 hover:text-gray-900 text-center"
            >
              Company
            </Link>
          </div>

          <form onSubmit={(e) => {
            e.preventDefault();
            handleSubmit(onSubmit)();
          }} className="space-y-6">
            <button
              type="button"
              onClick={handleGoogleSignUp}
              className="w-full flex items-center justify-center gap-3 py-3 px-4 border dark:bg-gray-100 border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
            >
              <GoogleIcon />
              <span className="text-gray-700 font-medium">Sign Up with Google</span>
            </button>

            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-4 bg-white dark:bg-black text-gray-500">Or sign up with email</span>
              </div>
            </div>

            <div>
              <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 dark:text-gray-100 mb-2">
                First name
              </label>
              <input
                id="firstName"
                type="text"
                {...register('firstName')}
                placeholder="Enter your first name"
                className="w-full px-4 py-3 border border-gray-300 dark:bg-gray-100 dark:text-gray-900 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition-all"
                required
              />
              {errors.firstName && <p className="text-red-500 text-sm mt-1">{errors.firstName.message}</p>}
            </div>

            {/* Last Name Input */}
            <div>
              <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 dark:text-gray-100 mb-2">
                Last name
              </label>
              <input
                id="lastName"
                type="text"
                {...register('lastName')}
                placeholder="Enter your last name"
                className="w-full px-4 py-3 border border-gray-300 dark:bg-gray-100 dark:text-gray-900 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition-all"
                required
              />
              {errors.lastName && <p className="text-red-500 text-sm mt-1">{errors.lastName.message}</p>}
            </div>

            {/* Email Input */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-100 mb-2">
                Email Address
              </label>
              <input
                id="email"
                type="email"
                {...register('email')}
                placeholder="Enter email address"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg dark:bg-gray-100 dark:text-gray-900 focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition-all"
                required
              />
              {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
            </div>

            {/* Password Input */}
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

            {/* Continue Button */}
            <button
              type="submit"
              className="w-full bg-indigo-600 text-white py-3 px-4 rounded-lg font-medium hover:bg-indigo-700 transition-colors"
            >
              Continue
            </button>

            {/* Login Link */}
            <p className="text-center text-sm text-gray-600">
              Already have an account?{' '}
              <Link href="/login" className="text-indigo-600 font-medium hover:text-indigo-700">
                Login
              </Link>
            </p>

            {/* Terms and Privacy */}
            <p className="text-xs text-gray-500 text-center">
              By clicking Continue, you acknowledge that you have read and accept the{' '}
              <Link href="/terms" className="text-indigo-600 hover:text-indigo-700">
                Terms of Service
              </Link>{' '}
              and{' '}
              <Link href="/privacy" className="text-indigo-600 hover:text-indigo-700">
                Privacy Policy
              </Link>
              .
            </p>
          </form>
        </div>
      </div>
      </div>
  )
}

export default SignUp