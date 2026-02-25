'use client';

const CompanyAbout = () => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg p-8 border border-gray-200 dark:border-gray-700">
      <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Company Profile</h2>
      <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
        Stripe is a technology company that builds economic infrastructure for the internet.
        Businesses of every size—from new startups to public companies—use our software to accept
        payments and manage their businesses online. Our mission is to increase the GDP of the
        internet. We believe that growing the GDP of the internet is a problem rooted in code and
        design, not finance. Stripe is built for developers, makers, and creators. We work on
        solving the hard technical problems necessary to build global economic infrastructure—from
        designing highly reliable systems to developing advanced machine learning algorithms to
        prevent fraud.
      </p>
    </div>
  );
};

export default CompanyAbout;
