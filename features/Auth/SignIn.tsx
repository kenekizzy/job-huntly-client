'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { userLoginSchema, userLogin } from '@/schema';
import { Eye, EyeOff } from 'lucide-react';
import { JobHuntlyIcon, GoogleIcon } from '@/icons';
import { useAuth } from '@/contexts/AuthContext';
import { useRouter, useSearchParams } from 'next/navigation';
import { useToast } from '@/hooks/useToast';

const SignIn = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const router = useRouter();
  const searchParams = useSearchParams();
  const { showSuccess, showError } = useToast();
  const { handleLogin, isAuthenticated, isLoading } = useAuth();

  const redirectTo = searchParams.get('redirect') || '/dashboard';

  console.log("Is Authenticated", isAuthenticated)
  console.log("Is Loading", isLoading)
  console.log("Redirect To", redirectTo)

  // Redirect if already authenticated
  useEffect(() => {
    if (!isLoading && isAuthenticated) {
      router.push(redirectTo);
    }
  }, [isAuthenticated, isLoading, router, redirectTo]);

  const { register, handleSubmit, formState: { errors } } = useForm<userLogin>({
      resolver: zodResolver(userLoginSchema),
      defaultValues: {
      email: '',
      password: '',
      },
      mode: 'onBlur',
  });

  const onSubmit = async (data: userLogin) => {
    if (isSubmitting) return;
    
    setIsSubmitting(true);
    try {
      const result = await handleLogin(data);
     
      if (result.success) {
        showSuccess("Login successful", "You have been logged in successfully");
        router.push(redirectTo || '/dashboard');
      }
      setIsSubmitting(false);
    } catch (error) {
      showError("Login failed", "An error occurred while logging in");
      console.error('Login failed:', error);
      setIsSubmitting(false);
    }
  };

  const handleGoogleLogin = () => {
      // TODO: Implement Google OAuth
      console.log('Google login');
  };

  // Show loading state while checking authentication
  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600 mx-auto mb-4"></div>
          <p className="text-gray-600 dark:text-gray-400">Loading...</p>
        </div>
      </div>
    );
  }

  // Don't render login form if already authenticated
  if (isAuthenticated) {
    return null;
  }

  return (
    <div className="min-h-screen flex">
      <div className="hidden lg:flex lg:w-1/2 relative">
        <Image
          src="/auth-background.png"
          alt="Background"
          fill
          className="object-contain"
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
              <h1 className="text-4xl font-bold text-gray-900 mb-2 dark:text-gray-100">Welcome Back, Dude</h1>
            </div>

            <div className="flex gap-2 bg-gray-100 p-1 rounded-lg">
              <button
                className="flex-1 py-2 px-4 rounded-md text-sm font-medium transition-colors bg-indigo-100 text-indigo-700"
              >
                Job Seeker
              </button>
              <Link
                href="/company/login"
                className="flex-1 py-2 px-4 rounded-md text-sm font-medium transition-colors text-gray-600 hover:text-gray-900 text-center"
              >
                Company
              </Link>
            </div>

            <form onSubmit={(e) => {
              e.preventDefault();
              handleSubmit(onSubmit)();
            }}  className="space-y-6">
              <button
                type="button"
                onClick={handleGoogleLogin}
                className="w-full flex items-center justify-center gap-3 py-3 px-4 border border-gray-300 rounded-lg bg-gray-50 transition-colors hover:bg-gray-100"
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
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address
                </label>
                <input
                  id="email"
                  type="email"
                  {...register('email')}
                  placeholder="Enter email address"
                  className="w-full px-4 py-3 border border-gray-300 dark:bg-gray-100 dark:text-gray-900 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition-all"
                  required
                  disabled={isSubmitting}
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
                    disabled={isSubmitting}
                  />

                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute inset-y-0 right-3 flex items-center text-gray-500 hover:text-gray-700"
                    disabled={isSubmitting}
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

              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <input
                    id="remember-me"
                    type="checkbox"
                    checked={rememberMe}
                    onChange={(e) => setRememberMe(e.target.checked)}
                    className="w-4 h-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
                    disabled={isSubmitting}
                  />
                  <label htmlFor="remember-me" className="ml-2 text-sm text-gray-700">
                    Remember me
                  </label>
                </div>
                <Link 
                  href="/forgot-password" 
                  className="text-sm text-indigo-600 hover:text-indigo-700"
                >
                  Forgot password?
                </Link>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-indigo-600 text-white py-3 px-4 rounded-lg font-medium hover:bg-indigo-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
              >
                {isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                    Logging in...
                  </>
                ) : (
                  'Login'
                )}
              </button>

              <p className="text-center text-sm text-gray-600">
                Don&apos;t have an account?{' '}
                <Link href="/signup" className="text-indigo-600 font-medium hover:text-indigo-700">
                  Sign Up
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
  )
}

export default SignIn