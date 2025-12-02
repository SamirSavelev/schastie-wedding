import { HeroSection } from './components/HeroSection/HeroSection';
import { PortfolioSection } from './components/PortfolioSection/PortfolioSection';
import { ServicesSection } from './components/ServicesSection/ServicesSection';
import { VideoSection } from './components/VideoSection/VideoSection';

import './HomePage.scss';

export const HomePage = () => {
  return (
    <div className="home">
      <HeroSection />
      <ServicesSection />
      <VideoSection />
      <PortfolioSection />
    </div>
  );
};
