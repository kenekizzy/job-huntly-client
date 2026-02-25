'use client';

import { Globe, Facebook } from 'lucide-react';

const Contact = () => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg p-8 border border-gray-200 dark:border-gray-700">
      <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Contact</h2>
      <div className="flex flex-wrap gap-3">
        <a
          href="https://stripe.com"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-4 py-2 border border-indigo-600 text-indigo-600 dark:text-indigo-400 rounded-lg hover:bg-indigo-50 dark:hover:bg-indigo-900/20 transition-colors"
        >
          <Globe className="w-4 h-4" />
          <span className="text-sm font-medium">stripe.com/jobs</span>
        </a>
        <a
          href="https://facebook.com/stripe"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-4 py-2 border border-indigo-600 text-indigo-600 dark:text-indigo-400 rounded-lg hover:bg-indigo-50 dark:hover:bg-indigo-900/20 transition-colors"
        >
          <Facebook className="w-4 h-4" />
          <span className="text-sm font-medium">facebook.com/Stripe</span>
        </a>
      </div>
    </div>
  );
};

export default Contact;
