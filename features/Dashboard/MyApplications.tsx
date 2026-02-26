'use client';

import { Calendar, Search, Filter, X } from 'lucide-react';
import DashboardHeader from '@/components/dashboard/DashboardHeader';
import { getApplications } from './hooks/useDashboard';
import { useEffect } from 'react';

const MyApplications = () => {

  useEffect(() => {
    getUserApplications();
  }, []);

  const getUserApplications = async () => {
    const token = localStorage.getItem('access_token');
    if(!token)
      return
    const res = await getApplications(token);
    console.log(res);
  }
  const tabs = [
    { label: 'All', count: 45 },
    { label: 'In Review', count: 34 },
    { label: 'Interviewing', count: 18 },
    { label: 'Assessment', count: 5 },
    { label: 'Offered', count: 2 },
    { label: 'Hired', count: 1 },
  ];

  const applications = [
    {
      id: 1,
      company: 'Nomad',
      logo: '🏔️',
      logoColor: 'bg-green-500',
      role: 'Social Media Assistant',
      dateApplied: '24 July 2021',
      status: 'In Review',
      statusColor: 'text-orange-600 bg-orange-50 border-orange-200',
    },
    {
      id: 2,
      company: 'Udacity',
      logo: 'U',
      logoColor: 'bg-blue-500',
      role: 'Social Media Assistant',
      dateApplied: '20 July 2021',
      status: 'Shortlisted',
      statusColor: 'text-blue-600 bg-blue-50 border-blue-200',
    },
    {
      id: 3,
      company: 'Packer',
      logo: 'P',
      logoColor: 'bg-red-500',
      role: 'Social Media Assistant',
      dateApplied: '18 July 2021',
      status: 'Offered',
      statusColor: 'text-purple-600 bg-purple-50 border-purple-200',
    },
    {
      id: 4,
      company: 'Divvy',
      logo: 'D',
      logoColor: 'bg-black',
      role: 'Social Media Assistant',
      dateApplied: '14 July 2021',
      status: 'Interviewing',
      statusColor: 'text-yellow-600 bg-yellow-50 border-yellow-200',
    },
    {
      id: 5,
      company: 'DigitalOcean',
      logo: '🌊',
      logoColor: 'bg-blue-400',
      role: 'Social Media Assistant',
      dateApplied: '10 July 2021',
      status: 'Unsuitable',
      statusColor: 'text-red-600 bg-red-50 border-red-200',
    },
  ];

  return (
    <div className="p-8">
      <DashboardHeader title='My Applications'/>
      {/* Greeting */}
      <div className="mb-6">
        <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Keep it up, Jake</h2>
        <p className="text-gray-600 dark:text-gray-400 flex items-center gap-2">
          Here is job applications status from July 19 - July 25.
          <span className="flex items-center gap-1 text-indigo-600 dark:text-indigo-400">
            Jul 19 - Jul 25
            <Calendar className="w-4 h-4" />
          </span>
        </p>
      </div>

      {/* New Feature Banner */}
      <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4 mb-6 flex items-start gap-4">
        <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center text-white text-2xl shrink-0">
          📧
        </div>
        <div className="flex-1">
          <h3 className="font-semibold text-gray-900 dark:text-white mb-1">New Feature</h3>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            You can now request a follow-up 7 days after applying for a job if the application
            status is in review. Only one follow-up is allowed per job.
          </p>
        </div>
        <button className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300">
          <X className="w-5 h-5" />
        </button>
      </div>

      {/* Tabs */}
      <div className="flex items-center gap-4 mb-6 border-b border-gray-200 dark:border-gray-700">
        {tabs.map((tab, idx) => (
          <button
            key={idx}
            className={`pb-3 px-2 font-medium text-sm ${
              idx === 0
                ? 'border-b-2 border-indigo-600 text-indigo-600 dark:text-indigo-400'
                : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
            }`}
          >
            {tab.label} ({tab.count})
          </button>
        ))}
      </div>

      {/* Applications Table */}
      <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700">
        <div className="p-6">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-bold text-gray-900 dark:text-white">
              Applications History
            </h3>
            <div className="flex items-center gap-3">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search"
                  className="pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-400 focus:ring-2 focus:ring-indigo-500 outline-none"
                />
              </div>
              <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700">
                <Filter className="w-5 h-5" />
                <span>Filter</span>
              </button>
            </div>
          </div>

          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-200 dark:border-gray-700">
                <th className="text-left py-3 px-4 text-sm font-medium text-gray-600 dark:text-gray-400">
                  #
                </th>
                <th className="text-left py-3 px-4 text-sm font-medium text-gray-600 dark:text-gray-400">
                  Company Name
                </th>
                <th className="text-left py-3 px-4 text-sm font-medium text-gray-600 dark:text-gray-400">
                  Roles
                </th>
                <th className="text-left py-3 px-4 text-sm font-medium text-gray-600 dark:text-gray-400">
                  Date Applied
                </th>
                <th className="text-left py-3 px-4 text-sm font-medium text-gray-600 dark:text-gray-400">
                  Status
                </th>
                <th className="py-3 px-4"></th>
              </tr>
            </thead>
            <tbody>
              {applications.map((app, idx) => (
                <tr
                  key={app.id}
                  className="border-b border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700/50"
                >
                  <td className="py-4 px-4 text-sm text-gray-600 dark:text-gray-400">
                    {idx + 1}
                  </td>
                  <td className="py-4 px-4">
                    <div className="flex items-center gap-3">
                      <div
                        className={`w-10 h-10 ${app.logoColor} rounded-lg flex items-center justify-center text-white shrink-0`}
                      >
                        {app.logo}
                      </div>
                      <span className="font-medium text-gray-900 dark:text-white">
                        {app.company}
                      </span>
                    </div>
                  </td>
                  <td className="py-4 px-4 text-sm text-gray-600 dark:text-gray-400">
                    {app.role}
                  </td>
                  <td className="py-4 px-4 text-sm text-gray-600 dark:text-gray-400">
                    {app.dateApplied}
                  </td>
                  <td className="py-4 px-4">
                    <span
                      className={`px-3 py-1 text-xs font-medium rounded border ${app.statusColor}`}
                    >
                      {app.status}
                    </span>
                  </td>
                  <td className="py-4 px-4 text-center">
                    <button className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300">
                      •••
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="flex items-center justify-center gap-2 p-6 border-t border-gray-200 dark:border-gray-700">
          <button className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded">
            <span className="text-gray-600 dark:text-gray-400">&lt;</span>
          </button>
          {[1, 2, 3, 4, 5].map((page) => (
            <button
              key={page}
              className={`w-8 h-8 rounded ${
                page === 1
                  ? 'bg-indigo-600 text-white'
                  : 'text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700'
              }`}
            >
              {page}
            </button>
          ))}
          <span className="text-gray-400">...</span>
          <button className="w-8 h-8 rounded text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700">
            33
          </button>
          <button className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded">
            <span className="text-gray-600 dark:text-gray-400">&gt;</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default MyApplications;
