'use client';

import { useState } from 'react';
import { Search, MapPin, Bell } from 'lucide-react';
import Link from 'next/link';

const SearchHeader = () => {
  const [jobTitle, setJobTitle] = useState('');
  const [location, setLocation] = useState('Florence, Italy');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({ jobTitle, location });
  };

  const popularSearches = ['UI Designer', 'UX Researcher', 'Android', 'Admin'];

  return (
    <div className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
      {/* Top Bar */}
      <div className="border-b border-gray-200 dark:border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Find Jobs</h1>
            <div className="flex items-center gap-3">
              <Link
                href="/"
                className="px-4 py-2 text-indigo-600 dark:text-indigo-400 hover:bg-indigo-50 dark:hover:bg-indigo-900/20 rounded-lg transition-colors text-sm font-medium"
              >
                Back to homepage
              </Link>
              <button className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors relative">
                <Bell className="w-5 h-5 text-gray-600 dark:text-gray-300" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Search Section */}
      <div className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Search Form */}
        <form onSubmit={handleSearch} className="bg-gray-50 dark:bg-gray-900 rounded-lg p-4 mb-4 border border-gray-200 dark:border-gray-700">
          <div className="flex flex-col md:flex-row gap-0">
            {/* Job Title Input */}
            <div className="flex-1 flex items-center gap-3 px-4 py-3 bg-white dark:bg-gray-800 rounded-l-lg border-r border-gray-200 dark:border-gray-700">
              <Search className="w-5 h-5 text-gray-400" />
              <input
                type="text"
                value={jobTitle}
                onChange={(e) => setJobTitle(e.target.value)}
                placeholder="Job title or keyword"
                className="flex-1 outline-none text-gray-700 dark:text-gray-200 placeholder-gray-400 bg-transparent"
              />
            </div>

            {/* Location Dropdown */}
            <div className="flex-1 flex items-center gap-3 px-4 py-3 bg-white dark:bg-gray-800">
              <MapPin className="w-5 h-5 text-gray-400" />
              <select
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className="flex-1 outline-none text-gray-700 dark:text-gray-200 bg-transparent cursor-pointer"
              >
                <option value="Florence, Italy">Florence, Italy</option>
                <option value="Rome, Italy">Rome, Italy</option>
                <option value="Milan, Italy">Milan, Italy</option>
              </select>
            </div>

            {/* Search Button */}
            <button
              type="submit"
              className="bg-indigo-600 text-white px-8 py-3 rounded-r-lg font-medium hover:bg-indigo-700 transition-colors"
            >
              Search
            </button>
          </div>
        </form>

        {/* Popular Searches */}
        <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
          <span>Popular :</span>
          {popularSearches.map((search, index) => (
            <span key={index}>
              <button
                type="button"
                onClick={() => setJobTitle(search)}
                className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
              >
                {search}
              </button>
              {index < popularSearches.length - 1 && <span className="mx-1">,</span>}
            </span>
          ))}
        </div>
        </div>
      </div>
    </div>
  );
};

export default SearchHeader;
