'use client';

import { usePathname } from 'next/navigation';
import Header from './Header';
import Footer from './Footer';

export default function LayoutWrapper({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  
  // Pages that should not show header and footer
  const isAuthPage =
    pathname?.startsWith('/login') ||
    pathname?.startsWith('/signup') ||
    pathname?.startsWith('/company/login') ||
    pathname?.startsWith('/company/signup');
  
  const isDashboardPage = pathname?.startsWith('/dashboard');

  const isCompanyDashboardPage = pathname?.startsWith('/company');
  
  const hideHeaderFooter = isAuthPage || isDashboardPage || isCompanyDashboardPage;

  return (
    <>
      {!hideHeaderFooter && <Header />}
      <main className={hideHeaderFooter ? '' : 'min-h-[calc(100vh-20rem)] bg-white dark:bg-gray-900 transition-colors'}>
        {children}
      </main>
      {!hideHeaderFooter && <Footer />}
    </>
  );
}
