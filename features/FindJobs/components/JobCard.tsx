'use client';

interface JobCardProps {
  job: {
    id: number;
    title: string;
    company: string;
    location: string;
    logo: string;
    logoColor: string;
    type: string;
    tags: string[];
    applicants: number;
    capacity: number;
  };
}

const JobCard = ({ job }: JobCardProps) => {
  return (
    <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6 hover:shadow-lg transition-shadow">
      <div className="flex items-start justify-between gap-4">
        {/* Left Side - Logo and Info */}
        <div className="flex items-start gap-4 flex-1">
          {/* Logo */}
          <div
            className={`w-14 h-14 ${job.logoColor} rounded-lg flex items-center justify-center text-white text-xl font-bold shrink-0`}
          >
            {job.logo}
          </div>

          {/* Job Info */}
          <div className="flex-1">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">{job.title}</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
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
                  className={`text-xs px-3 py-1 rounded border ${
                    tag === 'Marketing'
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

        {/* Right Side - Apply Button */}
        <div className="flex flex-col items-end gap-2 shrink-0">
          <button className="bg-indigo-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-indigo-700 transition-colors whitespace-nowrap">
            Apply
          </button>
          <p className="text-xs text-gray-500 dark:text-gray-400">
            <span className="font-semibold text-gray-700 dark:text-gray-300">{job.applicants} applied</span> of{' '}
            {job.capacity} capacity
          </p>
        </div>
      </div>
    </div>
  );
};

export default JobCard;
