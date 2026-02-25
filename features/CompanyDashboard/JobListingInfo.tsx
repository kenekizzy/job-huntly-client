'use client';

import { useState } from 'react';
import { ArrowLeft, ChevronDown, Edit, Search, Filter, Star, MoreVertical, Eye, TrendingUp, TrendingDown } from 'lucide-react';
import Link from 'next/link';

const JobListingInfo = () => {
  const [activeTab, setActiveTab] = useState('Applicants');
  const [viewMode, setViewMode] = useState<'pipeline' | 'table'>('pipeline');

  const tabs = ['Applicants', 'Job Details', 'Analytics'];

  return (
    <div>
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-4">
          <Link href="/company-dashboard/jobs">
            <button className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors">
              <ArrowLeft className="w-6 h-6 text-gray-600 dark:text-gray-400" />
            </button>
          </Link>
          <div>
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Social Media Assistant</h1>
            <p className="text-gray-600 dark:text-gray-400">Design • Full-Time • 4 / 11 Hired</p>
          </div>
        </div>
        <button className="flex items-center gap-2 px-4 py-2 text-indigo-600 dark:text-indigo-400 border border-indigo-600 dark:border-indigo-400 rounded-lg font-medium hover:bg-indigo-50 dark:hover:bg-indigo-900/20 transition-colors">
          <ChevronDown className="w-5 h-5" />
          More Action
        </button>
      </div>

      {/* Tabs */}
      <div className="flex gap-8 mb-6 border-b border-gray-200 dark:border-gray-700">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`pb-4 font-medium transition-colors ${
              activeTab === tab
                ? 'border-b-2 border-indigo-600 text-indigo-600 dark:text-indigo-400'
                : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      {activeTab === 'Applicants' && <ApplicantsTab viewMode={viewMode} setViewMode={setViewMode} />}
      {activeTab === 'Job Details' && <JobDetailsTab />}
      {activeTab === 'Analytics' && <AnalyticsTab />}
    </div>
  );
};

// Applicants Tab Component
const ApplicantsTab = ({ viewMode, setViewMode }: { viewMode: 'pipeline' | 'table'; setViewMode: (mode: 'pipeline' | 'table') => void }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const applicantsByStage = {
    'In Review': [
      { id: 1, name: 'Jake Gyll', avatar: '👨‍💼', appliedDate: '13 July, 2021', score: 4.0 },
      { id: 2, name: 'Jenny Wilson', avatar: '👩‍🦰', appliedDate: '13 July, 2021', score: 0.0 },
      { id: 3, name: 'Jacob Jones', avatar: '👨‍💻', appliedDate: '13 July, 2021', score: 0.0 },
      { id: 4, name: 'Wade Warren', avatar: '👨‍🦱', appliedDate: '13 July, 2021', score: 0.0 },
    ],
    'Shortlisted': [
      { id: 5, name: 'Jane Cooper', avatar: '👩', appliedDate: '13 July, 2021', score: 0.0 },
      { id: 6, name: 'Courtney Henry', avatar: '👨', appliedDate: '13 July, 2021', score: 0.0 },
      { id: 7, name: 'Marvin McKinney', avatar: '👨‍🦲', appliedDate: '13 July, 2021', score: 0.0 },
    ],
    'Interview': [
      { id: 8, name: 'Floyd Miles', avatar: '👨‍🔧', appliedDate: '13 July, 2021', score: 0.5 },
      { id: 9, name: 'Devon Lane', avatar: '👨‍💼', appliedDate: '13 July, 2021', score: 0.0 },
    ],
    'Hired': [
      { id: 10, name: 'Annette Black', avatar: '👩‍💼', appliedDate: '13 July, 2021', score: 0.0 },
      { id: 11, name: 'Brooklyn Simmons', avatar: '👨', appliedDate: '13 July, 2021', score: 0.0 },
      { id: 12, name: 'Ronald Richards', avatar: '👨‍🦱', appliedDate: '13 July, 2021', score: 0.0 },
    ],
  };

  const allApplicants = [
    { id: 1, name: 'Jake Gyll', avatar: '👨‍💼', score: 0.0, stage: 'In Review', appliedDate: '13 July, 2021' },
    { id: 2, name: 'Guy Hawkins', avatar: '👨', score: 0.0, stage: 'In Review', appliedDate: '13 July, 2021' },
    { id: 3, name: 'Cyndy Lillibridge', avatar: '👩', score: 4.5, stage: 'Shortlisted', appliedDate: '12 July, 2021' },
    { id: 4, name: 'Rodolfo Goode', avatar: '👨‍🦱', score: 3.75, stage: 'Declined', appliedDate: '11 July, 2021' },
    { id: 5, name: 'Leif Floyd', avatar: '👨‍🦲', score: 4.6, stage: 'Hired', appliedDate: '11 July, 2021' },
    { id: 6, name: 'Jenny Wilson', avatar: '👩‍🦰', score: 4.6, stage: 'Hired', appliedDate: '9 July, 2021' },
    { id: 7, name: 'Jerome Bell', avatar: '👨‍💻', score: 4.0, stage: 'Interview', appliedDate: '5 July, 2021' },
    { id: 8, name: 'Eleanor Pena', avatar: '👩‍💼', score: 3.90, stage: 'Declined', appliedDate: '5 July, 2021' },
    { id: 9, name: 'Darrell Steward', avatar: '👨‍🎓', score: 4.20, stage: 'Shortlisted', appliedDate: '3 July, 2021' },
    { id: 10, name: 'Floyd Miles', avatar: '👨‍🔧', score: 4.10, stage: 'Interview', appliedDate: '1 July, 2021' },
  ];

  const getStageColor = (stage: string) => {
    switch (stage) {
      case 'In Review':
        return 'text-orange-600 bg-orange-50 border-orange-200 dark:bg-orange-900/20 dark:border-orange-800';
      case 'Shortlisted':
        return 'text-indigo-600 bg-indigo-50 border-indigo-200 dark:bg-indigo-900/20 dark:border-indigo-800';
      case 'Declined':
        return 'text-red-600 bg-red-50 border-red-200 dark:bg-red-900/20 dark:border-red-800';
      case 'Hired':
        return 'text-green-600 bg-green-50 border-green-200 dark:bg-green-900/20 dark:border-green-800';
      case 'Interview':
        return 'text-blue-600 bg-blue-50 border-blue-200 dark:bg-blue-900/20 dark:border-blue-800';
      default:
        return 'text-gray-600 bg-gray-50 border-gray-200 dark:bg-gray-900/20 dark:border-gray-800';
    }
  };

  return (
    <div>
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-bold text-gray-900 dark:text-white">Total Applicants: 19</h2>
        <div className="flex items-center gap-3">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search Applicants"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 w-64"
            />
          </div>
          <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
            <Filter className="w-5 h-5" />
            <span>Filter</span>
          </button>
          <div className="flex gap-2">
            <button
              onClick={() => setViewMode('pipeline')}
              className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                viewMode === 'pipeline'
                  ? 'bg-indigo-600 text-white'
                  : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 border border-gray-300 dark:border-gray-600'
              }`}
            >
              Pipeline View
            </button>
            <button
              onClick={() => setViewMode('table')}
              className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                viewMode === 'table'
                  ? 'bg-indigo-600 text-white'
                  : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 border border-gray-300 dark:border-gray-600'
              }`}
            >
              Table View
            </button>
          </div>
        </div>
      </div>

      {/* Pipeline View */}
      {viewMode === 'pipeline' && (
        <div className="grid grid-cols-4 gap-4">
          {Object.entries(applicantsByStage).map(([stage, applicants]) => (
            <div key={stage} className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700">
              <div className="p-4 border-b border-gray-200 dark:border-gray-700 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className={`w-2 h-2 rounded-full ${
                    stage === 'In Review' ? 'bg-orange-500' :
                    stage === 'Shortlisted' ? 'bg-indigo-500' :
                    stage === 'Interview' ? 'bg-blue-500' :
                    'bg-green-500'
                  }`}></div>
                  <h3 className="font-semibold text-gray-900 dark:text-white">{stage}</h3>
                  <span className="px-2 py-0.5 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded text-sm">
                    {applicants.length}
                  </span>
                </div>
                <button className="p-1 hover:bg-gray-100 dark:hover:bg-gray-700 rounded transition-colors">
                  <MoreVertical className="w-4 h-4 text-gray-600 dark:text-gray-400" />
                </button>
              </div>
              <div className="p-4 space-y-3">
                {applicants.map((applicant) => (
                  <div key={applicant.id} className="p-3 border border-gray-200 dark:border-gray-700 rounded-lg hover:shadow-md transition-shadow">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 bg-gray-300 dark:bg-gray-600 rounded-full flex items-center justify-center text-xl">
                        {applicant.avatar}
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="font-semibold text-gray-900 dark:text-white text-sm">{applicant.name}</h4>
                        <button className="text-xs text-indigo-600 dark:text-indigo-400 hover:underline">
                          View Profile
                        </button>
                      </div>
                    </div>
                    <div className="flex items-center justify-between text-xs text-gray-600 dark:text-gray-400">
                      <span>Applied on<br />{applicant.appliedDate}</span>
                      <div className="flex items-center gap-1">
                        <span>Score</span>
                        <Star className="w-3 h-3 text-yellow-500 fill-yellow-500" />
                        <span className="font-semibold text-gray-900 dark:text-white">{applicant.score}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Table View */}
      {viewMode === 'table' && (
        <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 overflow-hidden">
          <table className="w-full">
            <thead className="bg-gray-50 dark:bg-gray-700/50 border-b border-gray-200 dark:border-gray-700">
              <tr>
                <th className="px-6 py-4 text-left">
                  <input type="checkbox" className="w-4 h-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500" />
                </th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700 dark:text-gray-300">
                  Full name
                </th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700 dark:text-gray-300">
                  Score
                </th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700 dark:text-gray-300">
                  Hiring Stage
                </th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700 dark:text-gray-300">
                  Applied Date
                </th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700 dark:text-gray-300">
                  Action
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
              {allApplicants.map((applicant) => (
                <tr key={applicant.id} className="hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors">
                  <td className="px-6 py-4">
                    <input type="checkbox" className="w-4 h-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500" />
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-gray-300 dark:bg-gray-600 rounded-full flex items-center justify-center text-xl">
                        {applicant.avatar}
                      </div>
                      <span className="font-medium text-gray-900 dark:text-white">{applicant.name}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2">
                      <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                      <span className="text-gray-900 dark:text-white font-medium">{applicant.score}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className={`inline-flex px-3 py-1 rounded-full text-xs font-medium border ${getStageColor(applicant.stage)}`}>
                      {applicant.stage}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <span className="text-gray-700 dark:text-gray-300">{applicant.appliedDate}</span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2">
                      <button className="px-4 py-2 text-indigo-600 dark:text-indigo-400 border border-indigo-600 dark:border-indigo-400 rounded-lg font-medium hover:bg-indigo-50 dark:hover:bg-indigo-900/20 transition-colors text-sm">
                        See Application
                      </button>
                      <button className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors">
                        <MoreVertical className="w-5 h-5 text-gray-600 dark:text-gray-400" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

// Job Details Tab Component
const JobDetailsTab = () => {
  return (
    <div className="grid grid-cols-3 gap-6">
      {/* Left Column */}
      <div className="col-span-2 space-y-6">
        {/* Job Header */}
        <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-6">
          <div className="flex items-start justify-between mb-6">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 bg-indigo-600 rounded-lg flex items-center justify-center text-white text-2xl font-bold">
                S
              </div>
              <div>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-1">Social Media Assistant</h2>
              </div>
            </div>
            <button className="flex items-center gap-2 px-4 py-2 text-indigo-600 dark:text-indigo-400 border border-indigo-600 dark:border-indigo-400 rounded-lg font-medium hover:bg-indigo-50 dark:hover:bg-indigo-900/20 transition-colors">
              <Edit className="w-4 h-4" />
              Edit Job Details
            </button>
          </div>
        </div>

        {/* Description */}
        <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-6">
          <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">Description</h3>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            Stripe is looking for Social Media Marketing expert to help manage our online networks. You will be responsible for monitoring our social media channels, creating content, finding effective ways to engage the community and incentivize others to engage on our channels.
          </p>
        </div>

        {/* Responsibilities */}
        <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-6">
          <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">Responsibilities</h3>
          <ul className="space-y-3">
            <li className="flex items-start gap-3">
              <div className="w-5 h-5 rounded-full border-2 border-gray-300 dark:border-gray-600 mt-0.5"></div>
              <span className="text-gray-700 dark:text-gray-300">Community engagement to ensure that is supported and actively represented online</span>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-5 h-5 rounded-full border-2 border-gray-300 dark:border-gray-600 mt-0.5"></div>
              <span className="text-gray-700 dark:text-gray-300">Focus on social media content development and publication</span>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-5 h-5 rounded-full border-2 border-gray-300 dark:border-gray-600 mt-0.5"></div>
              <span className="text-gray-700 dark:text-gray-300">Marketing and strategy support</span>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-5 h-5 rounded-full border-2 border-gray-300 dark:border-gray-600 mt-0.5"></div>
              <span className="text-gray-700 dark:text-gray-300">Stay on top of trends in social media platforms, and suggest content ideas to the team</span>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-5 h-5 rounded-full border-2 border-gray-300 dark:border-gray-600 mt-0.5"></div>
              <span className="text-gray-700 dark:text-gray-300">Engage with online communities</span>
            </li>
          </ul>
        </div>

        {/* Who You Are */}
        <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-6">
          <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">Who You Are</h3>
          <ul className="space-y-3">
            <li className="flex items-start gap-3">
              <div className="w-5 h-5 rounded-full border-2 border-gray-300 dark:border-gray-600 mt-0.5"></div>
              <span className="text-gray-700 dark:text-gray-300">You get energy from people and building the ideal work environment</span>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-5 h-5 rounded-full border-2 border-gray-300 dark:border-gray-600 mt-0.5"></div>
              <span className="text-gray-700 dark:text-gray-300">You have a sense for beautiful spaces and office experiences</span>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-5 h-5 rounded-full border-2 border-gray-300 dark:border-gray-600 mt-0.5"></div>
              <span className="text-gray-700 dark:text-gray-300">You are a confident office manager, ready for added responsibilities</span>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-5 h-5 rounded-full border-2 border-gray-300 dark:border-gray-600 mt-0.5"></div>
              <span className="text-gray-700 dark:text-gray-300">You&apos;re detail-oriented and creative</span>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-5 h-5 rounded-full border-2 border-gray-300 dark:border-gray-600 mt-0.5"></div>
              <span className="text-gray-700 dark:text-gray-300">You&apos;re a growth marketer and know how to run campaigns</span>
            </li>
          </ul>
        </div>

        {/* Nice-To-Haves */}
        <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-6">
          <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">Nice-To-Haves</h3>
          <ul className="space-y-3">
            <li className="flex items-start gap-3">
              <div className="w-5 h-5 rounded-full border-2 border-gray-300 dark:border-gray-600 mt-0.5"></div>
              <span className="text-gray-700 dark:text-gray-300">Fluent in English</span>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-5 h-5 rounded-full border-2 border-gray-300 dark:border-gray-600 mt-0.5"></div>
              <span className="text-gray-700 dark:text-gray-300">Project management skills</span>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-5 h-5 rounded-full border-2 border-gray-300 dark:border-gray-600 mt-0.5"></div>
              <span className="text-gray-700 dark:text-gray-300">Copy editing skills</span>
            </li>
          </ul>
        </div>

        {/* Perks & Benefits */}
        <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-6">
          <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">Perks & Benefits</h3>
          <p className="text-gray-600 dark:text-gray-400 mb-6">This job comes with several perks and benefits</p>
          <div className="grid grid-cols-2 gap-6">
            <div className="text-center">
              <div className="text-4xl mb-3">🏥</div>
              <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Full Healthcare</h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                We believe in thriving communities and that starts with our team being happy and healthy.
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-3">🏖️</div>
              <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Unlimited Vacation</h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                We believe you should have a flexible schedule that makes space for family, wellness, and fun.
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-3">💼</div>
              <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Skill Development</h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                We believe in always learning and leveling up our skills. Whether it&apos;s a conference or online course.
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-3">🏕️</div>
              <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Team Summits</h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Every 6 months we have a full team summit where we have fun, reflect, and plan for the upcoming quarter.
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-3">☕</div>
              <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Remote Working</h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                You know how you perform your best. Work from home, coffee shop or anywhere when you feel like it.
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-3">🚌</div>
              <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Commuter Benefits</h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                We&apos;re grateful for all the time and energy each team member puts into getting to work every day.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Right Column */}
      <div className="space-y-6">
        {/* About this role */}
        <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-6">
          <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">About this role</h3>
          <div className="space-y-4">
            <div>
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">Applied</p>
              <div className="flex items-center gap-2">
                <p className="text-lg font-semibold text-gray-900 dark:text-white">5 applied</p>
                <span className="text-sm text-gray-600 dark:text-gray-400">of 10 capacity</span>
              </div>
              <div className="mt-2 w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                <div className="bg-green-500 h-2 rounded-full" style={{ width: '50%' }}></div>
              </div>
            </div>
            <div className="pt-4 border-t border-gray-200 dark:border-gray-700 space-y-3">
              <div className="flex justify-between">
                <span className="text-sm text-gray-600 dark:text-gray-400">Apply Before</span>
                <span className="text-sm font-semibold text-gray-900 dark:text-white">July 31, 2021</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-gray-600 dark:text-gray-400">Job Posted On</span>
                <span className="text-sm font-semibold text-gray-900 dark:text-white">July 1, 2021</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-gray-600 dark:text-gray-400">Job Type</span>
                <span className="text-sm font-semibold text-gray-900 dark:text-white">Full-Time</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-gray-600 dark:text-gray-400">Salary</span>
                <span className="text-sm font-semibold text-gray-900 dark:text-white">$75k-$85k USD</span>
              </div>
            </div>
          </div>
        </div>

        {/* Categories */}
        <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-6">
          <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">Categories</h3>
          <div className="flex flex-wrap gap-2">
            <span className="px-3 py-1 bg-orange-50 dark:bg-orange-900/20 text-orange-600 dark:text-orange-400 rounded-full text-sm border border-orange-200 dark:border-orange-800">
              Marketing
            </span>
            <span className="px-3 py-1 bg-indigo-50 dark:bg-indigo-900/20 text-indigo-600 dark:text-indigo-400 rounded-full text-sm border border-indigo-200 dark:border-indigo-800">
              Design
            </span>
          </div>
        </div>

        {/* Required Skills */}
        <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-6">
          <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">Required Skills</h3>
          <div className="flex flex-wrap gap-2">
            <span className="px-3 py-1 bg-indigo-50 dark:bg-indigo-900/20 text-indigo-600 dark:text-indigo-400 rounded-full text-sm border border-indigo-200 dark:border-indigo-800">
              Project Management
            </span>
            <span className="px-3 py-1 bg-indigo-50 dark:bg-indigo-900/20 text-indigo-600 dark:text-indigo-400 rounded-full text-sm border border-indigo-200 dark:border-indigo-800">
              Copywriting
            </span>
            <span className="px-3 py-1 bg-indigo-50 dark:bg-indigo-900/20 text-indigo-600 dark:text-indigo-400 rounded-full text-sm border border-indigo-200 dark:border-indigo-800">
              English
            </span>
            <span className="px-3 py-1 bg-indigo-50 dark:bg-indigo-900/20 text-indigo-600 dark:text-indigo-400 rounded-full text-sm border border-indigo-200 dark:border-indigo-800">
              Social Media Marketing
            </span>
            <span className="px-3 py-1 bg-indigo-50 dark:bg-indigo-900/20 text-indigo-600 dark:text-indigo-400 rounded-full text-sm border border-indigo-200 dark:border-indigo-800">
              Copy Editing
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

// Analytics Tab Component
const AnalyticsTab = () => {
  return (
    <div className="space-y-6">
      {/* Stats Cards */}
      <div className="grid grid-cols-3 gap-6">
        <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-sm font-semibold text-gray-700 dark:text-gray-300">Total Views</h3>
            <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900/20 rounded-full flex items-center justify-center">
              <Eye className="w-5 h-5 text-blue-600 dark:text-blue-400" />
            </div>
          </div>
          <div className="flex items-end gap-2 mb-2">
            <p className="text-4xl font-bold text-gray-900 dark:text-white">23,564</p>
            <div className="flex items-center gap-1 text-green-600 dark:text-green-400 mb-2">
              <TrendingUp className="w-4 h-4" />
              <span className="text-sm font-medium">0.4%</span>
            </div>
          </div>
          <p className="text-sm text-gray-600 dark:text-gray-400">vs last day</p>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-sm font-semibold text-gray-700 dark:text-gray-300">Total Applied</h3>
            <div className="w-10 h-10 bg-indigo-100 dark:bg-indigo-900/20 rounded-full flex items-center justify-center">
              <div className="w-5 h-5 bg-indigo-600 dark:bg-indigo-400 rounded"></div>
            </div>
          </div>
          <div className="flex items-end gap-2 mb-2">
            <p className="text-4xl font-bold text-gray-900 dark:text-white">132</p>
            <div className="flex items-center gap-1 text-red-600 dark:text-red-400 mb-2">
              <TrendingDown className="w-4 h-4" />
              <span className="text-sm font-medium">0.6%</span>
            </div>
          </div>
          <p className="text-sm text-gray-600 dark:text-gray-400">vs last day</p>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-6">
          <h3 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-4">Traffic channel</h3>
          <div className="flex items-center justify-center mb-4">
            <div className="relative w-32 h-32">
              <svg className="w-full h-full" viewBox="0 0 100 100">
                <circle cx="50" cy="50" r="40" fill="none" stroke="#FCD34D" strokeWidth="20" strokeDasharray="75.4 251.2" transform="rotate(-90 50 50)" />
                <circle cx="50" cy="50" r="40" fill="none" stroke="#818CF8" strokeWidth="20" strokeDasharray="37.7 251.2" strokeDashoffset="-75.4" transform="rotate(-90 50 50)" />
                <circle cx="50" cy="50" r="40" fill="none" stroke="#60A5FA" strokeWidth="20" strokeDasharray="50.2 251.2" strokeDashoffset="-113.1" transform="rotate(-90 50 50)" />
                <circle cx="50" cy="50" r="40" fill="none" stroke="#34D399" strokeWidth="20" strokeDasharray="12.6 251.2" strokeDashoffset="-163.3" transform="rotate(-90 50 50)" />
              </svg>
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-2xl font-bold text-gray-900 dark:text-white">243</span>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-2 text-xs">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
              <span className="text-gray-600 dark:text-gray-400">Direct: 48%</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
              <span className="text-gray-600 dark:text-gray-400">Social: 23%</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-indigo-400 rounded-full"></div>
              <span className="text-gray-600 dark:text-gray-400">Organic: 24%</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-400 rounded-full"></div>
              <span className="text-gray-600 dark:text-gray-400">Other: 5%</span>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-6">
        {/* Job Listing View Stats */}
        <div className="col-span-2 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-6">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-bold text-gray-900 dark:text-white">Job Listing View stats</h3>
            <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
              <span>Last 7 days</span>
              <ChevronDown className="w-4 h-4" />
            </button>
          </div>
          <div className="h-64 flex items-end justify-between gap-4">
            {[
              { day: '19 Jul', value: 400 },
              { day: '20 Jul', value: 500 },
              { day: '21 Jul', value: 300 },
              { day: '22 Jul', value: 700 },
              { day: '23 Jul', value: 500 },
              { day: '24 Jul', value: 400 },
              { day: '25 Jul', value: 500 },
            ].map((item, index) => (
              <div key={index} className="flex-1 flex flex-col items-center">
                <div className="w-full relative group">
                  <div
                    className="w-full bg-gradient-to-t from-green-400 to-green-300 rounded-t-lg transition-all hover:opacity-80"
                    style={{ height: `${(item.value / 1000) * 100}%`, minHeight: '40px' }}
                  >
                    {index === 4 && (
                      <div className="absolute -top-12 left-1/2 -translate-x-1/2 bg-gray-900 dark:bg-gray-700 text-white text-xs px-2 py-1 rounded whitespace-nowrap">
                        Views<br />243
                      </div>
                    )}
                  </div>
                </div>
                <span className="text-xs text-gray-600 dark:text-gray-400 mt-2">{item.day}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Visitors by country */}
        <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-6">
          <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-6">Visitors by country</h3>
          <div className="space-y-4">
            {[
              { country: 'USA', flag: '🇺🇸', visitors: 3240 },
              { country: 'France', flag: '🇫🇷', visitors: 2188 },
              { country: 'Italy', flag: '🇮🇹', visitors: 2938 },
              { country: 'Germany', flag: '🇩🇪', visitors: 2624 },
              { country: 'Japan', flag: '🇯🇵', visitors: 2416 },
              { country: 'Netherlands', flag: '🇳🇱', visitors: 1938 },
            ].map((item, index) => (
              <div key={index} className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span className="text-2xl">{item.flag}</span>
                  <span className="text-sm text-gray-900 dark:text-white font-medium">{item.country}</span>
                </div>
                <span className="text-sm text-gray-600 dark:text-gray-400">{item.visitors.toLocaleString()}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobListingInfo;
