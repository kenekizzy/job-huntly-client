'use client';

import { MapPin, Users, Building, Globe } from 'lucide-react';

const CompanyHeader = () => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg p-8 border border-gray-200 dark:border-gray-700">
      <div className="flex items-start gap-6">
        <div className="w-20 h-20 bg-indigo-600 rounded-lg flex items-center justify-center text-white text-3xl font-bold shrink-0">
          S
        </div>
        <div className="flex-1">
          <div className="flex items-center gap-3 mb-2">
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Stripe</h1>
            <span className="px-3 py-1 bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 text-sm rounded border border-blue-200 dark:border-blue-800">
              Featured
            </span>
          </div>
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            stripe.com/jobs/search
          </p>
          <div className="flex flex-wrap gap-6 text-sm text-gray-600 dark:text-gray-400">
            <div className="flex items-center gap-2">
              <Building className="w-4 h-4" />
              <span>Business Service</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              <span>Mumbai, India</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="w-4 h-4" />
              <span>5000+ Employees</span>
            </div>
            <div className="flex items-center gap-2">
              <Globe className="w-4 h-4" />
              <span>Payment Gateway</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompanyHeader;
