'use client';

import { useState } from 'react';
import { Share2 } from 'lucide-react';
import JobApplicationModal from '@/components/modals/JobApplicationModal';

const JobHeader = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <div className="bg-white dark:bg-gray-800 rounded-lg p-8 border border-gray-200 dark:border-gray-700">
        <div className="flex items-start justify-between mb-6">
          <div className="flex items-start gap-4">
            <div className="w-16 h-16 bg-indigo-600 rounded-lg flex items-center justify-center text-white text-2xl font-bold shrink-0">
              S
            </div>
            <div>
              <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                Social Media Assistant
              </h1>
              <p className="text-gray-600 dark:text-gray-400">
                Stripe • Paris, France • Full-Time
              </p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <button className="p-2 border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
              <Share2 className="w-5 h-5 text-gray-600 dark:text-gray-300" />
            </button>
            <button
              onClick={() => setIsModalOpen(true)}
              className="bg-indigo-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-indigo-700 transition-colors"
            >
              Apply
            </button>
          </div>
        </div>
      </div>

      <JobApplicationModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        jobTitle="Social Media Assistant"
        company="Nomad"
        location="Paris, France"
        jobType="Full-Time"
        logo="🏔️"
        logoColor="bg-green-500"
      />
    </>
  );
};

export default JobHeader;
