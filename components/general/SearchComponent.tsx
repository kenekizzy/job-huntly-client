'use client';

import { useState } from 'react';
import { Search, MapPin } from 'lucide-react';

const SearchComponent = () => {
    const [jobTitle, setJobTitle] = useState('');
  const [location, setLocation] = useState('Florence, Italy');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({ jobTitle, location });
  };

  const popularSearches = ['UI Designer', 'UX Researcher', 'Android', 'Admin'];
  return (
    <div>
        {/* Search Form */}
        <form onSubmit={handleSearch} className="bg-white rounded-lg shadow-sm p-4 mb-6">
            <div className="flex flex-col md:flex-row gap-4">
              {/* Job Title Input */}
              <div className="flex-1 flex items-center gap-3 px-4 py-3 border-r border-gray-200">
                <Search className="w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  value={jobTitle}
                  onChange={(e) => setJobTitle(e.target.value)}
                  placeholder="Job title or keyword"
                  className="flex-1 outline-none text-gray-700 placeholder-gray-400"
                />
              </div>

              {/* Location Dropdown */}
              <div className="flex-1 flex items-center gap-3 px-4 py-3">
                <MapPin className="w-5 h-5 text-gray-400" />
                <select
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  className="flex-1 outline-none text-gray-700 bg-transparent cursor-pointer"
                >
                  <option value="Florence, Italy">Florence, Italy</option>
                  <option value="Rome, Italy">Rome, Italy</option>
                  <option value="Milan, Italy">Milan, Italy</option>
                  <option value="Venice, Italy">Venice, Italy</option>
                  <option value="Naples, Italy">Naples, Italy</option>
                </select>
              </div>

              {/* Search Button */}
              <button
                type="submit"
                className="bg-indigo-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-indigo-700 transition-colors whitespace-nowrap"
              >
                Search my job
              </button>
            </div>
          </form>

          {/* Popular Searches */}
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <span>Popular :</span>
            {popularSearches.map((search, index) => (
              <span key={index}>
                <button
                  type="button"
                  onClick={() => setJobTitle(search)}
                  className="hover:text-indigo-600 transition-colors"
                >
                  {search}
                </button>
                {index < popularSearches.length - 1 && <span className="mx-1">,</span>}
              </span>
            ))}
          </div>
    </div>
  )
}

export default SearchComponent;