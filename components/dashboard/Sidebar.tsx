'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  LayoutDashboard,
  MessageSquare,
  FileText,
  Search,
  Building2,
  User,
  Settings,
  HelpCircle,
  LogOut,
} from 'lucide-react';
import { JobHuntlyIcon } from '@/icons';
import { useAuth } from '@/contexts/AuthContext';
import { getInitials } from '@/lib/utils';

const Sidebar = () => {
  const pathname = usePathname();
  const { user, handleLogout } = useAuth();

  const navItems = [
    { icon: LayoutDashboard, label: 'Dashboard', href: '/dashboard', badge: null },
    { icon: MessageSquare, label: 'Messages', href: '/dashboard/messages', badge: 1 },
    { icon: FileText, label: 'My Applications', href: '/dashboard/applications', badge: null },
    { icon: Search, label: 'Find Jobs', href: '/dashboard/find-jobs', badge: null },
    { icon: Building2, label: 'Browse Companies', href: '/dashboard/companies', badge: null },
    { icon: User, label: 'My Public Profile', href: '/dashboard/profile', badge: null },
  ];

  const settingsItems = [
    { icon: Settings, label: 'Settings', href: '/dashboard/settings' },
    { icon: HelpCircle, label: 'Help Center', href: '/dashboard/help-center' },
  ];

  const logOut = async () => {
    await handleLogout();
  }

  return (
    <aside className="w-64 bg-white dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700 min-h-screen p-6">
      {/* Logo */}
      <Link href="/" className="flex items-center gap-2 mb-8">
        <JobHuntlyIcon />
        <span className="text-xl font-semibold text-gray-900 dark:text-white">Job Huntly</span>
      </Link>

      {/* Navigation */}
      <nav className="space-y-1 mb-8">
        {navItems.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center gap-3 px-3 py-2 rounded-lg transition-colors ${
                isActive
                  ? 'bg-indigo-50 dark:bg-indigo-900/20 text-indigo-600 dark:text-indigo-400'
                  : 'text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-700'
              }`}
            >
              <item.icon className="w-5 h-5" />
              <span className="flex-1 font-medium">{item.label}</span>
              {item.badge && (
                <span className="bg-indigo-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {item.badge}
                </span>
              )}
            </Link>
          );
        })}
      </nav>

      {/* Settings */}
      <div className="border-t border-gray-200 dark:border-gray-700 pt-6">
        <p className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wide mb-3">
          SETTINGS
        </p>
        <nav className="space-y-1">
          {settingsItems.map((item) => {
            const isActive = pathname === item.href;
            return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center gap-3 px-3 py-2 rounded-lg transition-colors ${
                isActive
                  ? 'bg-indigo-50 dark:bg-indigo-900/20 text-indigo-600 dark:text-indigo-400'
                  : 'text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-700'
              }`}
            >
              <item.icon className="w-5 h-5" />
              <span className="font-medium">{item.label}</span>
            </Link>
            )
          })}
        </nav>
      </div>

      {/* User Profile */}
      <div className="fixed bottom-6 left-0 right-6">
        <div className="flex items-center gap-3 p-3 rounded-lg">
          <div className="w-10 h-10 bg-gray-300 dark:bg-gray-600 rounded-full flex items-center justify-center">
            <span className="text-gray-600 dark:text-gray-300 text-sm">{getInitials(user?.firstName, user?.lastName)}</span>
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium text-gray-900 dark:text-white truncate">{user?.firstName} {user?.lastName}</p>
            <p className="text-xs text-gray-500 dark:text-gray-400 truncate text-wrap">
              {user?.email}
            </p>
          </div>
        </div>
        <button
          onClick={logOut}
          className="flex items-center cursor-pointer gap-3 px-3 py-2 rounded-lg text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
        >
          <LogOut className="w-5 h-5" />
          <span className="font-medium">Logout</span>
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;
