'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import CompanySidebar from '@/components/dashboard/CompanySidebar';
import CompanyDashboardHeader from '@/components/dashboard/CompanyDashboardHeader';
import { useAuth } from '@/contexts/AuthContext';

export default function CompanyDashboardLayout({ children }: { children: React.ReactNode }) {
  const { isAuthenticated, isLoading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!isLoading && !isAuthenticated) {
      router.push('/company/login');
    }
  }, [isAuthenticated, isLoading, router]);

  // Show loading state while checking authentication
  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-50 dark:bg-gray-900">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600 mx-auto mb-4"></div>
          <p className="text-gray-600 dark:text-gray-400">Loading...</p>
        </div>
      </div>
    );
  }

  // If not authenticated, don't render the dashboard
  if (!isAuthenticated) {
    return null;
  }

  return (
    <div className="flex min-h-screen bg-gray-50 dark:bg-gray-900">
      <CompanySidebar />
      <main className="flex-1 p-8">
        <CompanyDashboardHeader />
        {children}
      </main>
    </div>
  );
}
