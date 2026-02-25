'use client';

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

const Team = () => {
  const team = [
    { name: 'Celestine Slater', role: 'CEO & Co-Founder', avatar: '👨' },
    { name: 'Reynaldo Glover', role: 'CTO', avatar: '👨‍💼' },
    { name: 'Anika Rhiel Madsen', role: 'Managing Director', avatar: '👩' },
    { name: 'Samuel Stanton', role: 'Managing Director', avatar: '👨‍💻' },
    { name: 'Desirae Saris', role: 'Managing Director', avatar: '👩‍💼' },
  ];

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg p-8 border border-gray-200 dark:border-gray-700">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-bold text-gray-900 dark:text-white">Team</h2>
        <Link
          href="#"
          className="flex items-center gap-2 text-indigo-600 dark:text-indigo-400 hover:underline text-sm font-medium"
        >
          See all (45)
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
        {team.map((member) => (
          <div key={member.name} className="text-center">
            <div className="w-16 h-16 bg-gray-200 dark:bg-gray-700 rounded-full flex items-center justify-center text-3xl mx-auto mb-2">
              {member.avatar}
            </div>
            <h4 className="font-medium text-sm text-gray-900 dark:text-white mb-1">
              {member.name}
            </h4>
            <p className="text-xs text-gray-600 dark:text-gray-400">{member.role}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Team;
