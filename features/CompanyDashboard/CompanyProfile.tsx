'use client';

import { useState } from 'react';
import { Globe, Facebook, Linkedin, Twitter, Plus, Edit } from 'lucide-react';

const CompanyProfile = () => {
  const [activeTab, setActiveTab] = useState('Company Profile');

  const tabs = ['Company Profile', 'Founders', 'Jobs'];

  const techStack = [
    { name: 'HTML 5', icon: '🟧', color: 'bg-orange-500' },
    { name: 'CSS 3', icon: '🔷', color: 'bg-blue-500' },
    { name: 'JavaScript', icon: '🟨', color: 'bg-yellow-400' },
    { name: 'Ruby', icon: '🔴', color: 'bg-red-500' },
    { name: 'Figma', icon: '🎨', color: 'bg-purple-500' },
    { name: 'Framer', icon: '⚫', color: 'bg-gray-900' },
  ];

  const officeLocations = [
    { country: 'United States', city: 'New Hemisphere', flag: '🇺🇸' },
    { country: 'England', city: 'London, UK', flag: '🇬🇧' },
    { country: 'Japan', city: 'Tokyo, JP', flag: '🇯🇵' },
    { country: 'Australia', city: 'Perth, AU', flag: '🇦🇺' },
    { country: 'China', city: '', flag: '🇨🇳' },
  ];



  const teamMembers = [
    {
      name: 'Célestin Gardinier',
      role: 'CEO & Founder',
      avatar: '👨‍💼',
      social: { linkedin: '#', twitter: '#', facebook: '#' },
    },
    {
      name: 'Reynaud Colbert',
      role: 'Co-Founder',
      avatar: '👨‍💻',
      social: { linkedin: '#', twitter: '#', facebook: '#' },
    },
    {
      name: 'Arienne Lyon',
      role: 'Managing Director',
      avatar: '👩‍💼',
      social: { linkedin: '#', twitter: '#', facebook: '#' },
    },
  ];

  const benefits = [
    {
      icon: '🏥',
      title: 'Full Healthcare',
      description: 'We believe in thriving communities and that starts with our team being happy and healthy.',
    },
    {
      icon: '🏖️',
      title: 'Unlimited Vacation',
      description: 'We believe you should have a flexible schedule that makes space for family, wellness, and fun.',
    },
    {
      icon: '💼',
      title: 'Skill Development',
      description: 'We believe in always learning and leveling up our skills. Whether it&apos;s a conference or online course.',
    },
    {
      icon: '🏠',
      title: 'Team Summits',
      description: 'Every 6 months we have a full team summit where we have fun, reflect, and plan for the upcoming quarter.',
    },
    {
      icon: '⏰',
      title: 'Remote Working',
      description: 'You know how you perform your best. Work from home, coffee shop or anywhere when you feel like it.',
    },
    {
      icon: '💰',
      title: 'Commuter Benefits',
      description: 'We&apos;re grateful for all the time and energy each team member puts into getting to work every day.',
    },
  ];

  const openPositions = [
    {
      id: 1,
      title: 'Social Media Assistant',
      location: 'Nomad • Paris, France',
      logo: '🏔️',
      logoColor: 'bg-green-500',
      tags: ['Full-Time', 'Marketing', 'Design'],
    },
    {
      id: 2,
      title: 'Brand Designer',
      location: 'Nomad • Paris, France',
      logo: '🏔️',
      logoColor: 'bg-green-500',
      tags: ['Full-Time', 'Marketing', 'Design'],
    },
    {
      id: 3,
      title: 'Interactive Developer',
      location: 'Terraform • Hamburg, Germany',
      logo: '🔷',
      logoColor: 'bg-cyan-500',
      tags: ['Full-Time', 'Marketing', 'Design'],
    },
    {
      id: 4,
      title: 'HR Manager',
      location: 'Packer • Lucern, Switzerland',
      logo: '📦',
      logoColor: 'bg-orange-500',
      tags: ['Full-Time', 'Business', 'Design'],
    },
  ];

  return (
    <div className="max-w-7xl mx-auto">
      {/* Header */}
      <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 mb-6">
        <div className="p-6 border-b border-gray-200 dark:border-gray-700">
          <div className="flex items-start justify-between">
            <div className="flex gap-6">
              <div className="w-24 h-24 bg-green-500 rounded-lg flex items-center justify-center text-5xl">
                🏔️
              </div>
              <div>
                <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">Nomad</h1>
                <a href="https://nomad.com" className="text-indigo-600 dark:text-indigo-400 hover:underline mb-4 block">
                  https://nomad.com
                </a>
                <div className="flex gap-6 text-sm text-gray-600 dark:text-gray-400">
                  <div>
                    <span className="text-gray-500 dark:text-gray-500">Founded</span>
                    <p className="font-semibold text-gray-900 dark:text-white">July 31, 2011</p>
                  </div>
                  <div>
                    <span className="text-gray-500 dark:text-gray-500">Employees</span>
                    <p className="font-semibold text-gray-900 dark:text-white">4000+</p>
                  </div>
                  <div>
                    <span className="text-gray-500 dark:text-gray-500">Location</span>
                    <p className="font-semibold text-gray-900 dark:text-white">20 countries</p>
                  </div>
                  <div>
                    <span className="text-gray-500 dark:text-gray-500">Industry</span>
                    <p className="font-semibold text-gray-900 dark:text-white">Social Networking</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex gap-2">
              <button className="px-4 py-2 text-indigo-600 dark:text-indigo-400 border border-indigo-600 dark:border-indigo-400 rounded-lg font-medium hover:bg-indigo-50 dark:hover:bg-indigo-900/20 transition-colors">
                Public View
              </button>
              <button className="px-4 py-2 text-indigo-600 dark:text-indigo-400 border border-indigo-600 dark:border-indigo-400 rounded-lg font-medium hover:bg-indigo-50 dark:hover:bg-indigo-900/20 transition-colors">
                Profile Settings
              </button>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex gap-8 px-6">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`py-4 font-medium transition-colors ${
                activeTab === tab
                  ? 'border-b-2 border-indigo-600 text-indigo-600 dark:text-indigo-400'
                  : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-3 gap-6">
        {/* Left Column */}
        <div className="col-span-2 space-y-6">
          {/* Company Profile */}
          <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-bold text-gray-900 dark:text-white">Company Profile</h2>
              <button className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors">
                <Edit className="w-5 h-5 text-gray-600 dark:text-gray-400" />
              </button>
            </div>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              Nomad is a software platform for starting and running internet businesses. Millions of businesses rely on Nomad&apos;s software tools to accept payments, expand globally, and manage their businesses online. Nomad has been at the forefront of expanding internet commerce, powering new business models, and supporting the latest platforms, from marketplaces to mobile commerce sites. We believe that growing the GDP of the internet is a problem rooted in code and design, not finance. Nomad is built for developers, makers, and creators. We work on solving the hard technical problems necessary to build global economic infrastructure—from designing highly reliable systems to developing advanced machine learning algorithms to prevent fraud.
            </p>
          </div>

          {/* Contact */}
          <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-bold text-gray-900 dark:text-white">Contact</h2>
              <button className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors">
                <Edit className="w-5 h-5 text-gray-600 dark:text-gray-400" />
              </button>
            </div>
            <div className="grid grid-cols-2 gap-3">
              <a href="#" className="flex items-center gap-2 px-4 py-2 border border-indigo-600 dark:border-indigo-400 text-indigo-600 dark:text-indigo-400 rounded-lg hover:bg-indigo-50 dark:hover:bg-indigo-900/20 transition-colors">
                <Globe className="w-4 h-4" />
                <span className="text-sm">twitter.com/Nomad</span>
              </a>
              <a href="#" className="flex items-center gap-2 px-4 py-2 border border-indigo-600 dark:border-indigo-400 text-indigo-600 dark:text-indigo-400 rounded-lg hover:bg-indigo-50 dark:hover:bg-indigo-900/20 transition-colors">
                <Facebook className="w-4 h-4" />
                <span className="text-sm">facebook.com/NomadHQ</span>
              </a>
              <a href="#" className="flex items-center gap-2 px-4 py-2 border border-indigo-600 dark:border-indigo-400 text-indigo-600 dark:text-indigo-400 rounded-lg hover:bg-indigo-50 dark:hover:bg-indigo-900/20 transition-colors">
                <Linkedin className="w-4 h-4" />
                <span className="text-sm">linkedin.com/company/nomad</span>
              </a>
              <a href="#" className="flex items-center gap-2 px-4 py-2 border border-indigo-600 dark:border-indigo-400 text-indigo-600 dark:text-indigo-400 rounded-lg hover:bg-indigo-50 dark:hover:bg-indigo-900/20 transition-colors">
                <Twitter className="w-4 h-4" />
                <span className="text-sm">nomad@gmail.com</span>
              </a>
            </div>
          </div>

          {/* Working at Nomad */}
          <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-bold text-gray-900 dark:text-white">Working at Nomad</h2>
              <div className="flex gap-2">
                <button className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors">
                  <Plus className="w-5 h-5 text-gray-600 dark:text-gray-400" />
                </button>
                <button className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors">
                  <Edit className="w-5 h-5 text-gray-600 dark:text-gray-400" />
                </button>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="aspect-video bg-gray-200 dark:bg-gray-700 rounded-lg"></div>
              ))}
            </div>
          </div>

          {/* Teams */}
          <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-bold text-gray-900 dark:text-white">Teams</h2>
              <div className="flex gap-2">
                <button className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors">
                  <Plus className="w-5 h-5 text-gray-600 dark:text-gray-400" />
                </button>
                <button className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors">
                  <Edit className="w-5 h-5 text-gray-600 dark:text-gray-400" />
                </button>
              </div>
            </div>
            <div className="flex justify-center gap-8 mb-4">
              {teamMembers.map((member, index) => (
                <div key={index} className="text-center">
                  <div className="w-24 h-24 bg-gray-300 dark:bg-gray-600 rounded-full flex items-center justify-center text-4xl mb-3 mx-auto">
                    {member.avatar}
                  </div>
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-1">{member.name}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">{member.role}</p>
                  <div className="flex justify-center gap-2">
                    <a href={member.social.linkedin} className="p-1 hover:bg-gray-100 dark:hover:bg-gray-700 rounded transition-colors">
                      <Linkedin className="w-4 h-4 text-gray-600 dark:text-gray-400" />
                    </a>
                    <a href={member.social.twitter} className="p-1 hover:bg-gray-100 dark:hover:bg-gray-700 rounded transition-colors">
                      <Twitter className="w-4 h-4 text-gray-600 dark:text-gray-400" />
                    </a>
                  </div>
                </div>
              ))}
            </div>
            <button className="text-indigo-600 dark:text-indigo-400 text-sm font-medium hover:underline mx-auto block">
              View all 45 teams →
            </button>
          </div>

          {/* Benefits */}
          <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-bold text-gray-900 dark:text-white">Benefit</h2>
              <div className="flex gap-2">
                <button className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors">
                  <Plus className="w-5 h-5 text-gray-600 dark:text-gray-400" />
                </button>
                <button className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors">
                  <Edit className="w-5 h-5 text-gray-600 dark:text-gray-400" />
                </button>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-6">
              {benefits.map((benefit, index) => (
                <div key={index}>
                  <div className="text-4xl mb-3">{benefit.icon}</div>
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">{benefit.title}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Open Positions */}
          <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-bold text-gray-900 dark:text-white">Open Positions</h2>
              <button className="text-indigo-600 dark:text-indigo-400 text-sm font-medium hover:underline">
                Show all jobs →
              </button>
            </div>
            <div className="space-y-4">
              {openPositions.map((job) => (
                <div key={job.id} className="flex items-center justify-between p-4 border border-gray-200 dark:border-gray-700 rounded-lg hover:shadow-md transition-shadow">
                  <div className="flex items-center gap-4">
                    <div className={`w-12 h-12 ${job.logoColor} rounded-lg flex items-center justify-center text-2xl`}>
                      {job.logo}
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 dark:text-white mb-1">{job.title}</h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400">{job.location}</p>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    {job.tags.map((tag, index) => (
                      <span
                        key={index}
                        className={`text-xs px-3 py-1 rounded border ${
                          tag === 'Full-Time'
                            ? 'text-green-600 bg-green-50 border-green-200 dark:bg-green-900/20 dark:border-green-800'
                            : tag === 'Marketing'
                            ? 'text-orange-600 bg-orange-50 border-orange-200 dark:bg-orange-900/20 dark:border-orange-800'
                            : tag === 'Design'
                            ? 'text-indigo-600 bg-indigo-50 border-indigo-200 dark:bg-indigo-900/20 dark:border-indigo-800'
                            : 'text-blue-600 bg-blue-50 border-blue-200 dark:bg-blue-900/20 dark:border-blue-800'
                        }`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className="space-y-6">
          {/* Tech Stack */}
          <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-bold text-gray-900 dark:text-white">Tech Stack</h2>
              <button className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors">
                <Edit className="w-5 h-5 text-gray-600 dark:text-gray-400" />
              </button>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
              Learn about the technology and tools that Nomad uses.
            </p>
            <div className="grid grid-cols-3 gap-3">
              {techStack.map((tech, index) => (
                <div key={index} className="flex flex-col items-center p-3 border border-gray-200 dark:border-gray-700 rounded-lg hover:shadow-md transition-shadow">
                  <div className={`w-12 h-12 ${tech.color} rounded-lg flex items-center justify-center text-2xl mb-2`}>
                    {tech.icon}
                  </div>
                  <span className="text-xs text-gray-900 dark:text-white font-medium text-center">{tech.name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Office Locations */}
          <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-bold text-gray-900 dark:text-white">Office Locations</h2>
              <div className="flex gap-2">
                <button className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors">
                  <Plus className="w-5 h-5 text-gray-600 dark:text-gray-400" />
                </button>
                <button className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors">
                  <Edit className="w-5 h-5 text-gray-600 dark:text-gray-400" />
                </button>
              </div>
            </div>
            <div className="space-y-3">
              {officeLocations.map((location, index) => (
                <div key={index} className="flex items-center gap-3 p-3 border border-gray-200 dark:border-gray-700 rounded-lg">
                  <span className="text-2xl">{location.flag}</span>
                  <div className="flex-1">
                    <p className="font-semibold text-gray-900 dark:text-white text-sm">{location.country}</p>
                    {location.city && (
                      <p className="text-xs text-gray-600 dark:text-gray-400">{location.city}</p>
                    )}
                  </div>
                </div>
              ))}
              <button className="text-indigo-600 dark:text-indigo-400 text-sm font-medium hover:underline w-full text-center">
                View countries →
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompanyProfile;
