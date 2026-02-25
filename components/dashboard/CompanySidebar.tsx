'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  Home,
  MessageSquare,
  Building2,
  Users,
  FileText,
  Calendar,
  Settings,
  HelpCircle,
} from 'lucide-react';

const CompanySidebar = () => {
  const pathname = usePathname();

  const menuItems = [
    { icon: Home, label: 'Dashboard', href: '/company-dashboard', badge: null },
    { icon: MessageSquare, label: 'Messages', href: '/company-dashboard/messages', badge: 1 },
    { icon: Building2, label: 'Company Profile', href: '/company-dashboard/profile', badge: null },
    { icon: Users, label: 'All Applicants', href: '/company-dashboard/applicants', badge: null },
    { icon: FileText, label: 'Job Listing', href: '/company-dashboard/jobs', badge: null },
    { icon: Calendar, label: 'My Schedule', href: '/company-dashboard/schedule', badge: null },
  ];

  const settingsItems = [
    { icon: Settings, label: 'Settings', href: '/company-dashboard/settings' },
    { icon: HelpCircle, label: 'Help Center', href: '/company-dashboard/help-center' },
  ];

  return (
    <aside className="w-64 bg-white dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700 min-h-screen flex flex-col">
      {/* Logo */}
      <div className="p-6 border-b border-gray-200 dark:border-gray-700">
        <Link href="/" className="flex items-center gap-2">
          <div className="w-10 h-10 bg-indigo-600 rounded-full flex items-center justify-center">
            <span className="text-white font-bold text-xl">J</span>
          </div>
          <span className="text-xl font-bold text-gray-900 dark:text-white">JobHuntly</span>
        </Link>
      </div>
      

      {/* Navigation */}
      <nav className="flex-1 p-4">
        <div className="space-y-1">
          {menuItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`flex items-center gap-3 px-3 py-2.5 rounded-lg transition-colors ${
                  isActive
                    ? 'bg-indigo-50 dark:bg-indigo-900/20 text-indigo-600 dark:text-indigo-400'
                    : 'text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700'
                }`}
              >
                <item.icon className="w-5 h-5" />
                <span className="flex-1 font-medium">{item.label}</span>
                {item.badge && (
                  <span className="w-5 h-5 bg-indigo-600 text-white text-xs rounded-full flex items-center justify-center">
                    {item.badge}
                  </span>
                )}
              </Link>
            );
          })}
        </div>

        {/* Settings Section */}
        <div className="mt-8">
          <p className="px-3 mb-2 text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase">
            Settings
          </p>
          <div className="space-y-1">
            {settingsItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`flex items-center gap-3 px-3 py-2.5 rounded-lg transition-colors ${
                    isActive
                      ? 'bg-indigo-50 dark:bg-indigo-900/20 text-indigo-600 dark:text-indigo-400'
                      : 'text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700'
                  }`}
                >
                  <item.icon className="w-5 h-5" />
                  <span className="flex-1 font-medium">{item.label}</span>
                </Link>
              );
            })}
          </div>
        </div>
      </nav>

      {/* User Profile */}
      <div className="p-4 border-t border-gray-200 dark:border-gray-700">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-gray-300 dark:bg-gray-600 rounded-full flex items-center justify-center">
            <span className="text-lg">👩</span>
          </div>
          <div className="flex-1 min-w-0">
            <p className="font-semibold text-gray-900 dark:text-white text-sm truncate">
              Maria Kelly
            </p>
            <p className="text-xs text-gray-500 dark:text-gray-400 truncate">
              Mariakelly@email.com
            </p>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default CompanySidebar;
