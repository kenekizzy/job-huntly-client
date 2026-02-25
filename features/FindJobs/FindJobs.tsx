'use client';

import SearchHeader from './components/SearchHeader';
import FilterSidebar from './components/FilterSidebar';
import JobsList from './components/JobsList';

const FindJobs = () => {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <SearchHeader />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-6">
          <FilterSidebar />
          <JobsList />
        </div>
      </div>
    </div>
  );
};

export default FindJobs;