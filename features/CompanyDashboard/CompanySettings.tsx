'use client';

import { useState } from 'react';
import { Upload, X, Smile, Bold, Italic, List, AlignLeft, Link as LinkIcon, Grid, LayoutList, Mail, Trash2 } from 'lucide-react';

interface TeamMember {
  id: number;
  name: string;
  role: string;
  avatar: string;
}

const CompanySettings = () => {
  const [activeTab, setActiveTab] = useState('Overview');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  const tabs = ['Overview', 'Social Links', 'Team'];

  return (
    <div>
      {/* Header */}
      <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Settings</h1>

      {/* Tabs */}
      <div className="flex gap-8 mb-8 border-b border-gray-200 dark:border-gray-700">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`pb-4 font-medium transition-colors ${
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
      {activeTab === 'Overview' && <OverviewTab />}
      {activeTab === 'Social Links' && <SocialLinksTab />}
      {activeTab === 'Team' && <TeamTab viewMode={viewMode} setViewMode={setViewMode} />}

      {/* Save Button */}
      <div className="flex justify-end mt-8">
        <button className="px-8 py-3 bg-indigo-600 text-white rounded-lg font-medium hover:bg-indigo-700 transition-colors">
          Save Changes
        </button>
      </div>
    </div>
  );
};

// Overview Tab
const OverviewTab = () => {
  const [companyName, setCompanyName] = useState('Nomad');
  const [website, setWebsite] = useState('https://www.nomad.com');
  const [locations, setLocations] = useState(['England', 'Japan', 'Australia']);
  const [employees, setEmployees] = useState('1 - 50');
  const [industry, setIndustry] = useState('Technology');
  const [dateFounded, setDateFounded] = useState({ day: '31', month: 'July', year: '2021' });
  const [techStack, setTechStack] = useState(['HTML 5', 'CSS 3', 'Javascript']);
  const [description, setDescription] = useState(
    'Nomad is part of the Information Technology industry. We believe travellers want to experience real life and meet local people. Nomad has 20 total employees across all of its locations and generates $1.50 million in sales.'
  );

  const removeLocation = (location: string) => {
    setLocations(locations.filter(l => l !== location));
  };

  const removeTech = (tech: string) => {
    setTechStack(techStack.filter(t => t !== tech));
  };

  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Basic Information</h2>
        <p className="text-gray-600 dark:text-gray-400">
          This is company information that you can update anytime.
        </p>
      </div>

      {/* Company Logo */}
      <div>
        <h3 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">Company Logo</h3>
        <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
          This image will be shown publicly as company logo.
        </p>
        <div className="flex items-center gap-6">
          <div className="w-24 h-24 bg-green-500 rounded-lg flex items-center justify-center text-5xl">
            🏔️
          </div>
          <div className="flex-1 border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-lg p-8 text-center">
            <Upload className="w-8 h-8 text-gray-400 mx-auto mb-2" />
            <p className="text-sm text-indigo-600 dark:text-indigo-400 mb-1">
              Click to replace or drag and drop
            </p>
            <p className="text-xs text-gray-500 dark:text-gray-400">
              SVG, PNG, JPG or GIF (max. 400 x 400px)
            </p>
          </div>
        </div>
      </div>

      {/* Company Details */}
      <div>
        <h3 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">Company Details</h3>
        <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
          Introduce your company core info quickly to users by fill up company details
        </p>
        
        <div className="space-y-4">
          {/* Company Name */}
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Company Name
            </label>
            <input
              type="text"
              value={companyName}
              onChange={(e) => setCompanyName(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          {/* Website */}
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Website
            </label>
            <input
              type="text"
              value={website}
              onChange={(e) => setWebsite(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          {/* Location */}
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Location
            </label>
            <div className="flex flex-wrap gap-2 mb-2">
              {locations.map((location) => (
                <span
                  key={location}
                  className="inline-flex items-center gap-2 px-3 py-1 bg-indigo-50 dark:bg-indigo-900/20 text-indigo-600 dark:text-indigo-400 rounded-full text-sm border border-indigo-200 dark:border-indigo-800"
                >
                  {location}
                  <button onClick={() => removeLocation(location)}>
                    <X className="w-3 h-3" />
                  </button>
                </span>
              ))}
            </div>
            <select className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500">
              <option>Select location</option>
            </select>
          </div>

          {/* Employee & Industry */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Employee
              </label>
              <select
                value={employees}
                onChange={(e) => setEmployees(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
              >
                <option>1 - 50</option>
                <option>51 - 200</option>
                <option>201 - 500</option>
                <option>500+</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Industry
              </label>
              <select
                value={industry}
                onChange={(e) => setIndustry(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
              >
                <option>Technology</option>
                <option>Finance</option>
                <option>Healthcare</option>
                <option>Education</option>
              </select>
            </div>
          </div>

          {/* Date Founded */}
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Date Founded
            </label>
            <div className="grid grid-cols-3 gap-4">
              <select
                value={dateFounded.day}
                onChange={(e) => setDateFounded({ ...dateFounded, day: e.target.value })}
                className="px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
              >
                {Array.from({ length: 31 }, (_, i) => i + 1).map((day) => (
                  <option key={day} value={day}>{day}</option>
                ))}
              </select>
              <select
                value={dateFounded.month}
                onChange={(e) => setDateFounded({ ...dateFounded, month: e.target.value })}
                className="px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
              >
                {['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'].map((month) => (
                  <option key={month} value={month}>{month}</option>
                ))}
              </select>
              <select
                value={dateFounded.year}
                onChange={(e) => setDateFounded({ ...dateFounded, year: e.target.value })}
                className="px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
              >
                {Array.from({ length: 50 }, (_, i) => 2024 - i).map((year) => (
                  <option key={year} value={year}>{year}</option>
                ))}
              </select>
            </div>
          </div>

          {/* Tech Stack */}
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Tech Stack
            </label>
            <div className="flex flex-wrap gap-2 mb-2">
              {techStack.map((tech) => (
                <span
                  key={tech}
                  className="inline-flex items-center gap-2 px-3 py-1 bg-indigo-50 dark:bg-indigo-900/20 text-indigo-600 dark:text-indigo-400 rounded-full text-sm border border-indigo-200 dark:border-indigo-800"
                >
                  {tech}
                  <button onClick={() => removeTech(tech)}>
                    <X className="w-3 h-3" />
                  </button>
                </span>
              ))}
            </div>
            <select className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500">
              <option>Select tech stack</option>
            </select>
          </div>
        </div>
      </div>

      {/* About Company */}
      <div>
        <h3 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">About Company</h3>
        <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
          Brief description for your company. URLs are hyperlinked.
        </p>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Description
          </label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 min-h-[120px]"
          />
          <div className="flex items-center justify-between mt-2">
            <div className="flex gap-2">
              <button className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded transition-colors">
                <Smile className="w-4 h-4 text-gray-600 dark:text-gray-400" />
              </button>
              <button className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded transition-colors">
                <Bold className="w-4 h-4 text-gray-600 dark:text-gray-400" />
              </button>
              <button className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded transition-colors">
                <Italic className="w-4 h-4 text-gray-600 dark:text-gray-400" />
              </button>
              <button className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded transition-colors">
                <List className="w-4 h-4 text-gray-600 dark:text-gray-400" />
              </button>
              <button className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded transition-colors">
                <AlignLeft className="w-4 h-4 text-gray-600 dark:text-gray-400" />
              </button>
              <button className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded transition-colors">
                <LinkIcon className="w-4 h-4 text-gray-600 dark:text-gray-400" />
              </button>
            </div>
            <span className="text-xs text-gray-500 dark:text-gray-400">
              {description.length} / 500
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

// Social Links Tab
const SocialLinksTab = () => {
  const [instagram, setInstagram] = useState('https://www.instagram.com/nomad/');
  const [twitter, setTwitter] = useState('https://twitter.com/nomad/');
  const [facebook, setFacebook] = useState('https://web.facebook.com/nomad/');
  const [linkedin, setLinkedin] = useState('');
  const [youtube, setYoutube] = useState('');

  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Basic Information</h2>
        <p className="text-gray-600 dark:text-gray-400">
          Add elsewhere links to your company profile. You can add only username without full https links.
        </p>
      </div>

      <div className="space-y-4 max-w-2xl">
        {/* Instagram */}
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Instagram
          </label>
          <input
            type="text"
            value={instagram}
            onChange={(e) => setInstagram(e.target.value)}
            placeholder="https://www.instagram.com/nomad/"
            className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        {/* Twitter */}
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Twitter
          </label>
          <input
            type="text"
            value={twitter}
            onChange={(e) => setTwitter(e.target.value)}
            placeholder="https://twitter.com/nomad/"
            className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        {/* Facebook */}
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Facebook
          </label>
          <input
            type="text"
            value={facebook}
            onChange={(e) => setFacebook(e.target.value)}
            placeholder="https://web.facebook.com/nomad/"
            className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        {/* LinkedIn */}
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Linkedin
          </label>
          <input
            type="text"
            value={linkedin}
            onChange={(e) => setLinkedin(e.target.value)}
            placeholder="Enter your Linkedin address"
            className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        {/* Youtube */}
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Youtube
          </label>
          <input
            type="text"
            value={youtube}
            onChange={(e) => setYoutube(e.target.value)}
            placeholder="Enter your youtube address"
            className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>
      </div>
    </div>
  );
};

// Team Tab
const TeamTab = ({ viewMode, setViewMode }: { viewMode: 'grid' | 'list'; setViewMode: (mode: 'grid' | 'list') => void }) => {
  const teamMembers: TeamMember[] = [
    { id: 1, name: 'Célestin Gardinier', role: 'CEO & Co-Founder', avatar: '👨‍💼' },
    { id: 2, name: 'Reynaud Colbert', role: 'Co-Founder', avatar: '👨' },
    { id: 3, name: 'Arienne Lyon', role: 'Managing Director', avatar: '👩' },
    { id: 4, name: 'Bernard Alexander', role: 'Managing Director', avatar: '👨‍🦱' },
    { id: 5, name: 'Christine Jhonson', role: 'Managing Director', avatar: '👩‍🦰' },
    { id: 6, name: 'Aaron Morgan', role: 'Managing Director', avatar: '👨‍🦲' },
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Basic Information</h2>
          <p className="text-gray-600 dark:text-gray-400">Add team members of your company</p>
        </div>
        <div className="flex items-center gap-3">
          <span className="text-lg font-semibold text-gray-900 dark:text-white">
            {teamMembers.length} Members
          </span>
          <button className="flex items-center gap-2 px-4 py-2 bg-indigo-600 text-white rounded-lg font-medium hover:bg-indigo-700 transition-colors">
            <Mail className="w-4 h-4" />
            Add Members
          </button>
          <div className="flex gap-2 border border-gray-300 dark:border-gray-600 rounded-lg p-1">
            <button
              onClick={() => setViewMode('grid')}
              className={`p-2 rounded transition-colors ${
                viewMode === 'grid'
                  ? 'bg-indigo-600 text-white'
                  : 'text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700'
              }`}
            >
              <Grid className="w-4 h-4" />
            </button>
            <button
              onClick={() => setViewMode('list')}
              className={`p-2 rounded transition-colors ${
                viewMode === 'list'
                  ? 'bg-indigo-600 text-white'
                  : 'text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700'
              }`}
            >
              <LayoutList className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Grid View */}
      {viewMode === 'grid' && (
        <div className="grid grid-cols-3 gap-6">
          {teamMembers.map((member) => (
            <div
              key={member.id}
              className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6 text-center hover:shadow-lg transition-shadow"
            >
              <div className="w-20 h-20 bg-gray-300 dark:bg-gray-600 rounded-full flex items-center justify-center text-4xl mx-auto mb-4">
                {member.avatar}
              </div>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-1">{member.name}</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">{member.role}</p>
              <div className="flex items-center justify-center gap-2">
                <button className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors">
                  <Mail className="w-4 h-4 text-gray-600 dark:text-gray-400" />
                </button>
                <button className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors">
                  <Trash2 className="w-4 h-4 text-gray-600 dark:text-gray-400" />
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* List View */}
      {viewMode === 'list' && (
        <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden">
          <table className="w-full">
            <thead className="bg-gray-50 dark:bg-gray-700/50 border-b border-gray-200 dark:border-gray-700">
              <tr>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700 dark:text-gray-300">
                  Member
                </th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700 dark:text-gray-300">
                  Role
                </th>
                <th className="px-6 py-4 text-right text-sm font-semibold text-gray-700 dark:text-gray-300">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
              {teamMembers.map((member) => (
                <tr key={member.id} className="hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-gray-300 dark:bg-gray-600 rounded-full flex items-center justify-center text-xl">
                        {member.avatar}
                      </div>
                      <span className="font-medium text-gray-900 dark:text-white">{member.name}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className="text-gray-700 dark:text-gray-300">{member.role}</span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center justify-end gap-2">
                      <button className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors">
                        <Mail className="w-4 h-4 text-gray-600 dark:text-gray-400" />
                      </button>
                      <button className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors">
                        <Trash2 className="w-4 h-4 text-gray-600 dark:text-gray-400" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default CompanySettings;
