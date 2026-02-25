import HeroSection from './components/HeroSection';
import CompaniesSection from './components/CompaniesSection';
import ExploreCategorySection from './components/ExploreCategorySection';
import FeaturedJobsSection from './components/FeaturedJobsSection';
import LatestJobsSection from './components/LatestJobsSection';

const LandingPage = () => {
  return (
    <div>
      <HeroSection />
      <CompaniesSection />
      <ExploreCategorySection />
      <FeaturedJobsSection />
      <LatestJobsSection />
    </div>
  );
};

export default LandingPage;