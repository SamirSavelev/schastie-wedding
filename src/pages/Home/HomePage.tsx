import { BannerSection } from "@widgets";
import {
  HeroSection,
  ServicesSection,
  VideoSection,
  PortfolioSection,
  NumbersSection,
  ReviewsSection,
  WorkProcessSection,
  WhyUsSection,
} from "./components";
import { Helmet } from "react-helmet-async";

export const HomePage = () => (
  <>
    <Helmet>
      <title>
        Счастье — планирование свадеб | Организация и планирование свадеб в
        Казани
      </title>
    </Helmet>
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
