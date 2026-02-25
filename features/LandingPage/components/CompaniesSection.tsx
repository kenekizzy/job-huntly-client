'use client';

  const CompaniesSection = () => {
    const companies = [
      { name: 'Flutterwave', logo: 'flutterwave' },
      { name: 'Paystack', logo: 'paystack' },
      { name: 'Interswitch', logo: 'interswitch' },
      { name: 'Andela', logo: 'andela' },
      { name: 'Kuda', logo: 'kuda' },
    ];

    return (
      <section className="py-12 bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Title */}
          <p className="text-center text-gray-500 text-sm mb-8">Companies we helped grow</p>

          {/* Companies Logos */}
          <div className="flex flex-wrap items-center justify-center gap-12 md:gap-16">
            {companies.map((company) => (
              <div
                key={company.name}
                className="text-gray-400 hover:text-gray-600 transition-colors cursor-pointer"
              >
                <span className="text-3xl font-bold tracking-wider">{company.name.toUpperCase()}</span>
              </div>
            ))}
          </div>
      </div>
      </section>
    );
  };

  export default CompaniesSection;
