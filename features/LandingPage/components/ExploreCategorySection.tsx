'use client';

import Link from 'next/link';
import { ArrowRight, Wrench, TrendingUp, Megaphone, Wallet, Monitor, Code, Briefcase, Users } from 'lucide-react';

interface Category {
  id: number;
  name: string;
  jobCount: number;
  icon: React.ReactNode;
  featured?: boolean;
}

const ExploreCategorySection = () => {
  const categories: Category[] = [
    {
      id: 1,
      name: 'Design',
      jobCount: 235,
      icon: <Wrench className="w-8 h-8" />,
    },
    {
      id: 2,
      name: 'Sales',
      jobCount: 756,
      icon: <TrendingUp className="w-8 h-8" />,
    },
    {
      id: 3,
      name: 'Marketing',
      jobCount: 140,
      icon: <Megaphone className="w-8 h-8" />,
      featured: true,
    },
    {
      id: 4,
      name: 'Finance',
      jobCount: 325,
      icon: <Wallet className="w-8 h-8" />,
    },
    {
      id: 5,
      name: 'Technology',
      jobCount: 436,
      icon: <Monitor className="w-8 h-8" />,
    },
    {
      id: 6,
      name: 'Engineering',
      jobCount: 542,
      icon: <Code className="w-8 h-8" />,
    },
    {
      id: 7,
      name: 'Business',
      jobCount: 211,
      icon: <Briefcase className="w-8 h-8" />,
    },
    {
      id: 8,
      name: 'Human Resource',
      jobCount: 346,
      icon: <Users className="w-8 h-8" />,
    },
  ];

  return (
    <section className="py-16 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-gray-100">
            Explore by <span className="text-blue-500">category</span>
          </h2>
          <Link
            href="/categories"
            className="flex items-center gap-2 text-indigo-600 hover:text-indigo-700 font-medium"
          >
            Show all jobs
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category) => (
            <Link
              key={category.id}
              href={`/jobs?category=${category.name.toLowerCase()}`}
              className={`border rounded-lg p-6 hover:shadow-lg transition-all border-gray-200 bg-white hover:bg-indigo-600 hover:border-indigo-600 hover:text-white group`}
            >
              {/* Icon */}
              <div
                className={`mb-4 text-indigo-600 group-hover:scale-110 transition-transform`}
              >
                {category.icon}
              </div>

              {/* Category Name */}
              <h3
                className={`text-xl font-semibold mb-2 text-gray-900 `}
              >
                {category.name}
              </h3>

              {/* Job Count */}
              <div className="flex items-center gap-2">
                <p
                  className={`text-sm text-gray-600`}
                >
                  {category.jobCount} jobs available
                </p>
                <ArrowRight
                  className={`w-4 h-4 text-gray-400 group-hover:translate-x-1 transition-transform`}
                />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExploreCategorySection;
