import { BannerSection, PageHeader } from "@widgets";
import headerImageMobile from "@assets/services/header-1280.webp";
import headerImageDesktop from "@assets/services/header-2400.webp";

import "./ServicesPage.scss";
import {
  ServicesIntroSection,
  ServicesChatSection,
  ServicesGuaranteesSection,
  ImageMarquee,
  ServicesMagicSection,
} from "./components";
import { Helmet } from "react-helmet-async";

export const ServicesPage = () => (
  <>
    <Helmet>
      <title>Услуги | Счастье — планирование свадеб свадеб в Казани</title>
    </Helmet>
    <div className="ServicesPage">
      <PageHeader
        backgroundDesktop={headerImageDesktop}
        backgroundMobile={headerImageMobile}
        title="Услуги"
        bottomText="Бюджеты"
        noScale
      />
    </div>

    <ServicesIntroSection />
    <ServicesChatSection />
    <ServicesGuaranteesSection />
    <ServicesMagicSection />

    <ImageMarquee />
    <BannerSection />
  </>
);
