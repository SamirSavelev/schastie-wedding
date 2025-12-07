import { BannerSection, PageHeader } from '@widgets';
import headerImage from '@assets/services/header.jpg';

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
    <PageHeader
      backgroundImage={headerImage}
      title="Услуги"
      bottomText="Бюджеты"
    />

    <ServicesIntroSection />
    <ServicesChatSection />
    <ServicesPricesSection />
    <ServicesGuaranteesSection />
    <ServicesMagicSection />
    <ImageMarquee />
    <BannerSection />
  </>
);
