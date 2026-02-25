'use client';

import Link from 'next/link';
import Image from 'next/image';

const CompanyInfo = () => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg p-8 border border-gray-200 dark:border-gray-700">
      <div className="flex items-start gap-4 mb-6">
        <div className="w-16 h-16 bg-indigo-600 rounded-lg flex items-center justify-center text-white text-2xl font-bold shrink-0">
          S
        </div>
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-2">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white">Stripe</h3>
            <Link
              href="/companies/stripe"
              className="text-sm text-indigo-600 dark:text-indigo-400 hover:underline"
            >
              Read more about Stripe →
            </Link>
          </div>
          <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
            Stripe is a technology company that builds economic infrastructure for the internet.
            Businesses of every size—from new startups to public companies—use our software to
            accept payments and manage their businesses online.
          </p>
        </div>
      </div>

      {/* Office Images */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {[1, 2, 3, 4].map((i) => (
          <div key={i} className="aspect-square bg-gray-200 dark:bg-gray-700 rounded-lg relative overflow-hidden">
            <div className="absolute inset-0 flex items-center justify-center text-gray-400">
              Office {i}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CompanyInfo;
