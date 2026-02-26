'use client';

import DashboardHeader from '@/components/dashboard/DashboardHeader';
import { Edit, MapPin, Mail, Phone, Globe, Linkedin, Twitter } from 'lucide-react';
import Link from 'next/link';

const Profile = () => {
  const experiences = [
    {
      company: 'Twitter',
      logo: '🐦',
      logoColor: 'bg-blue-400',
      role: 'Product Designer',
      type: 'Full-Time',
      period: 'Jun 2019 - Present (1y 1m)',
      location: 'Manchester, UK',
      description:
        'Created and executed social media plan for 10 brands utilizing multiple features and content types to increase brand outreach, engagement, and leads.',
    },
    {
      company: 'GoJaddy',
      logo: 'G',
      logoColor: 'bg-gray-800',
      role: 'Growth Marketing Designer',
      type: 'Full-Time',
      period: 'Jun 2011 - May 2019 (8y)',
      location: 'Manchester, UK',
      description:
        'Developed digital marketing strategies, activation plans, proposals, contests and promotions for client projects.',
    },
  ];

  const education = [
    {
      school: 'Harvard University',
      logo: '🎓',
      logoColor: 'bg-red-700',
      degree: 'Bachelor Degree, Applied Psychology',
      period: '2010 - 2012',
      description:
        'As an Applied Psychologist in the field of Consumer and Society, I am specialized in creating business opportunities, designing digital products and improving the customer experience.',
    },
  ];

  const skills = [
    'Communication',
    'Analytics',
    'Facebook Ads',
    'Content Planning',
    'Community Manager',
  ];

  const portfolios = [
    { title: 'Dribble - Limo App & Sales Website', image: '🖼️' },
    { title: 'Dribble - Limo App & Sales Website', image: '🖼️' },
    { title: 'Behance - Fleet Management App', image: '🖼️' },
    { title: 'Behance - Project Management App', image: '🖼️' },
  ];

  return (
    <></>
    // <div className="p-8">
    //   <DashboardHeader title="My Profile" showCalendar={false} />

    //   <div className="max-w-5xl">
    //     {/* Profile Header */}
    //     <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 overflow-hidden mb-6">
    //       <div className="h-32 bg-gradient-to-r from-purple-400 via-pink-400 to-purple-600 relative">
    //         <button className="absolute top-4 right-4 p-2 bg-white dark:bg-gray-800 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700">
    //           <Edit className="w-4 h-4 text-gray-600 dark:text-gray-300" />
    //         </button>
    //       </div>
    //       <div className="px-8 pb-8">
    //         <div className="flex items-end gap-6 -mt-16 mb-6">
    //           <div className="w-32 h-32 bg-gray-300 dark:bg-gray-600 rounded-full border-4 border-white dark:border-gray-800 flex items-center justify-center">
    //             <span className="text-5xl">👨</span>
    //           </div>
    //           <div className="flex-1 pt-20">
    //             <div className="flex items-start justify-between">
    //               <div>
    //                 <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-1">
    //                   Jake Gyll
    //                 </h2>
    //                 <p className="text-gray-600 dark:text-gray-400 mb-2">
    //                   Product Designer at Twitter
    //                 </p>
    //                 <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
    //                   <MapPin className="w-4 h-4" />
    //                   <span>Manchester, UK</span>
    //                 </div>
    //               </div>
    //               <Link
    //                 href="/dashboard/settings"
    //                 className="px-4 py-2 border border-indigo-600 text-indigo-600 dark:text-indigo-400 rounded-lg hover:bg-indigo-50 dark:hover:bg-indigo-900/20 transition-colors"
    //               >
    //                 Edit Profile
    //               </Link>
    //             </div>
    //           </div>
    //         </div>
    //         <button className="px-4 py-2 bg-green-500 text-white rounded-lg font-medium hover:bg-green-600 transition-colors">
    //           OPEN FOR OPPORTUNITIES
    //         </button>
    //       </div>
    //     </div>

    //     {/* About Me */}
    //     <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-6 mb-6">
    //       <div className="flex items-center justify-between mb-4">
    //         <h3 className="text-lg font-bold text-gray-900 dark:text-white">About Me</h3>
    //         <button className="p-2 hover:bg-gray-50 dark:hover:bg-gray-700 rounded-lg">
    //           <Edit className="w-4 h-4 text-gray-600 dark:text-gray-300" />
    //         </button>
    //       </div>
    //       <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
    //         I'm a product designer + filmmaker currently working remotely at Twitter from beautiful
    //         Manchester, United Kingdom. I'm passionate about designing digital products that have a
    //         positive impact on the world.
    //       </p>
    //       <p className="text-gray-600 dark:text-gray-400 leading-relaxed mt-4">
    //         For 10 years, I've specialised in interface, experience & interaction design as well as
    //         working in user research and product strategy for product agencies, big tech companies
    //         and startups.
    //       </p>
    //     </div>

    //     {/* Additional Details */}
    //     <div className="grid grid-cols-2 gap-6 mb-6">
    //       <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-6">
    //         <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">
    //           Additional Details
    //         </h3>
    //         <div className="space-y-3">
    //           <div className="flex items-center gap-3 text-gray-600 dark:text-gray-400">
    //             <Mail className="w-5 h-5" />
    //             <span>jakegyll@email.com</span>
    //           </div>
    //           <div className="flex items-center gap-3 text-gray-600 dark:text-gray-400">
    //             <Phone className="w-5 h-5" />
    //             <span>+44 1245 572 135</span>
    //           </div>
    //           <div className="flex items-center gap
  )
}

  export default Profile