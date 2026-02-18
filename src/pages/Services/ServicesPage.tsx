import { BannerSection, PageHeader } from "@widgets";
import headerImage from "@assets/services/header.jpg";
import "./ServicesPage.scss";
import {
  ServicesIntroSection,
  ServicesChatSection,
  // ServicesPricesSection,
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
        backgroundImage={headerImage}
        title="Услуги"
        bottomText="Бюджеты"
      />
    </div>

    <ServicesIntroSection />
    <ServicesChatSection />
    {/* <ServicesPricesSection /> */}
    <ServicesGuaranteesSection />
    <ServicesMagicSection />
    <ImageMarquee />
    <BannerSection />
  </>
);
