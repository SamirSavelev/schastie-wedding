import { BannerSection, PageHeader } from '@widgets';
import headerImage from '@assets/services/header.jpg';
import './ServicesPage.scss';
import {
  ServicesIntroSection,
  ServicesChatSection,
  ServicesPricesSection,
  ServicesGuaranteesSection,
  ImageMarquee,
  ServicesMagicSection,
} from './components';

export const ServicesPage = () => (
  <>
    <div className="ServicesPage">
      <PageHeader
        backgroundImage={headerImage}
        title="Услуги"
        bottomText="Бюджеты"
      />
    </div>

    <ServicesIntroSection />
    <ServicesChatSection />
    <ServicesPricesSection />
    <ServicesGuaranteesSection />
    <ServicesMagicSection />
    <ImageMarquee />
    <BannerSection />
  </>
);
