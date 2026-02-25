'use client';

import { MapPin } from 'lucide-react';

const OfficeLocation = () => {
  const locations = [
    { country: 'United States', flag: '🇺🇸' },
    { country: 'England', flag: '🇬🇧' },
    { country: 'Japan', flag: '🇯🇵' },
    { country: 'Australia', flag: '🇦🇺' },
    { country: 'China', flag: '🇨🇳' },
  ];

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700">
      <h3 className="font-semibold text-gray-900 dark:text-white mb-4">Office Location</h3>
      <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
        Stripe offices around the world
      </p>
      <div className="space-y-3">
        {locations.map((location) => (
          <div key={location.country} className="flex items-center gap-3">
            <span className="text-2xl">{location.flag}</span>
            <span className="text-sm text-gray-700 dark:text-gray-300">{location.country}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OfficeLocation;
