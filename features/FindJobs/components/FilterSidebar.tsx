'use client';

import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface FilterSection {
  title: string;
  isOpen: boolean;
}

const FilterSidebar = () => {
  const [sections, setSections] = useState<{ [key: string]: boolean }>({
    employment: true,
    categories: true,
    jobLevel: true,
    salaryRange: true,
  });

  const [selectedFilters, setSelectedFilters] = useState({
    employment: [] as string[],
    categories: ['Business', 'Technology'] as string[],
    jobLevel: ['Director'] as string[],
    salaryRange: ['$3000 or above'] as string[],
  });

  const toggleSection = (section: string) => {
    setSections((prev) => ({ ...prev, [section]: !prev[section] }));
  };

  const toggleFilter = (section: string, value: string) => {
    setSelectedFilters((prev) => {
      const current = prev[section as keyof typeof prev] as string[];
      const updated = current.includes(value)
        ? current.filter((item) => item !== value)
        : [...current, value];
      return { ...prev, [section]: updated };
    });
  };

  const employmentTypes = [
    { label: 'Full-time', count: 3 },
    { label: 'Part-Time', count: 5 },
    { label: 'Remote', count: 2 },
    { label: 'Internship', count: 24 },
    { label: 'Contract', count: 3 },
  ];

  const categories = [
    { label: 'Design', count: 24 },
    { label: 'Sales', count: 3 },
    { label: 'Marketing', count: 3 },
    { label: 'Business', count: 3 },
    { label: 'Human Resource', count: 6 },
    { label: 'Finance', count: 4 },
    { label: 'Engineering', count: 4 },
    { label: 'Technology', count: 5 },
  ];

  const jobLevels = [
    { label: 'Entry Level', count: 57 },
    { label: 'Mid Level', count: 3 },
    { label: 'Senior Level', count: 5 },
    { label: 'Director', count: 12 },
    { label: 'VP or Above', count: 8 },
  ];

  const salaryRanges = [
    { label: '$700 - $1000', count: 4 },
    { label: '$100 - $1500', count: 6 },
    { label: '$1500 - $2000', count: 10 },
    { label: '$3000 or above', count: 4 },
  ];

  return (
    <div className="w-full lg:w-72 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6 h-fit">
      {/* Type of Employment */}
      <div className="mb-6">
        <button
          onClick={() => toggleSection('employment')}
          className="flex items-center justify-between w-full mb-4"
        >
          <h3 className="font-semibold text-gray-900 dark:text-white">Type of Employment</h3>
          {sections.employment ? (
            <ChevronUp className="w-5 h-5 text-gray-500 dark:text-gray-400" />
          ) : (
            <ChevronDown className="w-5 h-5 text-gray-500 dark:text-gray-400" />
          )}
        </button>
        {sections.employment && (
          <div className="space-y-3">
            {employmentTypes.map((type) => (
              <label key={type.label} className="flex items-center gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  checked={selectedFilters.employment.includes(type.label)}
                  onChange={() => toggleFilter('employment', type.label)}
                  className="w-4 h-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
                />
                <span className="text-sm text-gray-700 dark:text-gray-300 flex-1">{type.label}</span>
                <span className="text-sm text-gray-500 dark:text-gray-400">({type.count})</span>
              </label>
            ))}
          </div>
        )}
      </div>

      {/* Categories */}
      <div className="mb-6 border-t border-gray-200 dark:border-gray-700 pt-6">
        <button
          onClick={() => toggleSection('categories')}
          className="flex items-center justify-between w-full mb-4"
        >
          <h3 className="font-semibold text-gray-900 dark:text-white">Categories</h3>
          {sections.categories ? (
            <ChevronUp className="w-5 h-5 text-gray-500 dark:text-gray-400" />
          ) : (
            <ChevronDown className="w-5 h-5 text-gray-500 dark:text-gray-400" />
          )}
        </button>
        {sections.categories && (
          <div className="space-y-3">
            {categories.map((category) => (
              <label key={category.label} className="flex items-center gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  checked={selectedFilters.categories.includes(category.label)}
                  onChange={() => toggleFilter('categories', category.label)}
                  className="w-4 h-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
                />
                <span className="text-sm text-gray-700 dark:text-gray-300 flex-1">{category.label}</span>
                <span className="text-sm text-gray-500 dark:text-gray-400">({category.count})</span>
              </label>
            ))}
          </div>
        )}
      </div>

      {/* Job Level */}
      <div className="mb-6 border-t border-gray-200 dark:border-gray-700 pt-6">
        <button
          onClick={() => toggleSection('jobLevel')}
          className="flex items-center justify-between w-full mb-4"
        >
          <h3 className="font-semibold text-gray-900 dark:text-white">Job Level</h3>
          {sections.jobLevel ? (
            <ChevronUp className="w-5 h-5 text-gray-500 dark:text-gray-400" />
          ) : (
            <ChevronDown className="w-5 h-5 text-gray-500 dark:text-gray-400" />
          )}
        </button>
        {sections.jobLevel && (
          <div className="space-y-3">
            {jobLevels.map((level) => (
              <label key={level.label} className="flex items-center gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  checked={selectedFilters.jobLevel.includes(level.label)}
                  onChange={() => toggleFilter('jobLevel', level.label)}
                  className="w-4 h-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
                />
                <span className="text-sm text-gray-700 dark:text-gray-300 flex-1">{level.label}</span>
                <span className="text-sm text-gray-500 dark:text-gray-400">({level.count})</span>
              </label>
            ))}
          </div>
        )}
      </div>

      {/* Salary Range */}
      <div className="border-t border-gray-200 dark:border-gray-700 pt-6">
        <button
          onClick={() => toggleSection('salaryRange')}
          className="flex items-center justify-between w-full mb-4"
        >
          <h3 className="font-semibold text-gray-900 dark:text-white">Salary Range</h3>
          {sections.salaryRange ? (
            <ChevronUp className="w-5 h-5 text-gray-500 dark:text-gray-400" />
          ) : (
            <ChevronDown className="w-5 h-5 text-gray-500 dark:text-gray-400" />
          )}
        </button>
        {sections.salaryRange && (
          <div className="space-y-3">
            {salaryRanges.map((range) => (
              <label key={range.label} className="flex items-center gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  checked={selectedFilters.salaryRange.includes(range.label)}
                  onChange={() => toggleFilter('salaryRange', range.label)}
                  className="w-4 h-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
                />
                <span className="text-sm text-gray-700 dark:text-gray-300 flex-1">{range.label}</span>
                <span className="text-sm text-gray-500 dark:text-gray-400">({range.count})</span>
              </label>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default FilterSidebar;
