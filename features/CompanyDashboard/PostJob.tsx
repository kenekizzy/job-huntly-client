'use client';

import { useState } from 'react';
import { ArrowLeft, Briefcase, FileText, Gift, Plus, X, Smile, Bold, Italic, List, AlignLeft, Link as LinkIcon } from 'lucide-react';
import Link from 'next/link';

interface Benefit {
  id: number;
  icon: string;
  title: string;
  description: string;
}

const PostJob = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [jobTitle, setJobTitle] = useState('');
  const [employmentTypes, setEmploymentTypes] = useState<string[]>([]);
  const [salaryMin, setSalaryMin] = useState(5000);
  const [salaryMax, setSalaryMax] = useState(22000);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [skills, setSkills] = useState<string[]>(['Graphic Design', 'Communication', 'Illustrator']);
  const [newSkill, setNewSkill] = useState('');
  
  const [jobDescription, setJobDescription] = useState('');
  const [responsibilities, setResponsibilities] = useState('');
  const [qualifications, setQualifications] = useState('');
  const [niceToHaves, setNiceToHaves] = useState('');

  const [benefits, setBenefits] = useState<Benefit[]>([
    {
      id: 1,
      icon: '🏥',
      title: 'Full Healthcare',
      description: 'We believe in thriving communities and that starts with our team being happy and healthy.',
    },
    {
      id: 2,
      icon: '🏖️',
      title: 'Unlimited Vacation',
      description: 'We believe you should have a flexible schedule that makes space for family, wellness, and fun.',
    },
    {
      id: 3,
      icon: '💼',
      title: 'Skill Development',
      description: 'We believe in always learning and leveling up our skills. Whether it\'s a conference or online course.',
    },
  ]);

  const steps = [
    { number: 1, title: 'Job Information', icon: Briefcase },
    { number: 2, title: 'Job Description', icon: FileText },
    { number: 3, title: 'Perks & Benefit', icon: Gift },
  ];

  const toggleEmploymentType = (type: string) => {
    if (employmentTypes.includes(type)) {
      setEmploymentTypes(employmentTypes.filter(t => t !== type));
    } else {
      setEmploymentTypes([...employmentTypes, type]);
    }
  };

  const addSkill = () => {
    if (newSkill.trim() && !skills.includes(newSkill.trim())) {
      setSkills([...skills, newSkill.trim()]);
      setNewSkill('');
    }
  };

  const removeSkill = (skill: string) => {
    setSkills(skills.filter(s => s !== skill));
  };

  const removeBenefit = (id: number) => {
    setBenefits(benefits.filter(b => b.id !== id));
  };

  return (
    <div>
      {/* Header */}
      <div className="flex items-center gap-4 mb-8">
        <Link href="/company-dashboard/jobs">
          <button className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors">
            <ArrowLeft className="w-6 h-6 text-gray-600 dark:text-gray-400" />
          </button>
        </Link>
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Post a Job</h1>
      </div>

      {/* Steps */}
      <div className="flex items-center justify-center gap-8 mb-12">
        {steps.map((step, index) => (
          <div key={step.number} className="flex items-center gap-8">
            <div className="flex flex-col items-center">
              <div
                className={`w-16 h-16 rounded-full flex items-center justify-center mb-3 transition-colors ${
                  currentStep >= step.number
                    ? 'bg-indigo-600 text-white'
                    : 'bg-gray-200 dark:bg-gray-700 text-gray-400'
                }`}
              >
                <step.icon className="w-8 h-8" />
              </div>
              <div className="text-center">
                <p className="text-xs text-gray-500 dark:text-gray-400 mb-1">Step {step.number}/3</p>
                <p className={`font-semibold ${
                  currentStep >= step.number
                    ? 'text-gray-900 dark:text-white'
                    : 'text-gray-400'
                }`}>
                  {step.title}
                </p>
              </div>
            </div>
            {index < steps.length - 1 && (
              <div className={`w-24 h-1 mb-12 ${
                currentStep > step.number ? 'bg-indigo-600' : 'bg-gray-200 dark:bg-gray-700'
              }`}></div>
            )}
          </div>
        ))}
      </div>

      {/* Step Content */}
      <div className="max-w-4xl mx-auto">
        {currentStep === 1 && <Step1 
          jobTitle={jobTitle}
          setJobTitle={setJobTitle}
          employmentTypes={employmentTypes}
          toggleEmploymentType={toggleEmploymentType}
          salaryMin={salaryMin}
          setSalaryMin={setSalaryMin}
          salaryMax={salaryMax}
          setSalaryMax={setSalaryMax}
          selectedCategories={selectedCategories}
          setSelectedCategories={setSelectedCategories}
          skills={skills}
          newSkill={newSkill}
          setNewSkill={setNewSkill}
          addSkill={addSkill}
          removeSkill={removeSkill}
        />}
        {currentStep === 2 && <Step2 
          jobDescription={jobDescription}
          setJobDescription={setJobDescription}
          responsibilities={responsibilities}
          setResponsibilities={setResponsibilities}
          qualifications={qualifications}
          setQualifications={setQualifications}
          niceToHaves={niceToHaves}
          setNiceToHaves={setNiceToHaves}
        />}
        {currentStep === 3 && <Step3 benefits={benefits} removeBenefit={removeBenefit} />}

        {/* Navigation Buttons */}
        <div className="flex justify-end gap-4 mt-8">
          {currentStep < 3 && (
            <button
              onClick={() => setCurrentStep(currentStep + 1)}
              className="px-8 py-3 bg-indigo-600 text-white rounded-lg font-medium hover:bg-indigo-700 transition-colors"
            >
              Next Step
            </button>
          )}
          {currentStep === 3 && (
            <button className="px-8 py-3 bg-indigo-600 text-white rounded-lg font-medium hover:bg-indigo-700 transition-colors">
              Do a Review
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

// Step 1: Job Information
const Step1 = ({ jobTitle, setJobTitle, employmentTypes, toggleEmploymentType, salaryMin, setSalaryMin, salaryMax, setSalaryMax, selectedCategories, setSelectedCategories, skills, newSkill, setNewSkill, addSkill, removeSkill }: any) => {
  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Basic Information</h2>
        <p className="text-gray-600 dark:text-gray-400">This information will be displayed publicly</p>
      </div>

      {/* Job Title */}
      <div>
        <label className="block text-sm font-semibold text-gray-900 dark:text-white mb-2">
          Job Title
        </label>
        <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
          Job titles must be describe one position
        </p>
        <input
          type="text"
          placeholder="e.g. Software Engineer"
          value={jobTitle}
          onChange={(e) => setJobTitle(e.target.value)}
          className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
        <p className="text-xs text-gray-500 dark:text-gray-400 mt-2">At least 80 characters</p>
      </div>

      {/* Type of Employment */}
      <div>
        <label className="block text-sm font-semibold text-gray-900 dark:text-white mb-2">
          Type of Employment
        </label>
        <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
          You can select multiple type of employment
        </p>
        <div className="space-y-3">
          {['Full-Time', 'Part-Time', 'Remote', 'Internship', 'Contract'].map((type) => (
            <label key={type} className="flex items-center gap-3 cursor-pointer">
              <input
                type="checkbox"
                checked={employmentTypes.includes(type)}
                onChange={() => toggleEmploymentType(type)}
                className="w-5 h-5 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
              />
              <span className="text-gray-700 dark:text-gray-300">{type}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Salary */}
      <div>
        <label className="block text-sm font-semibold text-gray-900 dark:text-white mb-2">
          Salary
        </label>
        <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
          Please specify the estimated salary range for the role. You can leave this blank
        </p>
        <div className="flex items-center gap-4 mb-4">
          <div className="flex items-center gap-2">
            <span className="text-gray-700 dark:text-gray-300">$</span>
            <input
              type="number"
              value={salaryMin}
              onChange={(e) => setSalaryMin(Number(e.target.value))}
              className="w-32 px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>
          <span className="text-gray-500 dark:text-gray-400">to</span>
          <div className="flex items-center gap-2">
            <span className="text-gray-700 dark:text-gray-300">$</span>
            <input
              type="number"
              value={salaryMax}
              onChange={(e) => setSalaryMax(Number(e.target.value))}
              className="w-32 px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>
        </div>
        <input
          type="range"
          min="0"
          max="50000"
          value={salaryMax}
          onChange={(e) => setSalaryMax(Number(e.target.value))}
          className="w-full"
        />
      </div>

      {/* Categories */}
      <div>
        <label className="block text-sm font-semibold text-gray-900 dark:text-white mb-2">
          Categories
        </label>
        <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
          You can select multiple job categories
        </p>
        <select
          className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
        >
          <option>Select Job Categories</option>
          <option>Design</option>
          <option>Development</option>
          <option>Marketing</option>
          <option>Sales</option>
        </select>
      </div>

      {/* Required Skills */}
      <div>
        <label className="block text-sm font-semibold text-gray-900 dark:text-white mb-2">
          Required Skills
        </label>
        <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
          Add required skills for the job
        </p>
        <div className="flex gap-2 mb-3">
          <input
            type="text"
            placeholder="Add skill"
            value={newSkill}
            onChange={(e) => setNewSkill(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && addSkill()}
            className="flex-1 px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
          <button
            onClick={addSkill}
            className="flex items-center gap-2 px-4 py-2 text-indigo-600 dark:text-indigo-400 border border-indigo-600 dark:border-indigo-400 rounded-lg font-medium hover:bg-indigo-50 dark:hover:bg-indigo-900/20 transition-colors"
          >
            <Plus className="w-4 h-4" />
            Add Skills
          </button>
        </div>
        <div className="flex flex-wrap gap-2">
          {skills.map((skill: any) => (
            <span
              key={skill}
              className="inline-flex items-center gap-2 px-3 py-1 bg-indigo-50 dark:bg-indigo-900/20 text-indigo-600 dark:text-indigo-400 rounded-full text-sm border border-indigo-200 dark:border-indigo-800"
            >
              {skill}
              <button onClick={() => removeSkill(skill)} className="hover:text-indigo-800 dark:hover:text-indigo-300">
                <X className="w-3 h-3" />
              </button>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

// Step 2: Job Description
const Step2 = ({ jobDescription, setJobDescription, responsibilities, setResponsibilities, qualifications, setQualifications, niceToHaves, setNiceToHaves }: any) => {
  const TextEditor = ({ value, onChange, placeholder, maxLength = 500 }: any) => (
    <div>
      <textarea
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 min-h-[150px]"
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
          {value.length} / {maxLength}
        </span>
      </div>
    </div>
  );

  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Details</h2>
        <p className="text-gray-600 dark:text-gray-400">
          Add the description of the job, responsibilities, who you are, and nice-to-haves.
        </p>
      </div>

      {/* Job Descriptions */}
      <div>
        <label className="block text-sm font-semibold text-gray-900 dark:text-white mb-2">
          Job Descriptions
        </label>
        <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
          Job titles must be describe one position
        </p>
        <TextEditor
          value={jobDescription}
          onChange={setJobDescription}
          placeholder="Enter job description"
          maxLength={500}
        />
      </div>

      {/* Responsibilities */}
      <div>
        <label className="block text-sm font-semibold text-gray-900 dark:text-white mb-2">
          Responsibilities
        </label>
        <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
          Outline the core responsibilities of the position
        </p>
        <TextEditor
          value={responsibilities}
          onChange={setResponsibilities}
          placeholder="Enter job responsibilities"
          maxLength={500}
        />
      </div>

      {/* Who You Are */}
      <div>
        <label className="block text-sm font-semibold text-gray-900 dark:text-white mb-2">
          Who You Are
        </label>
        <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
          Add your preferred candidates qualifications
        </p>
        <TextEditor
          value={qualifications}
          onChange={setQualifications}
          placeholder="Enter qualifications"
          maxLength={500}
        />
      </div>

      {/* Nice-To-Haves */}
      <div>
        <label className="block text-sm font-semibold text-gray-900 dark:text-white mb-2">
          Nice-To-Haves
        </label>
        <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
          Add nice-to-have skills and qualifications for the role to encourage a more diverse set of candidates to apply
        </p>
        <TextEditor
          value={niceToHaves}
          onChange={setNiceToHaves}
          placeholder="Enter nice-to-haves"
          maxLength={500}
        />
      </div>
    </div>
  );
};

// Step 3: Perks & Benefits
const Step3 = ({ benefits, removeBenefit }: any) => {
  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Basic Information</h2>
        <p className="text-gray-600 dark:text-gray-400">List out your top perks and benefits.</p>
      </div>

      <div>
        <div className="flex items-center justify-between mb-4">
          <div>
            <h3 className="text-sm font-semibold text-gray-900 dark:text-white mb-1">
              Perks and Benefits
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Encourage more people to apply by sharing the attractive rewards and benefits you offer your employees
            </p>
          </div>
          <button className="flex items-center gap-2 text-indigo-600 dark:text-indigo-400 font-medium hover:underline">
            <Plus className="w-4 h-4" />
            Add Benefit
          </button>
        </div>

        <div className="grid grid-cols-2 gap-4">
          {benefits.map((benefit: Benefit) => (
            <div
              key={benefit.id}
              className="relative p-6 border border-gray-200 dark:border-gray-700 rounded-lg hover:shadow-md transition-shadow"
            >
              <button
                onClick={() => removeBenefit(benefit.id)}
                className="absolute top-4 right-4 p-1 hover:bg-gray-100 dark:hover:bg-gray-700 rounded transition-colors"
              >
                <X className="w-4 h-4 text-gray-600 dark:text-gray-400" />
              </button>
              <div className="text-4xl mb-4">{benefit.icon}</div>
              <h4 className="font-semibold text-gray-900 dark:text-white mb-2">{benefit.title}</h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PostJob;
