'use client';

import { Calendar, ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import Link from 'next/link';
import DashboardHeader from '@/components/dashboard/DashboardHeader';

const Dashboard = () => {
  const applications = [
    {
      id: 1,
      title: 'Social Media Assistant',
      company: 'Nomad',
      location: 'Paris, France',
      type: 'Full-Time',
      logo: '🏔️',
      logoColor: 'bg-green-500',
      dateApplied: '24 July 2021',
      status: 'In Review',
      statusColor: 'text-orange-600 bg-orange-50 border-orange-200',
    },
    {
      id: 2,
      title: 'Social Media Assistant',
      company: 'Udacity',
      location: 'New York, USA',
      type: 'Full-Time',
      logo: 'U',
      logoColor: 'bg-blue-500',
      dateApplied: '23 July 2021',
      status: 'Shortlisted',
      statusColor: 'text-blue-600 bg-blue-50 border-blue-200',
    },
    {
      id: 3,
      title: 'Social Media Assistant',
      company: 'Packer',
      location: 'Madrid, Spain',
      type: 'Full-Time',
      logo: 'P',
      logoColor: 'bg-red-500',
      dateApplied: '22 July 2021',
      status: 'Declined',
      statusColor: 'text-red-600 bg-red-50 border-red-200',
    },
  ];

  const interviews = [
    {
      time: '10:00 AM',
      name: 'Joe Bartmann',
      role: 'HR Manager at Divvy',
      avatar: '👨‍💼',
    },
  ];

  return (
    <div className="p-8">
      <DashboardHeader title="Dashboard"/>
      {/* Greeting */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
          Good morning, Jake
        </h2>
        <p className="text-gray-600 dark:text-gray-400 flex items-center gap-2">
          Here is what&apos;s happening with your job search applications from July 19 - July 25.
          <span className="flex items-center gap-1 text-indigo-600 dark:text-indigo-400">
            Jul 19 - Jul 25
            <Calendar className="w-4 h-4" />
          </span>
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {/* Total Jobs Applied */}
        <div className="bg-white dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700">
          <h3 className="text-sm font-medium text-gray-600 dark:text-gray-400 mb-4">
            Total Jobs Applied
          </h3>
          <div className="flex items-end gap-4">
            <div className="text-5xl font-bold text-gray-900 dark:text-white">45</div>
            <div className="text-6xl opacity-10">📄</div>
          </div>
        </div>

        {/* Jobs Applied Status */}
        <div className="bg-white dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700">
          <h3 className="text-sm font-medium text-gray-600 dark:text-gray-400 mb-4">
            Jobs Applied Status
          </h3>
          <div className="flex items-center gap-6">
            <div className="relative w-32 h-32">
              <svg className="w-full h-full transform -rotate-90">
                <circle
                  cx="64"
                  cy="64"
                  r="56"
                  stroke="currentColor"
                  strokeWidth="16"
                  fill="none"
                  className="text-gray-200 dark:text-gray-700"
                />
                <circle
                  cx="64"
                  cy="64"
                  r="56"
                  stroke="currentColor"
                  strokeWidth="16"
                  fill="none"
                  strokeDasharray="351.86"
                  strokeDashoffset="140"
                  className="text-indigo-600"
                />
              </svg>
            </div>
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-indigo-600 rounded-sm"></div>
                <span className="text-sm text-gray-600 dark:text-gray-400">
                  60% Unsuitable
                </span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-gray-300 dark:bg-gray-600 rounded-sm"></div>
                <span className="text-sm text-gray-600 dark:text-gray-400">
                  40% Interviewed
                </span>
              </div>
            </div>
          </div>
          <Link
            href="/dashboard/applications"
            className="flex items-center gap-2 text-indigo-600 dark:text-indigo-400 hover:underline text-sm font-medium mt-4"
          >
            View All Applications
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Upcoming Interviews */}
        <div className="bg-white dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-sm font-medium text-gray-600 dark:text-gray-400">
              Upcoming Interviews
            </h3>
            <div className="flex items-center gap-2">
              <button className="p-1 hover:bg-gray-100 dark:hover:bg-gray-700 rounded">
                <ChevronLeft className="w-4 h-4 text-gray-600 dark:text-gray-400" />
              </button>
              <button className="p-1 hover:bg-gray-100 dark:hover:bg-gray-700 rounded">
                <ChevronRight className="w-4 h-4 text-gray-600 dark:text-gray-400" />
              </button>
            </div>
          </div>
          <p className="text-sm font-medium text-gray-900 dark:text-white mb-4">
            Today, 26 November
          </p>
          <div className="space-y-3">
            <div className="text-xs text-gray-500 dark:text-gray-400">10:00 AM</div>
            {interviews.map((interview, idx) => (
              <div
                key={idx}
                className="flex items-center gap-3 p-3 bg-indigo-50 dark:bg-indigo-900/20 rounded-lg"
              >
                <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center text-xl">
                  {interview.avatar}
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-900 dark:text-white">
                    {interview.name}
                  </p>
                  <p className="text-xs text-gray-600 dark:text-gray-400">{interview.role}</p>
                </div>
              </div>
            ))}
            <div className="text-xs text-gray-500 dark:text-gray-400">10:30 AM</div>
            <div className="text-xs text-gray-500 dark:text-gray-400">11:00 AM</div>
          </div>
        </div>

        {/* Interviewed */}
        <div className="bg-white dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700">
          <h3 className="text-sm font-medium text-gray-600 dark:text-gray-400 mb-4">
            Interviewed
          </h3>
          <div className="flex items-end gap-4">
            <div className="text-5xl font-bold text-gray-900 dark:text-white">18</div>
            <div className="text-6xl opacity-10">💬</div>
          </div>
        </div>
      </div>

      {/* Recent Applications History */}
      <div className="bg-white dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700">
        <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-6">
          Recent Applications History
        </h2>
        <div className="space-y-4">
          {applications.map((app) => (
            <div
              key={app.id}
              className="flex items-center justify-between p-4 border border-gray-200 dark:border-gray-700 rounded-lg hover:shadow-md transition-shadow"
            >
              <div className="flex items-center gap-4 flex-1">
                <div
                  className={`w-12 h-12 ${app.logoColor} rounded-lg flex items-center justify-center text-white text-xl shrink-0`}
                >
                  {app.logo}
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white">{app.title}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {app.company} • {app.location} • {app.type}
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-8">
                <div>
                  <p className="text-xs text-gray-500 dark:text-gray-400 mb-1">Date Applied</p>
                  <p className="text-sm font-medium text-gray-900 dark:text-white">
                    {app.dateApplied}
                  </p>
                </div>
                <span
                  className={`px-3 py-1 text-xs font-medium rounded border ${app.statusColor}`}
                >
                  {app.status}
                </span>
                <button className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300">
                  •••
                </button>
              </div>
            </div>
          ))}
        </div>
        <Link
          href="/dashboard/applications"
          className="flex items-center justify-center gap-2 text-indigo-600 dark:text-indigo-400 hover:underline text-sm font-medium mt-6"
        >
          View all applications history
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  );
};

export default Dashboard;
