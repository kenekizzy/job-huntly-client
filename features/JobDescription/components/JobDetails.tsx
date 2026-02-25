'use client';

import { CheckCircle2 } from 'lucide-react';

const JobDetails = () => {
  const sections = [
    {
      title: 'Description',
      content:
        'Stripe is looking for Social Media Marketing expert to help manage our online networks. You will be responsible for monitoring our social media channels, creating content, finding effective ways to engage the community and incentivize others to engage on our channels.',
    },
    {
      title: 'Responsibilities',
      items: [
        'Community engagement to ensure that is supported and actively represented online',
        'Focus on social media content development and publication',
        'Marketing and strategy support',
        'Stay on top of trends on social media platforms, and suggest content ideas to the team',
        'Engage with online communities',
      ],
    },
    {
      title: 'Who You Are',
      items: [
        'You get energy from people and building the ideal work environment',
        'You have a sense for beautiful spaces and office experiences',
        'You are a confident office manager, ready for added responsibilities',
        'Youre detail-oriented and creative',
        'Youre a growth marketer and know how to run campaigns',
      ],
    },
    {
      title: 'Nice-To-Haves',
      items: [
        'Fluent in English',
        'Project management skills',
        'Copy editing skills',
      ],
    },
  ];

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg p-8 border border-gray-200 dark:border-gray-700">
      <div className="space-y-8">
        {sections.map((section, index) => (
          <div key={index}>
            <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
              {section.title}
            </h2>
            {section.content && (
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                {section.content}
              </p>
            )}
            {section.items && (
              <ul className="space-y-3">
                {section.items.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-indigo-600 dark:text-indigo-400 shrink-0 mt-0.5" />
                    <span className="text-gray-600 dark:text-gray-400">{item}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}

        {/* Perks & Benefits */}
        <div>
          <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-6">
            Perks & Benefits
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                icon: '🏥',
                title: 'Full Healthcare',
                description:
                  'We believe in thriving communities and that starts with our team being happy and healthy.',
              },
              {
                icon: '🏖️',
                title: 'Unlimited Vacation',
                description:
                  'We believe you should have a flexible schedule that makes space for family, wellness, and fun.',
              },
              {
                icon: '💼',
                title: 'Skill Development',
                description:
                  'We believe in always learning and leveling up our skills. Whether it\'s a conference or online course.',
              },
              {
                icon: '👥',
                title: 'Team Summits',
                description:
                  'Every 6 months we have a full team summit where we have fun, reflect, and plan for the upcoming quarter.',
              },
              {
                icon: '🏠',
                title: 'Remote Working',
                description:
                  'You know how you perform your best. Work from home, coffee shop or anywhere when you feel like it.',
              },
              {
                icon: '💰',
                title: 'Commuter Benefits',
                description:
                  'We\'re grateful for all the time and energy each team member puts into getting to work every day.',
              },
              {
                icon: '💪',
                title: 'We give back.',
                description:
                  'We anonymously match any donation our employees make (up to $/€ 600) so they can support the organizations they care about most—times two.',
              },
            ].map((perk, idx) => (
              <div key={idx} className="flex gap-4">
                <div className="text-3xl">{perk.icon}</div>
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-1">
                    {perk.title}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{perk.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobDetails;
