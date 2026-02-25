'use client';

import { useState } from 'react';
import { ChevronRight, Calendar, TrendingUp, TrendingDown, Eye, FileText } from 'lucide-react';
import Link from 'next/link';

const CompanyDashboard = () => {
  const [dateRange] = useState('Jul 19 - Jul 25');
  const [activeTab, setActiveTab] = useState('Overview');
  const [timeFilter, setTimeFilter] = useState('Week');

  const stats = [
    {
      id: 1,
      value: 76,
      label: 'New candidates to review',
      color: 'bg-indigo-600',
      icon: ChevronRight,
    },
    {
      id: 2,
      value: 3,
      label: 'Schedule for today',
      color: 'bg-green-500',
      icon: ChevronRight,
    },
    {
      id: 3,
      value: 24,
      label: 'Messages received',
      color: 'bg-blue-500',
      icon: ChevronRight,
    },
  ];

  const chartData = [
    { day: 'Mon', jobView: 120, jobApplied: 80 },
    { day: 'Tue', jobView: 90, jobApplied: 122 },
    { day: 'Wed', jobView: 150, jobApplied: 34 },
    { day: 'Thu', jobView: 100, jobApplied: 140 },
    { day: 'Fri', jobView: 130, jobApplied: 90 },
    { day: 'Sat', jobView: 70, jobApplied: 60 },
    { day: 'Sun', jobView: 85, jobApplied: 95 },
  ];

  const jobUpdates = [
    {
      id: 1,
      title: 'Social Media Assistant',
      company: 'Nomad',
      location: 'Paris, France',
      logo: '🏔️',
      logoColor: 'bg-green-500',
      type: 'Full-Time',
      tags: ['Marketing', 'Design'],
      applied: 5,
      capacity: 10,
    },
    {
      id: 2,
      title: 'Brand Designer',
      company: 'Nomad',
      location: 'Paris, France',
      logo: '📦',
      logoColor: 'bg-blue-500',
      type: 'Full-Time',
      tags: ['Business', 'Design'],
      applied: 5,
      capacity: 10,
    },
    {
      id: 3,
      title: 'Interactive Developer',
      company: 'Terraform',
      location: 'Berlin, Germany',
      logo: '🔷',
      logoColor: 'bg-cyan-500',
      type: 'Full-Time',
      tags: ['Marketing', 'Design'],
      applied: 5,
      capacity: 10,
    },
    {
      id: 4,
      title: 'Product Designer',
      company: 'ClassPass',
      location: 'Berlin, Germ..',
      logo: '🔵',
      logoColor: 'bg-blue-600',
      type: 'Full-Time',
      tags: ['Business', 'Design'],
      applied: 5,
      capacity: 10,
    },
  ];

  const maxValue = Math.max(
    ...chartData.flatMap((d) => [d.jobView, d.jobApplied])
  );

  return (
    <div>
      {/* Greeting Section */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-2">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Good morning, Maria</h1>
          <div className="flex items-center gap-2 px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800">
            <span className="text-sm text-gray-700 dark:text-gray-300">{dateRange}</span>
            <Calendar className="w-4 h-4 text-gray-600 dark:text-gray-400" />
          </div>
        </div>
        <p className="text-gray-600 dark:text-gray-400">
          Here is your job listings statistic report from July 19 - July 25.
        </p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-3 gap-6 mb-8">
        {stats.map((stat) => (
          <div
            key={stat.id}
            className={`${stat.color} rounded-lg p-6 text-white flex items-center justify-between cursor-pointer hover:opacity-90 transition-opacity`}
          >
            <div>
              <div className="text-5xl font-bold mb-2">{stat.value}</div>
              <div className="text-sm opacity-90">{stat.label}</div>
            </div>
            <stat.icon className="w-6 h-6" />
          </div>
        ))}
      </div>

      <div className="grid grid-cols-3 gap-6 mb-8">
        {/* Job Statistics */}
        <div className="col-span-2 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-6">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
                Job statistics
              </h2>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Showing Jobstatistic Jul 19-25
              </p>
            </div>
            <div className="flex gap-2">
              {['Week', 'Month', 'Year'].map((filter) => (
                <button
                  key={filter}
                  onClick={() => setTimeFilter(filter)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                    timeFilter === filter
                      ? 'bg-indigo-50 dark:bg-indigo-900/20 text-indigo-600 dark:text-indigo-400'
                      : 'text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-700'
                  }`}
                >
                  {filter}
                </button>
              ))}
            </div>
          </div>

          {/* Tabs */}
          <div className="flex gap-6 mb-6 border-b border-gray-200 dark:border-gray-700">
            {['Overview', 'Jobs View', 'Jobs Applied'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`pb-3 font-medium transition-colors ${
                  activeTab === tab
                    ? 'border-b-2 border-indigo-600 text-indigo-600 dark:text-indigo-400'
                    : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Chart */}
          <div className="relative h-64">
            <div className="flex items-end justify-between h-full gap-4">
              {chartData.map((data, index) => (
                <div key={index} className="flex-1 flex flex-col items-center gap-2 h-full">
                  <div className="flex-1 w-full flex items-end gap-1">
                    {/* Job View Bar */}
                    <div className="flex-1 relative group">
                      <div
                        className="bg-orange-400 rounded-t w-full transition-all hover:opacity-80"
                        style={{
                          height: `${(data.jobView / maxValue) * 100}%`,
                        }}
                      />
                      {index === 2 && (
                        <div className="absolute -top-12 left-1/2 -translate-x-1/2 bg-gray-900 dark:bg-gray-700 text-white text-xs px-2 py-1 rounded whitespace-nowrap">
                          <div>122</div>
                          <div>34</div>
                        </div>
                      )}
                    </div>
                    {/* Job Applied Bar */}
                    <div className="flex-1">
                      <div
                        className="bg-indigo-600 rounded-t w-full transition-all hover:opacity-80"
                        style={{
                          height: `${(data.jobApplied / maxValue) * 100}%`,
                        }}
                      />
                    </div>
                  </div>
                  <span className="text-xs text-gray-600 dark:text-gray-400 mt-2">
                    {data.day}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Legend */}
          <div className="flex items-center justify-center gap-6 mt-6">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-orange-400 rounded"></div>
              <span className="text-sm text-gray-600 dark:text-gray-400">Job View</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-indigo-600 rounded"></div>
              <span className="text-sm text-gray-600 dark:text-gray-400">Job Applied</span>
            </div>
          </div>
        </div>

        {/* Right Column Stats */}
        <div className="space-y-6">
          {/* Job Open */}
          <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-6">
            <h3 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-4">
              Job Open
            </h3>
            <div className="text-5xl font-bold text-gray-900 dark:text-white mb-2">12</div>
            <p className="text-sm text-gray-600 dark:text-gray-400">Jobs Opened</p>
          </div>

          {/* Job Views */}
          <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-6">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-sm font-semibold text-gray-700 dark:text-gray-300">
                Job Views
              </h3>
              <div className="w-8 h-8 bg-orange-100 dark:bg-orange-900/20 rounded-full flex items-center justify-center">
                <Eye className="w-4 h-4 text-orange-600 dark:text-orange-400" />
              </div>
            </div>
            <div className="text-3xl font-bold text-gray-900 dark:text-white mb-1">2,342</div>
            <div className="flex items-center gap-1 text-sm">
              <span className="text-gray-600 dark:text-gray-400">This Week</span>
              <span className="text-indigo-600 dark:text-indigo-400 font-medium">6.4%</span>
              <TrendingUp className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
            </div>
          </div>

          {/* Job Applied */}
          <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-6">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-sm font-semibold text-gray-700 dark:text-gray-300">
                Job Applied
              </h3>
              <div className="w-8 h-8 bg-indigo-100 dark:bg-indigo-900/20 rounded-full flex items-center justify-center">
                <FileText className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
              </div>
            </div>
            <div className="text-3xl font-bold text-gray-900 dark:text-white mb-1">654</div>
            <div className="flex items-center gap-1 text-sm">
              <span className="text-gray-600 dark:text-gray-400">This Week</span>
              <span className="text-red-600 dark:text-red-400 font-medium">0.5%</span>
              <TrendingDown className="w-4 h-4 text-red-600 dark:text-red-400" />
            </div>
          </div>

          {/* Applicants Summary */}
          <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-6">
            <h3 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-4">
              Applicants Summary
            </h3>
            <div className="text-5xl font-bold text-gray-900 dark:text-white mb-4">67</div>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">Applicants</p>

            {/* Progress Bars */}
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="flex-1 h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                  <div className="h-full bg-indigo-600 rounded-full" style={{ width: '45%' }}></div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="flex-1 h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                  <div className="h-full bg-orange-400 rounded-full" style={{ width: '32%' }}></div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="flex-1 h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                  <div className="h-full bg-blue-400 rounded-full" style={{ width: '24%' }}></div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="flex-1 h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                  <div className="h-full bg-cyan-400 rounded-full" style={{ width: '30%' }}></div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="flex-1 h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                  <div className="h-full bg-red-400 rounded-full" style={{ width: '22%' }}></div>
                </div>
              </div>
            </div>

            {/* Legend */}
            <div className="grid grid-cols-2 gap-2 mt-4 text-xs">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-indigo-600 rounded-full"></div>
                <span className="text-gray-600 dark:text-gray-400">Full Time: 45</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
                <span className="text-gray-600 dark:text-gray-400">Internship: 32</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                <span className="text-gray-600 dark:text-gray-400">Part-Time: 24</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-red-400 rounded-full"></div>
                <span className="text-gray-600 dark:text-gray-400">Contract: 30</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                <span className="text-gray-600 dark:text-gray-400">Remote: 22</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Job Updates */}
      <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-6">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-bold text-gray-900 dark:text-white">Job Updates</h2>
          <Link
            href="#"
            className="text-indigo-600 dark:text-indigo-400 text-sm font-medium hover:text-indigo-700 dark:hover:text-indigo-300 flex items-center gap-1"
          >
            View All
            <ChevronRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-4 gap-4">
          {jobUpdates.map((job) => (
            <div
              key={job.id}
              className="border border-gray-200 dark:border-gray-700 rounded-lg p-4 hover:shadow-lg transition-shadow"
            >
              <div className="flex items-start justify-between mb-3">
                <div
                  className={`w-12 h-12 ${job.logoColor} rounded-lg flex items-center justify-center text-white text-xl`}
                >
                  {job.logo}
                </div>
                <span className="text-xs text-green-600 dark:text-green-400 bg-green-50 dark:bg-green-900/20 px-2 py-1 rounded border border-green-200 dark:border-green-800">
                  {job.type}
                </span>
              </div>

              <h3 className="font-semibold text-gray-900 dark:text-white mb-1">{job.title}</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                {job.company} • {job.location}
              </p>

              <div className="flex gap-2 mb-4">
                {job.tags.map((tag, index) => (
                  <span
                    key={index}
                    className={`text-xs px-2 py-1 rounded border ${
                      tag === 'Marketing'
                        ? 'text-orange-600 bg-orange-50 border-orange-200 dark:bg-orange-900/20 dark:border-orange-800'
                        : tag === 'Design'
                        ? 'text-indigo-600 bg-indigo-50 border-indigo-200 dark:bg-indigo-900/20 dark:border-indigo-800'
                        : 'text-green-600 bg-green-50 border-green-200 dark:bg-green-900/20 dark:border-green-800'
                    }`}
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="pt-3 border-t border-gray-200 dark:border-gray-700">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-gray-500 dark:text-gray-400">
                    <span className="font-semibold text-gray-700 dark:text-gray-300">
                      {job.applied} applied
                    </span>{' '}
                    of {job.capacity} capacity
                  </span>
                </div>
                <div className="mt-2 h-1 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-green-500 rounded-full"
                    style={{ width: `${(job.applied / job.capacity) * 100}%` }}
                  ></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CompanyDashboard;
