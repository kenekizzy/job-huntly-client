'use client';

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { FeaturedJob } from '../types';

const FeaturedJobsSection = () => {
  const jobs: FeaturedJob[] = [
    {
      id: 1,
      title: 'Email Marketing Specialist',
      company: 'Paystack',
      location: 'Lagos, Nigeria',
      logo: 'P',
      logoColor: 'bg-emerald-600',
      type: 'Full Time',
      description: 'Paystack is looking for an Email Marketing Specialist to drive user engagement...',
      tags: ['Marketing', 'Design'],
      tagColors: {
        Marketing: 'text-orange-600 bg-orange-50',
        Design: 'text-green-600 bg-green-50',
      },
    },
    {
      id: 2,
      title: 'Product Designer',
      company: 'Flutterwave',
      location: 'Lagos, Nigeria',
      logo: '⚡',
      logoColor: 'bg-orange-100',
      type: 'Full Time',
      description: 'Flutterwave is hiring a Product Designer to build intuitive fintech experiences...',
      tags: ['Design', 'Business'],
      tagColors: {
        Design: 'text-green-600 bg-green-50',
        Business: 'text-indigo-600 bg-indigo-50',
      },
    },
    {
      id: 3,
      title: 'Brand Manager',
      company: 'Kuda',
      location: 'Remote, Nigeria',
      logo: 'K',
      logoColor: 'bg-purple-600',
      type: 'Full Time',
      description: 'Kuda is looking for a Brand Manager to own brand voice across digital channels...',
      tags: ['Marketing'],
      tagColors: {
        Marketing: 'text-orange-600 bg-orange-50',
      },
    },
    {
      id: 4,
      title: 'Visual Designer',
      company: 'Interswitch',
      location: 'Lagos, Nigeria',
      logo: 'I',
      logoColor: 'bg-green-100',
      type: 'Full Time',
      description: 'Interswitch is seeking a Visual Designer to support fintech product branding...',
      tags: ['Design'],
      tagColors: {
        Design: 'text-green-600 bg-green-50',
      },
    },
    {
      id: 5,
      title: 'Product Marketing Manager',
      company: 'Opay',
      location: 'Ikeja, Lagos',
      logo: 'O',
      logoColor: 'bg-teal-600',
      type: 'Full Time',
      description: 'Opay is hiring a Product Marketing Manager to lead market expansion strategies...',
      tags: ['Marketing', 'Business'],
      tagColors: {
        Marketing: 'text-orange-600 bg-orange-50',
        Business: 'text-indigo-600 bg-indigo-50',
      },
    },
    {
      id: 6,
      title: 'Lead UX Designer',
      company: 'Andela',
      location: 'Remote, Nigeria',
      logo: 'A',
      logoColor: 'bg-blue-900',
      type: 'Full Time',
      description: 'Andela is looking for a Lead UX Designer to guide design systems across teams...',
      tags: ['Design', 'Business'],
      tagColors: {
        Design: 'text-green-600 bg-green-50',
        Business: 'text-indigo-600 bg-indigo-50',
      },
    },
    {
      id: 7,
      title: 'Growth Marketer',
      company: 'Carbon',
      location: 'Yaba, Lagos',
      logo: 'C',
      logoColor: 'bg-gray-900',
      type: 'Full Time',
      description: 'Carbon is hiring a Growth Marketer to scale user acquisition and retention...',
      tags: ['Marketing'],
      tagColors: {
        Marketing: 'text-orange-600 bg-orange-50',
      },
    },
    {
      id: 8,
      title: 'Data Analyst',
      company: 'Moniepoint',
      location: 'Abuja, Nigeria',
      logo: '📊',
      logoColor: 'bg-blue-400',
      type: 'Full Time',
      description: 'Moniepoint is looking for a Data Analyst to support business decision-making...',
      tags: ['Technology'],
      tagColors: {
        Technology: 'text-red-600 bg-red-50',
      },
    },
  ];
  

  return (
    <section className="py-16 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-4xl font-bold text-gray-900">
            Featured <span className="text-blue-500">jobs</span>
          </h2>
          <Link
            href="/jobs"
            className="flex items-center gap-2 text-indigo-600 hover:text-indigo-700 font-medium"
          >
            Show all jobs
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>

        {/* Jobs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {jobs.map((job) => (
            <div
              key={job.id}
              className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow cursor-pointer"
            >
              {/* Header */}
              <div className="flex items-start justify-between mb-4">
                <div
                  className={`w-12 h-12 ${job.logoColor} rounded-lg flex items-center justify-center text-white text-xl font-bold`}
                >
                  {job.logo}
                </div>
                <span className="text-xs text-gray-600 border border-gray-300 px-3 py-1 rounded">
                  {job.type}
                </span>
              </div>

              {/* Job Info */}
              <h3 className="text-lg font-semibold text-gray-900 mb-1">{job.title}</h3>
              <p className="text-sm text-gray-600 mb-3">
                {job.company} • {job.location}
              </p>
              <p className="text-sm text-gray-500 mb-4 line-clamp-2">{job.description}</p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {job.tags.map((tag) => (
                  <span key={tag} className={`text-xs px-3 py-1 rounded ${job.tagColors[tag]}`}>
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedJobsSection;
