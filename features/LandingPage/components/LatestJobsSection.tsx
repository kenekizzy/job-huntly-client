'use client';

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { LatestJob } from '../types';

const LatestJobsSection = () => {
  const jobs: LatestJob[] = [
    {
      id: 1,
      title: 'Social Media Manager',
      company: 'PiggyVest',
      location: 'Lagos, Nigeria',
      logo: '🐷',
      logoColor: 'bg-pink-100',
      type: 'Full-Time',
      tags: ['Marketing', 'Design'],
    },
    {
      id: 2,
      title: 'Content Creator',
      company: 'Cowrywise',
      location: 'Lagos, Nigeria',
      logo: '💰',
      logoColor: 'bg-green-100',
      type: 'Full-Time',
      tags: ['Marketing', 'Design'],
    },
    {
      id: 3,
      title: 'Brand Designer',
      company: 'Flutterwave',
      location: 'Lagos, Nigeria',
      logo: '⚡',
      logoColor: 'bg-orange-100',
      type: 'Full-Time',
      tags: ['Marketing', 'Design'],
    },
    {
      id: 4,
      title: 'Brand Designer',
      company: 'Payday',
      location: 'Remote, Nigeria',
      logo: '💳',
      logoColor: 'bg-indigo-600',
      type: 'Full-Time',
      tags: ['Marketing', 'Design'],
    },
    {
      id: 5,
      title: 'Frontend Developer',
      company: 'Termii',
      location: 'Ibadan, Nigeria',
      logo: '📱',
      logoColor: 'bg-cyan-100',
      type: 'Full-Time',
      tags: ['Technology', 'Design'],
    },
    {
      id: 6,
      title: 'Product Designer',
      company: 'Helium Health',
      location: 'Lagos, Nigeria',
      logo: '🩺',
      logoColor: 'bg-blue-400',
      type: 'Full-Time',
      tags: ['Design', 'Business'],
    },
    {
      id: 7,
      title: 'HR Manager',
      company: 'Remita',
      location: 'Lagos, Nigeria',
      logo: '📕',
      logoColor: 'bg-red-100',
      type: 'Full-Time',
      tags: ['Business', 'Marketing'],
    },
    {
      id: 8,
      title: 'HR Manager',
      company: 'Sterling Bank',
      location: 'Lagos, Nigeria',
      logo: 'S',
      logoColor: 'bg-emerald-600',
      type: 'Full-Time',
      tags: ['Business', 'Marketing'],
    },
  ];
  

  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-4xl font-bold text-gray-900">
            Latest <span className="text-blue-500">jobs open</span>
          </h2>
          <Link
            href="/jobs"
            className="flex items-center gap-2 text-indigo-600 hover:text-indigo-700 font-medium"
          >
            Show all jobs
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>

        {/* Jobs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {jobs.map((job) => (
            <div
              key={job.id}
              className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow cursor-pointer flex items-center gap-4"
            >
              {/* Logo */}
              <div
                className={`w-16 h-16 ${job.logoColor} rounded-lg flex items-center justify-center text-2xl shrink-0`}
              >
                {job.logo}
              </div>

              {/* Job Info */}
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-gray-900 mb-1">{job.title}</h3>
                <p className="text-sm text-gray-600 mb-3">
                  {job.company} • {job.location}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  <span className="text-xs text-green-600 bg-green-50 px-3 py-1 rounded border border-green-200">
                    {job.type}
                  </span>
                  {job.tags.map((tag) => (
                    <span
                      key={tag}
                      className={`text-xs px-3 py-1 rounded border ${tag === 'Marketing'
                          ? 'text-orange-600 bg-orange-50 border-orange-200'
                          : 'text-indigo-600 bg-indigo-50 border-indigo-200'
                        }`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LatestJobsSection;
