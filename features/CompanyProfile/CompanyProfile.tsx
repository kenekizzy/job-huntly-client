'use client';

import CompanyHeader from './components/CompanyHeader';
import CompanyAbout from './components/CompanyAbout';
import TechStack from './components/TechStack';
import Contact from './components/Contact';
import OfficeLocation from './components/OfficeLocation';
import Team from './components/Team';
import PerksAndBenefits from './components/PerksAndBenefits';
import OpenJobs from './components/OpenJobs';

interface CompanyProfileProps {
  companyId: string;
}

const CompanyProfile = ({ companyId }: CompanyProfileProps) => {
  // TODO: Fetch company data based on companyId
  console.log('Company ID:', companyId);

  return (
    <div className="bg-gray-50 dark:bg-gray-900 min-h-screen py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <CompanyHeader />
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            <CompanyAbout />
            <Contact />
            <Team />
            <PerksAndBenefits />
            <OpenJobs />
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1 space-y-6">
            <TechStack />
            <OfficeLocation />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompanyProfile;
