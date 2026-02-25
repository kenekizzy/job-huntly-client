'use client';

import { useState } from 'react';
import { Search, ThumbsUp, ThumbsDown, MoreHorizontal, MessageCircle } from 'lucide-react';

const HelpCenter = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState('Most relevant');
  const [selectedCategory, setSelectedCategory] = useState('Getting Started');

  const categories = [
    'Getting Started',
    'My Profile',
    'Applying for a job',
    'Job Search Tips',
    'Job Alerts',
  ];

  const articles = [
    {
      id: 1,
      title: 'What is My Applications?',
      content:
        'My Applications is a way for you to track jobs as you move through the application process. Depending on the job you applied to, you may also receive notifications indicating that an application has been actioned by an employer.',
      helpful: null,
    },
    {
      id: 2,
      title: 'How to access my applications history',
      content:
        'To access applications history, go to your My Applications page on your dashboard profile. You must be signed in to your JobHuntly account to view this page.',
      helpful: null,
    },
    {
      id: 3,
      title: 'Not seeing jobs you applied in your my application list?',
      content:
        "Please note that we are unable to track materials submitted for jobs you apply to via an employer's site. As a result, these applications are not recorded in the My Applications section of your JobHuntly account. We suggest keeping a personal record of all positions you have applied to externally.",
      helpful: null,
    },
  ];

  return (
    <div className="flex gap-6">
      {/* Left Sidebar */}
      <div className="w-80 space-y-6">
        {/* Search Box */}
        <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-6">
          <h3 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-4">
            Type your question or search keyword
          </h3>
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search"
              className="w-full pl-10 pr-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-400 focus:ring-2 focus:ring-indigo-500 outline-none"
            />
          </div>
        </div>

        {/* Categories */}
        <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-6">
          <h3 className="text-indigo-600 dark:text-indigo-400 font-semibold mb-4">
            Getting Started
          </h3>
          <div className="space-y-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`w-full text-left px-3 py-2 rounded-lg transition-colors ${
                  selectedCategory === category
                    ? 'bg-indigo-50 dark:bg-indigo-900/20 text-indigo-600 dark:text-indigo-400 font-medium'
                    : 'text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Contact Card */}
        <div className="bg-gradient-to-br from-indigo-600 to-indigo-700 rounded-lg p-6 text-white">
          <h3 className="text-lg font-semibold mb-2">Didn't find what you were looking for?</h3>
          <p className="text-indigo-100 text-sm mb-4">Contact our customer service</p>
          <button className="w-full bg-white text-indigo-600 px-4 py-2 rounded-lg font-medium hover:bg-indigo-50 transition-colors">
            Contact Us
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1">
        {/* Sort Dropdown */}
        <div className="flex items-center justify-end gap-2 mb-6">
          <span className="text-sm text-gray-600 dark:text-gray-400">Sort by:</span>
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white rounded-lg px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-indigo-500"
          >
            <option>Most relevant</option>
            <option>Most recent</option>
            <option>Most helpful</option>
          </select>
        </div>

        {/* Articles */}
        <div className="space-y-4">
          {articles.map((article) => (
            <div
              key={article.id}
              className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-6"
            >
              <div className="flex items-start justify-between mb-4">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white pr-4">
                  {article.title}
                </h3>
                <button className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors shrink-0">
                  <MoreHorizontal className="w-5 h-5 text-gray-600 dark:text-gray-400" />
                </button>
              </div>

              <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-6">
                {article.content}
              </p>

              <div className="flex items-center gap-4">
                <span className="text-sm text-gray-600 dark:text-gray-400">
                  Was this article helpful?
                </span>
                <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
                  <ThumbsUp className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
                  <span className="text-sm text-gray-700 dark:text-gray-300">Yes</span>
                </button>
                <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
                  <ThumbsDown className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
                  <span className="text-sm text-gray-700 dark:text-gray-300">No</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Floating Chat Button */}
      <button className="fixed bottom-8 right-8 w-14 h-14 bg-gray-900 dark:bg-gray-700 text-white rounded-full flex items-center justify-center shadow-lg hover:bg-gray-800 dark:hover:bg-gray-600 transition-colors">
        <MessageCircle className="w-6 h-6" />
      </button>
    </div>
  );
};

export default HelpCenter;
