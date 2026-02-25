'use client';

const PerksAndBenefits = () => {
  const perks = [
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
        'We anonymously match any donation our employees make so they can support the organizations they care about.',
    },
  ];

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg p-8 border border-gray-200 dark:border-gray-700">
      <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-6">Perks & Benefits</h2>
      <p className="text-gray-600 dark:text-gray-400 mb-6">
        This job comes with several perks and benefits
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {perks.map((perk, idx) => (
          <div key={idx} className="flex gap-4">
            <div className="text-3xl shrink-0">{perk.icon}</div>
            <div>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-1">{perk.title}</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">{perk.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PerksAndBenefits;
