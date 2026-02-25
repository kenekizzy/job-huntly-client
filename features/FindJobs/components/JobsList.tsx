'use client';

import { useState } from 'react';
import { Grid3x3, List, ChevronLeft, ChevronRight } from 'lucide-react';
import JobCard from './JobCard';

const JobsList = () => {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('list');
  const [sortBy, setSortBy] = useState('Most relevant');
  const [currentPage, setCurrentPage] = useState(1);

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
      applicants: 5,
      capacity: 10,
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
      applicants: 2,
      capacity: 10,
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
      applicants: 8,
      capacity: 12,
    },
    {
      id: 4,
      title: 'Email Marketing',
      company: 'Revolut',
      location: 'Madrid, Spain',
      logo: 'R',
      logoColor: 'bg-gray-900',
      type: 'Full-Time',
      tags: ['Marketing', 'Design'],
      applicants: 0,
      capacity: 10,
    },
    {
      id: 5,
      title: 'Lead Engineer',
      company: 'Canva',
      location: 'Ankara, Turkey',
      logo: '🎨',
      logoColor: 'bg-teal-400',
      type: 'Full-Time',
      tags: ['Marketing', 'Design'],
      applicants: 5,
      capacity: 10,
    },
    {
      id: 6,
      title: 'Product Designer',
      company: 'ClassPass',
      location: 'Berlin, Germany',
      logo: '🔵',
      logoColor: 'bg-blue-600',
      type: 'Full-Time',
      tags: ['Marketing', 'Design'],
      applicants: 5,
      capacity: 10,
    },
    {
      id: 7,
      title: 'Customer Manager',
      company: 'Pitch',
      location: 'Berlin, Germany',
      logo: 'P',
      logoColor: 'bg-black',
      type: 'Full-Time',
      tags: ['Marketing', 'Design'],
      applicants: 5,
      capacity: 10,
    },
  ];

  const totalPages = 33;

  return (
    <div className="flex-1">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">All Jobs</h2>
          <p className="text-sm text-gray-600 dark:text-gray-400">Showing 73 results</p>
        </div>

        <div className="flex items-center gap-4">
          {/* Sort Dropdown */}
          <div className="flex items-center gap-2">
            <span className="text-sm text-gray-600 dark:text-gray-400">Sort by:</span>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white rounded-lg px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-indigo-500"
            >
              <option>Most relevant</option>
              <option>Most recent</option>
              <option>Salary: High to Low</option>
              <option>Salary: Low to High</option>
            </select>
          </div>

          {/* View Mode Toggle */}
          <div className="flex items-center gap-2 border border-gray-300 dark:border-gray-600 rounded-lg p-1 bg-white dark:bg-gray-800">
            <button
              onClick={() => setViewMode('grid')}
              className={`p-2 rounded ${
                viewMode === 'grid' ? 'bg-gray-100 dark:bg-gray-700' : 'hover:bg-gray-50 dark:hover:bg-gray-700'
              }`}
            >
              <Grid3x3 className="w-5 h-5 text-gray-600 dark:text-gray-300" />
            </button>
            <button
              onClick={() => setViewMode('list')}
              className={`p-2 rounded ${
                viewMode === 'list' ? 'bg-indigo-600 text-white' : 'hover:bg-gray-50 dark:hover:bg-gray-700'
              }`}
            >
              <List className={`w-5 h-5 ${viewMode === 'list' ? 'text-white' : 'text-gray-600 dark:text-gray-300'}`} />
            </button>
          </div>
        </div>
      </div>

      {/* Jobs List */}
      <div className="space-y-4 mb-8">
        {jobs.map((job) => (
          <JobCard key={job.id} job={job} />
        ))}
      </div>

      {/* Pagination */}
      <div className="flex items-center justify-center gap-2">
        <button
          onClick={() => setCurrentPage((prev) => Math.max(1, prev - 1))}
          disabled={currentPage === 1}
          className="p-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <ChevronLeft className="w-5 h-5 text-gray-600 dark:text-gray-300" />
        </button>

        {[1, 2, 3, 4, 5].map((page) => (
          <button
            key={page}
            onClick={() => setCurrentPage(page)}
            className={`w-10 h-10 rounded-lg font-medium ${
              currentPage === page
                ? 'bg-indigo-600 text-white'
                : 'border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700'
            }`}
          >
            {page}
          </button>
        ))}

        <span className="px-2 text-gray-500 dark:text-gray-400">...</span>

        <button
          onClick={() => setCurrentPage(totalPages)}
          className="w-10 h-10 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 font-medium"
        >
          {totalPages}
        </button>

        <button
          onClick={() => setCurrentPage((prev) => Math.min(totalPages, prev + 1))}
          disabled={currentPage === totalPages}
          className="p-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <ChevronRight className="w-5 h-5 text-gray-600 dark:text-gray-300" />
        </button>
      </div>
    </div>
  );
};

export default JobsList;
