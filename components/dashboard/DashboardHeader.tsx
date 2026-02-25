'use client';

import { Calendar, Bell, Clock } from 'lucide-react';
import Link from 'next/link';
import { ReactNode, useState, useRef, useEffect } from 'react';

interface DashboardHeaderProps {
  title: string;
  showBackButton?: boolean;
  showCalendar?: boolean;
  showNotifications?: boolean;
  actions?: ReactNode;
}

interface Notification {
  id: number;
  type: 'interview' | 'status' | 'invitation';
  avatar: string;
  name: string;
  company?: string;
  message: string;
  badge?: string;
  badgeColor?: string;
  time: string;
  details?: {
    title?: string;
    role?: string;
    date?: string;
    time?: string;
    email?: string;
  };
}

const DashboardHeader = ({
  title,
  showBackButton = true,
  showCalendar = true,
  showNotifications = true,
  actions,
}: DashboardHeaderProps) => {
  const [showNotificationsDropdown, setShowNotificationsDropdown] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const notifications: Notification[] = [
    {
      id: 1,
      type: 'interview',
      avatar: '👨‍💼',
      name: 'Jan Mayer',
      company: 'Nomad',
      message: 'invited you to interview with Nomad',
      badge: 'New',
      badgeColor: 'bg-orange-100 text-orange-600 border-orange-200',
      time: '12 mins ago',
    },
    {
      id: 2,
      type: 'status',
      avatar: '👩',
      name: 'Jana Alicia',
      company: 'Udacity',
      message: 'from Udacity updated your job applications status',
      badge: 'Shortlisted',
      badgeColor: 'bg-green-100 text-green-600 border-green-200',
      time: '3 days ago',
    },
    {
      id: 3,
      type: 'invitation',
      avatar: '👩‍💼',
      name: 'Ally Wales',
      company: 'Digital Ocean',
      message: 'from Digital Ocean sent you an interview invitation',
      time: '14 July 2021 • 3:26 PM',
      details: {
        title: 'Interview - Jake Gyll',
        role: 'Social Media Manager Role',
        date: 'Mon, 20 July 2021',
        time: '12 PM - 12:30 PM',
        email: 'jakegyll@email.com',
      },
    },
  ];

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setShowNotificationsDropdown(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="flex items-center justify-between mb-8">
      <div>
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">{title}</h1>
      </div>
      <div className="flex items-center gap-3">
        {showBackButton && (
          <Link
            href="/"
            className="px-4 py-2 border border-indigo-600 text-indigo-600 dark:text-indigo-400 rounded-lg hover:bg-indigo-50 dark:hover:bg-indigo-900/20 transition-colors"
          >
            Back to homepage
          </Link>
        )}
        {showNotifications && (
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => setShowNotificationsDropdown(!showNotificationsDropdown)}
              className="p-2 border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 relative"
            >
              <Bell className="w-5 h-5 text-gray-600 dark:text-gray-300" />
              <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
            </button>

            {showNotificationsDropdown && (
              <div className="absolute right-0 mt-2 w-[480px] bg-white dark:bg-gray-800 rounded-lg shadow-xl border border-gray-200 dark:border-gray-700 z-50 max-h-[600px] overflow-y-auto">
                {/* Header */}
                <div className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-700">
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                    Notifications
                  </h3>
                  <button className="text-indigo-600 dark:text-indigo-400 text-sm font-medium hover:text-indigo-700 dark:hover:text-indigo-300">
                    Mark all as read
                  </button>
                </div>

                {/* Notifications List */}
                <div className="divide-y divide-gray-200 dark:divide-gray-700">
                  {notifications.map((notification) => (
                    <div
                      key={notification.id}
                      className="p-4 hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors cursor-pointer"
                    >
                      <div className="flex gap-3">
                        {/* Avatar */}
                        <div className="w-12 h-12 rounded-full bg-gray-200 dark:bg-gray-600 flex items-center justify-center text-2xl shrink-0">
                          {notification.avatar}
                        </div>

                        {/* Content */}
                        <div className="flex-1 min-w-0">
                          <p className="text-sm text-gray-700 dark:text-gray-300 mb-2">
                            <span className="font-semibold text-gray-900 dark:text-white">
                              {notification.name}
                            </span>{' '}
                            {notification.message}
                          </p>

                          {/* Badge */}
                          {notification.badge && (
                            <span
                              className={`inline-block px-3 py-1 rounded-full text-xs font-medium border mb-2 ${notification.badgeColor}`}
                            >
                              {notification.badge}
                            </span>
                          )}

                          {/* Interview Details Card */}
                          {notification.details && (
                            <div className="mt-3 p-4 bg-gray-50 dark:bg-gray-700/50 rounded-lg border-l-4 border-indigo-600">
                              <h4 className="font-semibold text-gray-900 dark:text-white mb-1">
                                {notification.details.title}
                              </h4>
                              <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                                {notification.details.role}
                              </p>

                              <div className="grid grid-cols-2 gap-3 mb-3">
                                <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                                  <Calendar className="w-4 h-4" />
                                  <div>
                                    <p className="text-xs text-gray-500 dark:text-gray-500">
                                      Date
                                    </p>
                                    <p className="font-medium text-gray-900 dark:text-white">
                                      {notification.details.date}
                                    </p>
                                  </div>
                                </div>
                                <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                                  <Clock className="w-4 h-4" />
                                  <div>
                                    <p className="text-xs text-gray-500 dark:text-gray-500">
                                      Time
                                    </p>
                                    <p className="font-medium text-gray-900 dark:text-white">
                                      {notification.details.time}
                                    </p>
                                  </div>
                                </div>
                              </div>

                              <div className="flex items-center gap-2">
                                <div className="w-8 h-8 rounded-full bg-gray-300 dark:bg-gray-600 flex items-center justify-center text-sm">
                                  👤
                                </div>
                                <div>
                                  <p className="text-sm font-medium text-gray-900 dark:text-white">
                                    Jake Gyll
                                  </p>
                                  <p className="text-xs text-gray-500 dark:text-gray-400">
                                    {notification.details.email}
                                  </p>
                                </div>
                              </div>
                            </div>
                          )}

                          {/* Time */}
                          <p className="text-xs text-gray-500 dark:text-gray-400 mt-2">
                            {notification.time}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}
        {showCalendar && (
          <button className="p-2 border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700">
            <Calendar className="w-5 h-5 text-gray-600 dark:text-gray-300" />
          </button>
        )}
        {actions}
      </div>
    </div>
  );
};

export default DashboardHeader;
