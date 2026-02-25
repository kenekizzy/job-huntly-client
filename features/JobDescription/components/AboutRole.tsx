'use client';

import { Calendar, Briefcase, DollarSign, Users } from 'lucide-react';

const AboutRole = () => {
  const details = [
    { icon: Calendar, label: 'Apply Before', value: 'July 31, 2021' },
    { icon: Briefcase, label: 'Job Posted On', value: 'July 1, 2021' },
    { icon: Users, label: 'Job Type', value: 'Full-Time' },
    { icon: DollarSign, label: 'Salary', value: '$75k-$85k USD' },
  ];

  const categories = ['Marketing', 'Design'];
  const skills = ['Social Media Marketing', 'Marketing', 'English', 'Copy Writing'];

  return (
    <div className="space-y-6">
      {/* About this role */}
      <div className="bg-white dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700">
        <h3 className="font-semibold text-gray-900 dark:text-white mb-4">About this role</h3>
        <div className="space-y-4">
          <div className="flex items-center justify-between text-sm">
            <span className="text-gray-600 dark:text-gray-400">5 applied</span>
            <span className="text-gray-600 dark:text-gray-400">of 10 capacity</span>
          </div>
          <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
            <div className="bg-indigo-600 h-2 rounded-full" style={{ width: '50%' }}></div>
          </div>
        </div>

        <div className="mt-6 space-y-4">
          {details.map((detail, idx) => (
            <div key={idx} className="flex items-center gap-3">
              <detail.icon className="w-5 h-5 text-gray-400" />
              <div className="flex-1">
                <p className="text-xs text-gray-500 dark:text-gray-400">{detail.label}</p>
                <p className="text-sm font-medium text-gray-900 dark:text-white">{detail.value}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Categories */}
      <div className="bg-white dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700">
        <h3 className="font-semibold text-gray-900 dark:text-white mb-4">Categories</h3>
        <div className="flex flex-wrap gap-2">
          {categories.map((category) => (
            <span
              key={category}
              className="px-3 py-1 bg-orange-50 dark:bg-orange-900/20 text-orange-600 dark:text-orange-400 text-sm rounded border border-orange-200 dark:border-orange-800"
            >
              {category}
            </span>
          ))}
        </div>
      </div>

      {/* Required Skills */}
      <div className="bg-white dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700">
        <h3 className="font-semibold text-gray-900 dark:text-white mb-4">Required Skills</h3>
        <div className="flex flex-wrap gap-2">
          {skills.map((skill) => (
            <span
              key={skill}
              className="px-3 py-1 bg-indigo-50 dark:bg-indigo-900/20 text-indigo-600 dark:text-indigo-400 text-sm rounded border border-indigo-200 dark:border-indigo-800"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutRole;
