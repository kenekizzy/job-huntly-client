'use client';

import JobHeader from './components/JobHeader';
import JobDetails from './components/JobDetails';
import AboutRole from './components/AboutRole';
import CompanyInfo from './components/CompanyInfo';
import SimilarJobs from './components/SimilarJobs';

interface JobDescriptionProps {
  jobId: string;
}

const JobDescription = ({ jobId }: JobDescriptionProps) => {
  // TODO: Fetch job data based on jobId
  console.log('Job ID:', jobId);

  return (
    <div className="bg-gray-50 dark:bg-gray-900 min-h-screen py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            <JobHeader />
            <JobDetails />
            <CompanyInfo />
            <SimilarJobs />
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <AboutRole />
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobDescription;
