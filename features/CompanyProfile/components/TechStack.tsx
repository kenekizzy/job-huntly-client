'use client';

const TechStack = () => {
  const technologies = [
    { name: 'HTML 5', icon: '🌐', color: 'bg-orange-100 dark:bg-orange-900/20 text-orange-600' },
    { name: 'CSS 3', icon: '🎨', color: 'bg-blue-100 dark:bg-blue-900/20 text-blue-600' },
    { name: 'JavaScript', icon: '⚡', color: 'bg-yellow-100 dark:bg-yellow-900/20 text-yellow-600' },
    { name: 'Ruby', icon: '💎', color: 'bg-red-100 dark:bg-red-900/20 text-red-600' },
    { name: 'Mixpanel', icon: '📊', color: 'bg-purple-100 dark:bg-purple-900/20 text-purple-600' },
    { name: 'Framer', icon: '🎯', color: 'bg-black text-white' },
  ];

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700">
      <h3 className="font-semibold text-gray-900 dark:text-white mb-4">Tech stack</h3>
      <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
        Learn about the technology and tools that Stripe uses.
      </p>
      <div className="grid grid-cols-3 gap-3">
        {technologies.map((tech) => (
          <div
            key={tech.name}
            className={`${tech.color} rounded-lg p-3 flex flex-col items-center justify-center text-center`}
          >
            <div className="text-2xl mb-1">{tech.icon}</div>
            <div className="text-xs font-medium">{tech.name}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TechStack;
