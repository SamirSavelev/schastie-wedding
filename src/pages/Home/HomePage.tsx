import { BannerSection } from '@widgets/BannerSection/BannerSection';
import { HeroSection, ServicesSection } from './components';
import { PortfolioSection } from './components/PortfolioSection/PortfolioSection';
import { VideoSection } from './components/VideoSection/VideoSection';
import { WorkProcessSection } from './components/WorkProcessSection/WorkProcessSection';
import { ReviewsSection } from './components/ReviewsSection/ReviewsSection';
import { WhyUsSection } from './components/WhyUsSection/WhyUsSection';
import { NumbersSection } from './components/NumbersSection/NumbersSection';

export const HomePage = () => (
  <>
    <HeroSection />
    <ServicesSection />
    <VideoSection />
    <PortfolioSection />
    <NumbersSection />
    <ReviewsSection />
    <WhyUsSection />
    <WorkProcessSection />
    <BannerSection />
  </>
);
