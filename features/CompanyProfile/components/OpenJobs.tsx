'use client';

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

const OpenJobs = () => {
  const jobs = [
    {
      id: 1,
      title: 'Social Media Assistant',
      company: 'Nomad',
      location: 'Paris, France',
      logo: '🏔️',
      logoColor: 'bg-green-500',
      type: 'Full-Time',
      tags: ['Marketing', 'Design'],
    },
    {
      id: 2,
      title: 'Brand Designer',
      company: 'Dropbox',
      location: 'San Fransisco, USA',
      logo: '📦',
      logoColor: 'bg-blue-500',
      type: 'Full-Time',
      tags: ['Marketing', 'Design'],
    },
    {
      id: 3,
      title: 'Interactive Developer',
      company: 'Terraform',
      location: 'Hamburg, Germany',
      logo: '🔷',
      logoColor: 'bg-cyan-500',
      type: 'Full-Time',
      tags: ['Marketing', 'Design'],
    },
    {
      id: 4,
      title: 'HR Manager',
      company: 'Packer',
      location: 'Lucern, Switzerland',
      logo: '📕',
      logoColor: 'bg-red-500',
      type: 'Full-Time',
      tags: ['Marketing', 'Design'],
    },
  ];

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg p-8 border border-gray-200 dark:border-gray-700">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-bold text-gray-900 dark:text-white">Open Jobs</h2>
        <Link
          href="/find-jobs"
          className="flex items-center gap-2 text-indigo-600 dark:text-indigo-400 hover:underline text-sm font-medium"
        >
          Show all jobs
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {jobs.map((job) => (
          <Link
            key={job.id}
            href={`/jobs/${job.id}`}
            className="border border-gray-200 dark:border-gray-700 rounded-lg p-4 hover:shadow-lg transition-shadow"
          >
            <div className="flex items-start gap-3 mb-3">
              <div
                className={`w-12 h-12 ${job.logoColor} rounded-lg flex items-center justify-center text-white text-xl shrink-0`}
              >
                {job.logo}
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-1 truncate">
                  {job.title}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 truncate">
                  {job.company} • {job.location}
                </p>
              </div>
            </div>
            <div className="flex flex-wrap gap-2">
              <span className="text-xs text-green-600 bg-green-50 dark:bg-green-900/20 px-2 py-1 rounded border border-green-200 dark:border-green-800">
                {job.type}
              </span>
              {job.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs text-indigo-600 bg-indigo-50 dark:bg-indigo-900/20 px-2 py-1 rounded border border-indigo-200 dark:border-indigo-800"
                >
                  {tag}
                </span>
              ))}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default OpenJobs;
