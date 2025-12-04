// src/pages/Services/ServicesPage.tsx
import { PageHeader } from '@widgets/PageHeader/PageHeader';
import headerImage from '@assets/services/header.jpg';

import { ServicesIntroSection } from './components/ServicesIntroSection/ServicesIntroSection';

import './ServicesPage.scss';
import { ServicesChatSection } from './components/ServicesChatSection/ServicesChatSection';
import { ServicesPricesSection } from './components/ServicesPricesSection/ServicesPricesSection';
// import { ServicesMagicSection } from './components/ServicesMagicSection/ServicesMagicSection';

export function ServicesPage() {
  return (
    <section className="page">
      <PageHeader
        backgroundImage={headerImage}
        title="Услуги"
        bottomText="Бюджеты"
        onCtaClick={() => console.log('Записаться')}
      />

      <ServicesIntroSection />
      <ServicesChatSection />
      <ServicesPricesSection />
      {/* <ServicesMagicSection /> */}
    </section>
  );
}
