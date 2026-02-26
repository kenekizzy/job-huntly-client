'use client';

import { useState } from 'react';
import { Edit2, Plus, MapPin, Mail, Phone, Globe, Instagram, Twitter } from 'lucide-react';
import Image from 'next/image';
import DashboardHeader from '@/components/dashboard/DashboardHeader';
import { useAuth } from '@/contexts/AuthContext';

const MyProfile = () => {
  const { user } = useAuth();
  console.log("User Value: ", user);
  const [profile] = useState({
    name: 'Jake Gyll',
    title: 'Product Designer',
    company: 'Twitter',
    location: 'Manchester, UK',
    email: 'jakegyll@email.com',
    phone: '+44 1245 572 135',
    languages: 'English, French',
    status: 'OPEN FOR OPPORTUNITIES',
    avatar: '/avatar-placeholder.jpg',
  });

  const [aboutMe] = useState(
    "I'm a product designer + filmmaker currently working remotely at Twitter from beautiful Manchester, United Kingdom. I'm passionate about designing digital products that have a positive impact on the world.\n\nFor 10 years, I've specialised in interface, experience & interaction design as well as working in user research and product strategy for product agencies, big tech companies & start-ups."
  );

  const [experiences] = useState([
    {
      id: 1,
      company: 'Twitter',
      role: 'Product Designer',
      type: 'Full-Time',
      duration: 'Jun 2019 - Present (1y 1m)',
      location: 'Manchester, UK',
      logo: '🐦',
      logoColor: 'bg-blue-400',
      description:
        'Created and executed social media plan for 10 brands utilizing multiple features and content types to increase brand outreach, engagement, and leads.',
    },
    {
      id: 2,
      company: 'GoDaddy',
      role: 'Growth Marketing Designer',
      type: 'Full-Time',
      duration: 'Jun 2011 - May 2019 (8y)',
      location: 'Manchester, UK',
      logo: 'G',
      logoColor: 'bg-black',
      description:
        'Developed digital marketing strategies, activation plans, proposals, contents and promotions for client industries.',
    },
  ]);

  const [educations] = useState([
    {
      id: 1,
      school: 'Harvard University',
      degree: 'Postgraduate degree, Applied Psychology',
      duration: '2010 - 2012',
      logo: '🎓',
      logoColor: 'bg-red-700',
      description:
        'As an Applied Psychologist in the field of Consumer and Society, I am specialized in creating behavioral interventions by observing, analyzing, researching and changing economic behavior.',
    },
    {
      id: 2,
      school: 'University of Toronto',
      degree: 'Bachelor of Arts, Visual Communication',
      duration: '2005 - 2009',
      logo: '🏛️',
      logoColor: 'bg-blue-900',
      description: '',
    },
  ]);

  const [skills] = useState([
    'Communication',
    'Analytics',
    'Facebook Ads',
    'Content Planning',
    'Community Manager',
  ]);

  const [portfolios] = useState([
    { id: 1, title: 'Orielly - eLearning & Marketplace website', image: '/portfolio1.jpg' },
    { id: 2, title: 'Gumhub - Real Estate & Sales Website', image: '/portfolio2.jpg' },
    { id: 3, title: 'Salero - Project Management App', image: '/portfolio3.jpg' },
  ]);

  const [socialLinks] = useState({
    instagram: 'instagram.com/jakegyll',
    twitter: 'twitter.com/jakegyll',
    website: 'www.jakegyll.com',
  });

  return (
    <div className='m-4'>
      <DashboardHeader title="My Profile"/>

      <div className="flex gap-6 m-4">
      {/* Main Content */}
      <div className="flex-1 space-y-6">
        {/* Profile Header Card */}
        <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 overflow-hidden">
          {/* Banner */}
          <div className="h-32 bg-gradient-to-r from-pink-300 via-purple-300 to-purple-500 relative">
            <button className="absolute top-4 right-4 p-2 bg-white/90 dark:bg-gray-800/90 rounded-lg hover:bg-white dark:hover:bg-gray-800 transition-colors">
              <Edit2 className="w-4 h-4 text-gray-700 dark:text-gray-300" />
            </button>
          </div>

          {/* Profile Info */}
          <div className="px-6 pb-6">
            <div className="flex items-end justify-between -mt-16 mb-4">
              <div className="w-32 h-32 rounded-full border-4 border-white dark:border-gray-800 bg-gray-200 dark:bg-gray-700 z-30 overflow-hidden">
                <div className="w-full h-full flex items-center justify-center text-4xl">👤</div>
              </div>
              <button className="px-4 py-2 border border-indigo-600 text-indigo-600 dark:text-indigo-400 rounded-lg hover:bg-indigo-50 dark:hover:bg-indigo-900/20 transition-colors text-sm font-medium">
                Edit Profile
              </button>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-1">{user?.firstName + " " + user?.lastName}</h2>
              <p className="text-gray-600 dark:text-gray-400 mb-2">
                {profile.title} at <span className="font-semibold">{profile.company}</span>
              </p>
              <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400 mb-3">
                <MapPin className="w-4 h-4" />
                <span>{user?.location}</span>
              </div>
              <span className="inline-block px-3 py-1 bg-green-50 dark:bg-green-900/20 text-green-600 dark:text-green-400 text-xs font-medium rounded border border-green-200 dark:border-green-800">
                {profile.status}
              </span>
            </div>
          </div>
        </div>

        {/* About Me */}
        <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">About Me</h3>
            <button className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors">
              <Edit2 className="w-4 h-4 text-gray-600 dark:text-gray-400" />
            </button>
          </div>
          <p className="text-sm text-gray-600 dark:text-gray-400 whitespace-pre-line leading-relaxed">
            {user?.bio}
          </p>
        </div>

        {/* Experiences */}
        <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-6">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Experiences</h3>
            <button className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors">
              <Plus className="w-5 h-5 text-gray-600 dark:text-gray-400" />
            </button>
          </div>

          <div className="space-y-6">
            {experiences.map((exp) => (
              <div key={exp.id} className="flex gap-4">
                <div
                  className={`w-12 h-12 ${exp.logoColor} rounded-lg flex items-center justify-center text-white text-xl shrink-0`}
                >
                  {exp.logo}
                </div>
                <div className="flex-1">
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white">{exp.role}</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        {exp.company} · {exp.type} · {exp.duration}
                      </p>
                      <p className="text-sm text-gray-500 dark:text-gray-500">{exp.location}</p>
                    </div>
                    <button className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors">
                      <Edit2 className="w-4 h-4 text-gray-600 dark:text-gray-400" />
                    </button>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{exp.description}</p>
                </div>
              </div>
            ))}
          </div>

          <button className="mt-6 text-indigo-600 dark:text-indigo-400 text-sm font-medium hover:text-indigo-700 dark:hover:text-indigo-300">
            Show 3 more experiences
          </button>
        </div>

        {/* Educations */}
        <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-6">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Educations</h3>
            <button className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors">
              <Plus className="w-5 h-5 text-gray-600 dark:text-gray-400" />
            </button>
          </div>

          <div className="space-y-6">
            {educations.map((edu) => (
              <div key={edu.id} className="flex gap-4">
                <div
                  className={`w-12 h-12 ${edu.logoColor} rounded-lg flex items-center justify-center text-white text-xl shrink-0`}
                >
                  {edu.logo}
                </div>
                <div className="flex-1">
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white">{edu.school}</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400">{edu.degree}</p>
                      <p className="text-sm text-gray-500 dark:text-gray-500">{edu.duration}</p>
                    </div>
                    <button className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors">
                      <Edit2 className="w-4 h-4 text-gray-600 dark:text-gray-400" />
                    </button>
                  </div>
                  {edu.description && (
                    <p className="text-sm text-gray-600 dark:text-gray-400">{edu.description}</p>
                  )}
                </div>
              </div>
            ))}
          </div>

          <button className="mt-6 text-indigo-600 dark:text-indigo-400 text-sm font-medium hover:text-indigo-700 dark:hover:text-indigo-300">
            Show 2 more educations
          </button>
        </div>

        {/* Skills */}
        <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Skills</h3>
            <div className="flex gap-2">
              <button className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors">
                <Plus className="w-5 h-5 text-gray-600 dark:text-gray-400" />
              </button>
              <button className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors">
                <Edit2 className="w-4 h-4 text-gray-600 dark:text-gray-400" />
              </button>
            </div>
          </div>
          <div className="flex flex-wrap gap-2">
            {user?.skills?.map((skill, index) => (
              <span
                key={index}
                className="px-4 py-2 bg-indigo-50 dark:bg-indigo-900/20 text-indigo-600 dark:text-indigo-400 rounded-lg text-sm font-medium border border-indigo-200 dark:border-indigo-800"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Portfolios */}
        <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Portfolios</h3>
            <button className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors">
              <Plus className="w-5 h-5 text-gray-600 dark:text-gray-400" />
            </button>
          </div>
          <div className="grid grid-cols-3 gap-4">
            {portfolios.map((portfolio) => (
              <div key={portfolio.id} className="group cursor-pointer">
                <div className="aspect-video bg-gray-200 dark:bg-gray-700 rounded-lg mb-2 overflow-hidden">
                  <div className="w-full h-full flex items-center justify-center text-gray-400 dark:text-gray-500">
                    📷
                  </div>
                </div>
                <p className="text-sm text-gray-700 dark:text-gray-300 group-hover:text-indigo-600 dark:group-hover:text-indigo-400">
                  {portfolio.title}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Right Sidebar */}
      <div className="w-80 space-y-6">
        {/* Additional Details */}
        <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Additional Details</h3>
            <button className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors">
              <Edit2 className="w-4 h-4 text-gray-600 dark:text-gray-400" />
            </button>
          </div>

          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <Mail className="w-5 h-5 text-gray-400 mt-0.5" />
              <div>
                <p className="text-xs text-gray-500 dark:text-gray-400 mb-1">Email</p>
                <p className="text-sm text-gray-900 dark:text-white">{user?.email}</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <Phone className="w-5 h-5 text-gray-400 mt-0.5" />
              <div>
                <p className="text-xs text-gray-500 dark:text-gray-400 mb-1">Phone</p>
                <p className="text-sm text-gray-900 dark:text-white">{user?.phone}</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <Globe className="w-5 h-5 text-gray-400 mt-0.5" />
              <div>
                <p className="text-xs text-gray-500 dark:text-gray-400 mb-1">Languages</p>
                <p className="text-sm text-gray-900 dark:text-white">{profile.languages}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Social Links */}
        <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Social Links</h3>
            <button className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors">
              <Edit2 className="w-4 h-4 text-gray-600 dark:text-gray-400" />
            </button>
          </div>

          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <Instagram className="w-5 h-5 text-gray-400" />
              <a
                href={`https://${socialLinks.instagram}`}
                className="text-sm text-indigo-600 dark:text-indigo-400 hover:underline"
              >
                {socialLinks.instagram}
              </a>
            </div>

            <div className="flex items-center gap-3">
              <Twitter className="w-5 h-5 text-gray-400" />
              <a
                href={`https://${socialLinks.twitter}`}
                className="text-sm text-indigo-600 dark:text-indigo-400 hover:underline"
              >
                {socialLinks.twitter}
              </a>
            </div>

            <div className="flex items-center gap-3">
              <Globe className="w-5 h-5 text-gray-400" />
              <a
                href={`https://${socialLinks.website}`}
                className="text-sm text-indigo-600 dark:text-indigo-400 hover:underline"
              >
                {socialLinks.website}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default MyProfile;
