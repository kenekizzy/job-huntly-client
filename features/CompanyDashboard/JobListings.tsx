'use client';

import { useState } from 'react';
import { Calendar, Filter, MoreVertical, ChevronDown, ChevronLeft, ChevronRight } from 'lucide-react';

interface Job {
  id: number;
  role: string;
  status: 'Live' | 'Closed';
  datePosted: string;
  dueDate: string;
  jobType: 'Fulltime' | 'Freelance';
  applicants: number;
  needs: number;
  hired: number;
}

const JobListings = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);

  const jobs: Job[] = [
    {
      id: 1,
      role: 'Social Media Assistant',
      status: 'Live',
      datePosted: '20 May 2020',
      dueDate: '24 May 2020',
      jobType: 'Fulltime',
      applicants: 19,
      needs: 4,
      hired: 11,
    },
    {
      id: 2,
      role: 'Senior Designer',
      status: 'Live',
      datePosted: '18 May 2020',
      dueDate: '24 May 2020',
      jobType: 'Fulltime',
      applicants: 1234,
      needs: 0,
      hired: 20,
    },
    {
      id: 3,
      role: 'Visual Designer',
      status: 'Live',
      datePosted: '15 May 2020',
      dueDate: '24 May 2020',
      jobType: 'Freelance',
      applicants: 2435,
      needs: 1,
      hired: 5,
    },
    {
      id: 4,
      role: 'Data Sience',
      status: 'Closed',
      datePosted: '13 May 2020',
      dueDate: '24 May 2020',
      jobType: 'Freelance',
      applicants: 6234,
      needs: 10,
      hired: 10,
    },
    {
      id: 5,
      role: 'Kotlin Developer',
      status: 'Closed',
      datePosted: '12 May 2020',
      dueDate: '24 May 2020',
      jobType: 'Fulltime',
      applicants: 12,
      needs: 20,
      hired: 20,
    },
    {
      id: 6,
      role: 'React Developer',
      status: 'Closed',
      datePosted: '11 May 2020',
      dueDate: '24 May 2020',
      jobType: 'Fulltime',
      applicants: 14,
      needs: 10,
      hired: 10,
    },
    {
      id: 7,
      role: 'Kotlin Developer',
      status: 'Closed',
      datePosted: '12 May 2020',
      dueDate: '24 May 2020',
      jobType: 'Fulltime',
      applicants: 12,
      needs: 20,
      hired: 20,
    },
  ];

  const getStatusColor = (status: string) => {
    return status === 'Live'
      ? 'text-green-600 bg-green-50 border-green-200 dark:bg-green-900/20 dark:border-green-800'
      : 'text-red-600 bg-red-50 border-red-200 dark:bg-red-900/20 dark:border-red-800';
  };

  const getJobTypeColor = (type: string) => {
    return type === 'Fulltime'
      ? 'text-indigo-600 bg-indigo-50 border-indigo-200 dark:bg-indigo-900/20 dark:border-indigo-800'
      : 'text-orange-600 bg-orange-50 border-orange-200 dark:bg-orange-900/20 dark:border-orange-800';
  };

  const totalPages = Math.ceil(jobs.length / itemsPerPage);

  return (
    <div>
      {/* Header */}
      <div className="flex items-start justify-between mb-6">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Job Listing</h1>
          <p className="text-gray-600 dark:text-gray-400">
            Here is your jobs listing status from July 19 - July 25.
          </p>
        </div>
        <div className="flex items-center gap-3">
          <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
            <Calendar className="w-5 h-5" />
            <span>Jul 19 - Jul 25</span>
          </button>
          <button className="p-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
            <Calendar className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Job List Table */}
      <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 overflow-hidden">
        <div className="p-6 border-b border-gray-200 dark:border-gray-700">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-bold text-gray-900 dark:text-white">Job List</h2>
            <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
              <Filter className="w-5 h-5" />
              <span>Filters</span>
            </button>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 dark:bg-gray-700/50 border-b border-gray-200 dark:border-gray-700">
              <tr>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700 dark:text-gray-300">
                  Roles
                </th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700 dark:text-gray-300">
                  Status
                </th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700 dark:text-gray-300">
                  Date Posted
                </th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700 dark:text-gray-300">
                  Due Date
                </th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700 dark:text-gray-300">
                  Job Type
                </th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700 dark:text-gray-300">
                  Applicants
                </th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700 dark:text-gray-300">
                  Needs
                </th>
                <th className="px-6 py-4 text-left"></th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
              {jobs.map((job) => (
                <tr
                  key={job.id}
                  className="hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors"
                >
                  <td className="px-6 py-4">
                    <span className="font-medium text-gray-900 dark:text-white">{job.role}</span>
                  </td>
                  <td className="px-6 py-4">
                    <span
                      className={`inline-flex px-3 py-1 rounded-full text-xs font-medium border ${getStatusColor(
                        job.status
                      )}`}
                    >
                      {job.status}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <span className="text-gray-700 dark:text-gray-300">{job.datePosted}</span>
                  </td>
                  <td className="px-6 py-4">
                    <span className="text-gray-700 dark:text-gray-300">{job.dueDate}</span>
                  </td>
                  <td className="px-6 py-4">
                    <span
                      className={`inline-flex px-3 py-1 rounded-full text-xs font-medium border ${getJobTypeColor(
                        job.jobType
                      )}`}
                    >
                      {job.jobType}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <span className="text-gray-900 dark:text-white font-medium">
                      {job.applicants.toLocaleString()}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <span className="text-gray-700 dark:text-gray-300">
                      {job.hired} / {job.needs}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <button className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors">
                      <MoreVertical className="w-5 h-5 text-gray-600 dark:text-gray-400" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="flex items-center justify-between px-6 py-4 border-t border-gray-200 dark:border-gray-700">
          <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
            <span>View</span>
            <select
              value={itemsPerPage}
              onChange={(e) => setItemsPerPage(Number(e.target.value))}
              className="px-3 py-1 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              <option value={10}>10</option>
              <option value={20}>20</option>
              <option value={50}>50</option>
            </select>
            <span>Applicants per page</span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
              disabled={currentPage === 1}
              className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <ChevronLeft className="w-5 h-5 text-gray-600 dark:text-gray-400" />
            </button>

            {[...Array(totalPages)].map((_, index) => (
              <button
                key={index + 1}
                onClick={() => setCurrentPage(index + 1)}
                className={`w-8 h-8 rounded-lg font-medium transition-colors ${
                  currentPage === index + 1
                    ? 'bg-indigo-600 text-white'
                    : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
                }`}
              >
                {index + 1}
              </button>
            ))}

            <button
              onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
              disabled={currentPage === totalPages}
              className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <ChevronRight className="w-5 h-5 text-gray-600 dark:text-gray-400" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobListings;
