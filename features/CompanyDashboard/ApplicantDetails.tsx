'use client';

import { useState } from 'react';
import { ArrowLeft, Star, Calendar, MessageSquare, ChevronDown, Mail, Phone, Instagram, Twitter, Globe, Plus, MoreVertical } from 'lucide-react';
import Link from 'next/link';

const ApplicantDetails = () => {
  const [activeTab, setActiveTab] = useState('Applicant Profile');

  const tabs = ['Applicant Profile', 'Resume', 'Hiring Progress', 'Interview Schedule'];

  return (
    <div>
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-4">
          <Link href="/company-dashboard/applicants">
            <button className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors">
              <ArrowLeft className="w-6 h-6 text-gray-600 dark:text-gray-400" />
            </button>
          </Link>
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Applicant Details</h1>
        </div>
        <button className="flex items-center gap-2 px-4 py-2 text-indigo-600 dark:text-indigo-400 border border-indigo-600 dark:border-indigo-400 rounded-lg font-medium hover:bg-indigo-50 dark:hover:bg-indigo-900/20 transition-colors">
          <ChevronDown className="w-5 h-5" />
          More Action
        </button>
      </div>

      <div className="grid grid-cols-3 gap-6">
        {/* Left Sidebar */}
        <div className="space-y-6">
          {/* Profile Card */}
          <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-6">
            <div className="flex flex-col items-center text-center mb-6">
              <div className="w-24 h-24 bg-gray-300 dark:bg-gray-600 rounded-full flex items-center justify-center text-4xl mb-4">
                👨‍💻
              </div>
              <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-1">Jerome Bell</h2>
              <p className="text-gray-600 dark:text-gray-400 mb-3">Product Designer</p>
              <div className="flex items-center gap-1">
                <Star className="w-5 h-5 text-yellow-500 fill-yellow-500" />
                <span className="font-semibold text-gray-900 dark:text-white">4.0</span>
              </div>
            </div>

            <div className="space-y-4 mb-6">
              <div>
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">Applied Jobs</p>
                <p className="text-sm text-gray-600 dark:text-gray-300">2 days ago</p>
              </div>
              <div>
                <p className="text-sm font-semibold text-gray-900 dark:text-white mb-1">Product Development</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">Marketing • Full-Time</p>
              </div>
            </div>

            <div className="mb-6">
              <div className="flex items-center justify-between mb-2">
                <p className="text-sm font-semibold text-gray-900 dark:text-white">Stage</p>
                <span className="text-xs text-indigo-600 dark:text-indigo-400 font-medium">Interview</span>
              </div>
              <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                <div className="bg-indigo-600 h-2 rounded-full" style={{ width: '75%' }}></div>
              </div>
            </div>

            <div className="flex gap-2">
              <button className="flex-1 flex items-center justify-center gap-2 px-4 py-2 text-indigo-600 dark:text-indigo-400 border border-indigo-600 dark:border-indigo-400 rounded-lg font-medium hover:bg-indigo-50 dark:hover:bg-indigo-900/20 transition-colors">
                <Calendar className="w-4 h-4" />
                Schedule Interview
              </button>
              <button className="p-2 text-indigo-600 dark:text-indigo-400 border border-indigo-600 dark:border-indigo-400 rounded-lg hover:bg-indigo-50 dark:hover:bg-indigo-900/20 transition-colors">
                <MessageSquare className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Contact Card */}
          <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-6">
            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">Contact</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-gray-400 mt-0.5" />
                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">Email</p>
                  <p className="text-sm text-gray-900 dark:text-white">jeromeBell45@email.com</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-gray-400 mt-0.5" />
                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">Phone</p>
                  <p className="text-sm text-gray-900 dark:text-white">+44 1245 572 135</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Instagram className="w-5 h-5 text-gray-400 mt-0.5" />
                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">Instagram</p>
                  <a href="#" className="text-sm text-indigo-600 dark:text-indigo-400 hover:underline">
                    instagram.com/jeromebell
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Twitter className="w-5 h-5 text-gray-400 mt-0.5" />
                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">Twitter</p>
                  <a href="#" className="text-sm text-indigo-600 dark:text-indigo-400 hover:underline">
                    twitter.com/jeromebell
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Globe className="w-5 h-5 text-gray-400 mt-0.5" />
                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">Website</p>
                  <a href="#" className="text-sm text-indigo-600 dark:text-indigo-400 hover:underline">
                    www.jeromebell.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="col-span-2">
          <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700">
            {/* Tabs */}
            <div className="flex gap-8 px-6 border-b border-gray-200 dark:border-gray-700">
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

            {/* Tab Content */}
            <div className="p-6">
              {activeTab === 'Applicant Profile' && <ApplicantProfileTab />}
              {activeTab === 'Resume' && <ResumeTab />}
              {activeTab === 'Hiring Progress' && <HiringProgressTab />}
              {activeTab === 'Interview Schedule' && <InterviewScheduleTab />}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Applicant Profile Tab Component
const ApplicantProfileTab = () => {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">Personal Info</h3>
        <div className="grid grid-cols-2 gap-6">
          <div>
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">Full Name</p>
            <p className="text-gray-900 dark:text-white font-medium">Jerome Bell</p>
          </div>
          <div>
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">Gender</p>
            <p className="text-gray-900 dark:text-white font-medium">Male</p>
          </div>
          <div>
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">Date of Birth</p>
            <p className="text-gray-900 dark:text-white font-medium">March 23, 1995 (28 y.o)</p>
          </div>
          <div>
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">Language</p>
            <p className="text-gray-900 dark:text-white font-medium">English, French, Bahasa</p>
          </div>
          <div className="col-span-2">
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">Address</p>
            <p className="text-gray-900 dark:text-white font-medium">4517 Washington Ave.<br />Manchester, Kentucky 39495</p>
          </div>
        </div>
      </div>

      <div>
        <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">Professional Info</h3>
        <div className="space-y-4">
          <div>
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">About Me</p>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              I&apos;m a product designer + filmmaker currently working remotely at Twitter from beautiful Manchester, United Kingdom. I&apos;m passionate about designing digital products that have a positive impact on the world.
            </p>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mt-3">
              For 10 years, I&apos;ve specialised in interface, experience & interaction design as well as working in user research and product strategy for product agencies, big tech companies & start-ups.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-6">
            <div>
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">Current Job</p>
              <p className="text-gray-900 dark:text-white font-medium">Product Designer</p>
            </div>
            <div>
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">Experience in Years</p>
              <p className="text-gray-900 dark:text-white font-medium">4 Years</p>
            </div>
            <div>
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">Highest Qualification Held</p>
              <p className="text-gray-900 dark:text-white font-medium">Bachelors in Engineering</p>
            </div>
            <div>
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">Skill set</p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-indigo-50 dark:bg-indigo-900/20 text-indigo-600 dark:text-indigo-400 rounded-full text-sm border border-indigo-200 dark:border-indigo-800">
                  Project Management
                </span>
                <span className="px-3 py-1 bg-indigo-50 dark:bg-indigo-900/20 text-indigo-600 dark:text-indigo-400 rounded-full text-sm border border-indigo-200 dark:border-indigo-800">
                  Copywriting
                </span>
                <span className="px-3 py-1 bg-indigo-50 dark:bg-indigo-900/20 text-indigo-600 dark:text-indigo-400 rounded-full text-sm border border-indigo-200 dark:border-indigo-800">
                  English
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Resume Tab Component
const ResumeTab = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-start justify-between">
        <div className="flex items-start gap-4">
          <div className="w-20 h-20 bg-gray-300 dark:bg-gray-600 rounded-full flex items-center justify-center text-3xl">
            👨‍💻
          </div>
          <div>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-1">Jerome Bell</h2>
            <p className="text-gray-600 dark:text-gray-400">Product Designer</p>
          </div>
        </div>
        <div className="text-right text-sm text-gray-600 dark:text-gray-400">
          <p>jeromebell@gmail.com</p>
          <p>+44 1243 123 135</p>
          <p>Manchester</p>
        </div>
      </div>

      <div>
        <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3">EXPERIENCE</h3>
        <div className="space-y-4">
          <div>
            <h4 className="font-semibold text-gray-900 dark:text-white">Senior UEUX Product Designer</h4>
            <p className="text-sm text-gray-600 dark:text-gray-400">Enterprise name</p>
            <p className="text-sm text-gray-500 dark:text-gray-500 mb-2">Aug 2018 - Present • 3 yrs, 5 mos</p>
            <p className="text-sm text-gray-700 dark:text-gray-300">
              Directly collaborated with CEO and Product team to prototype, design and deliver the UI and UX experience with a lean design process: research, design, test, and iterate.
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-gray-900 dark:text-white">UEUX Product Designer</h4>
            <p className="text-sm text-gray-600 dark:text-gray-400">Enterprise name</p>
            <p className="text-sm text-gray-500 dark:text-gray-500 mb-2">Aug 2016 - Aug 2018 • 2 yrs, 5 mos</p>
            <p className="text-sm text-gray-700 dark:text-gray-300">
              Lead the UI design with the accountability of the design system, collaborated with product and development teams on core projects to improve product interfaces and experiences.
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-gray-900 dark:text-white">UI Designer</h4>
            <p className="text-sm text-gray-600 dark:text-gray-400">Enterprise name</p>
            <p className="text-sm text-gray-500 dark:text-gray-500 mb-2">Aug 2014 - Jul 2016 • 2 yrs, 2 mos</p>
            <p className="text-sm text-gray-700 dark:text-gray-300">
              Designed mobile UI applications for Orange SA, Renault, Le Monde, Le Parisien, and Nissan for IOS & Android.
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-gray-900 dark:text-white">Graphic Designer</h4>
            <p className="text-sm text-gray-600 dark:text-gray-400">Enterprise name</p>
            <p className="text-sm text-gray-500 dark:text-gray-500 mb-2">Sept 2010 - Jul 2013 • 3 yrs, 2 mos</p>
            <p className="text-sm text-gray-700 dark:text-gray-300">
              Designed print and web applications for Ree Fashions, Renault, Peugeot, Le Monde, Le Parisien, and Nissan for IOS & Android.
            </p>
          </div>
        </div>
      </div>

      <div>
        <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3">EDUCATION</h3>
        <div className="space-y-4">
          <div>
            <h4 className="font-semibold text-gray-900 dark:text-white">Bachelor European in Graphic Design</h4>
            <p className="text-sm text-gray-600 dark:text-gray-400">School name</p>
            <p className="text-sm text-gray-500 dark:text-gray-500">2007 - 2010 • Bachelor</p>
          </div>
          <div>
            <h4 className="font-semibold text-gray-900 dark:text-white">Bachelor European in Graphic Design</h4>
            <p className="text-sm text-gray-600 dark:text-gray-400">School name</p>
            <p className="text-sm text-gray-500 dark:text-gray-500">2007 - 2010 • Bachelor</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-6">
        <div>
          <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3">Tools & Technologies</h3>
          <p className="text-sm text-gray-700 dark:text-gray-300">
            Figma, Sketch, Protopie, Framer, Invision, Abstract, Zeplin, Google Analytics, Amplitude, Fullstory, Dovetail, Zoom
          </p>
        </div>
        <div>
          <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3">Other Skills</h3>
          <p className="text-sm text-gray-700 dark:text-gray-300">
            HTML, CSS, jQuery
          </p>
        </div>
        <div>
          <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3">Languages</h3>
          <p className="text-sm text-gray-700 dark:text-gray-300">
            French (native)<br />
            English (professional)
          </p>
        </div>
        <div>
          <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3">Social</h3>
          <p className="text-sm text-indigo-600 dark:text-indigo-400">
            youtube.com<br />
            linkedin.com<br />
            twitter.com<br />
            @twitter.com/yourname
          </p>
        </div>
      </div>
    </div>
  );
};

// Hiring Progress Tab Component
const HiringProgressTab = () => {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">Current Stage</h3>
        <div className="flex gap-2 mb-6">
          <button className="px-4 py-2 bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 rounded-lg border border-blue-200 dark:border-blue-800">
            In-Review
          </button>
          <button className="px-4 py-2 bg-indigo-50 dark:bg-indigo-900/20 text-indigo-600 dark:text-indigo-400 rounded-lg border border-indigo-200 dark:border-indigo-800">
            Shortlisted
          </button>
          <button className="px-4 py-2 bg-indigo-600 text-white rounded-lg">
            Interview
          </button>
          <button className="px-4 py-2 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 rounded-lg">
            Hired / Declined
          </button>
        </div>
      </div>

      <div>
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-bold text-gray-900 dark:text-white">Stage Info</h3>
          <button className="flex items-center gap-2 px-4 py-2 text-indigo-600 dark:text-indigo-400 border border-indigo-600 dark:border-indigo-400 rounded-lg font-medium hover:bg-indigo-50 dark:hover:bg-indigo-900/20 transition-colors">
            Give Rating
          </button>
        </div>
        <div className="grid grid-cols-2 gap-6">
          <div>
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">Interview Date</p>
            <p className="text-gray-900 dark:text-white font-medium">10 - 13 July 2021</p>
          </div>
          <div>
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">Interview Status</p>
            <span className="inline-flex px-3 py-1 bg-orange-50 dark:bg-orange-900/20 text-orange-600 dark:text-orange-400 rounded-full text-xs font-medium border border-orange-200 dark:border-orange-800">
              On Progress
            </span>
          </div>
          <div>
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">Interview Location</p>
            <p className="text-gray-900 dark:text-white font-medium">
              Silver Crysta Room, Nomad Office<br />
              2517 W Gray St. Utica,<br />
              Pennsylvania 57867
            </p>
          </div>
          <div>
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">Assigned to</p>
            <div className="flex -space-x-2">
              <div className="w-8 h-8 bg-gray-300 dark:bg-gray-600 rounded-full border-2 border-white dark:border-gray-800"></div>
              <div className="w-8 h-8 bg-gray-300 dark:bg-gray-600 rounded-full border-2 border-white dark:border-gray-800"></div>
              <div className="w-8 h-8 bg-gray-300 dark:bg-gray-600 rounded-full border-2 border-white dark:border-gray-800"></div>
            </div>
          </div>
        </div>
      </div>

      <div>
        <button className="w-full px-4 py-2 text-indigo-600 dark:text-indigo-400 border border-indigo-600 dark:border-indigo-400 rounded-lg font-medium hover:bg-indigo-50 dark:hover:bg-indigo-900/20 transition-colors">
          Move To Next Stage
        </button>
      </div>

      <div>
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-bold text-gray-900 dark:text-white">Notes</h3>
          <button className="flex items-center gap-2 text-indigo-600 dark:text-indigo-400 font-medium hover:underline">
            <Plus className="w-4 h-4" />
            Add Notes
          </button>
        </div>
        <div className="space-y-4">
          <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-4">
            <div className="flex items-start gap-3 mb-3">
              <div className="w-10 h-10 bg-gray-300 dark:bg-gray-600 rounded-full flex items-center justify-center text-xl shrink-0">
                👩
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-semibold text-gray-900 dark:text-white">Maria Kelly</h4>
                  <span className="text-xs text-gray-500 dark:text-gray-400">15 July, 2021 • 11:30 AM</span>
                </div>
                <p className="text-sm text-gray-700 dark:text-gray-300 mb-2">
                  Please, do an interview stage immediately. The design division needs more new employee now
                </p>
                <button className="text-sm text-indigo-600 dark:text-indigo-400 font-medium hover:underline">
                  2 Replies
                </button>
              </div>
            </div>
          </div>
          <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-4">
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 bg-gray-300 dark:bg-gray-600 rounded-full flex items-center justify-center text-xl shrink-0">
                👩
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-semibold text-gray-900 dark:text-white">Maria Kelly</h4>
                  <span className="text-xs text-gray-500 dark:text-gray-400">10 July, 2021 • 10:30 AM</span>
                </div>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Please, do an interview stage immediately.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Interview Schedule Tab Component
const InterviewScheduleTab = () => {
  const interviews = [
    {
      id: 1,
      date: 'Tomorrow - 11 July, 2021',
      name: 'Kathryn Murphy',
      type: 'Written Test',
      time: '10:00 AM - 11:30 AM',
      location: 'Silver Crysta Room, Nomad',
      avatar: '👩‍💼',
    },
    {
      id: 2,
      date: '11 July, 2021',
      name: 'Jenny Wilson',
      type: 'Written Test 2',
      time: '10:00 AM - 11:00 AM',
      location: 'Silver Crysta Room, Nomad',
      avatar: '👩‍🦰',
    },
    {
      id: 3,
      date: '12 July, 2021',
      name: 'Thad Eddings',
      type: 'Final Test',
      time: '10:00 AM - 11:00 AM',
      location: 'Silver Crysta Room, Nomad',
      avatar: '👨‍💼',
    },
    {
      id: 4,
      date: '13 July, 2021',
      name: 'Thad Eddings',
      type: 'Final Test',
      time: '10:00 AM - 11:00 AM',
      location: 'Silver Crysta Room, Nomad',
      avatar: '👨‍💼',
    },
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-bold text-gray-900 dark:text-white">Interview List</h3>
        <button className="flex items-center gap-2 text-indigo-600 dark:text-indigo-400 font-medium hover:underline">
          <Plus className="w-4 h-4" />
          Add Schedule Interview
        </button>
      </div>

      <div className="space-y-4">
        {interviews.map((interview) => (
          <div key={interview.id}>
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">{interview.date}</p>
            <div className="flex items-center justify-between p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gray-300 dark:bg-gray-600 rounded-full flex items-center justify-center text-2xl">
                  {interview.avatar}
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-1">{interview.name}</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{interview.type}</p>
                </div>
              </div>
              <div className="text-right">
                <p className="font-semibold text-gray-900 dark:text-white mb-1">{interview.time}</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">{interview.location}</p>
              </div>
              <div className="flex items-center gap-2">
                <button className="flex items-center gap-2 px-4 py-2 text-indigo-600 dark:text-indigo-400 border border-indigo-600 dark:border-indigo-400 rounded-lg font-medium hover:bg-indigo-50 dark:hover:bg-indigo-900/20 transition-colors">
                  <Plus className="w-4 h-4" />
                  Add Feedback
                </button>
                <button className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors">
                  <MoreVertical className="w-5 h-5 text-gray-600 dark:text-gray-400" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ApplicantDetails;
