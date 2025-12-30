import { useParams } from "react-router-dom";
import { ArticleHero } from "@widgets/ArticleHero/ArticleHero";
import { Container } from "@shared/ui/Container/Container";
import { Page404 } from "@pages/Page404/Page404";
import { ImageGridViewer } from "@shared/ui/ImageGridViewer/ImageGridViewer";

import { getWeddingById } from "./constants";
import "./PortfolioWedding.scss";
import { BannerSection } from "@widgets";
import { Helmet } from "react-helmet-async";

export const PortfolioWedding = () => {
  const { id } = useParams<{ id: string }>();

  if (!id) {
    return <Page404 />;
  }

  const wedding = getWeddingById(id);

  if (!wedding) {
    return <Page404 />;
  }

  const { couple, date, heroImage, images } = wedding;

  return (
    <section className="page page--portfolio-wedding">
      <Helmet>
        <title>Портфолио свадеб | Счастье — планирование свадеб в Казани</title>
      </Helmet>
      <ArticleHero
        backgroundImage={heroImage}
        title={couple}
        description={date}
      />

      <div className="portfolio-wedding">
        <Container>
          <div className="portfolio-wedding__gallery">
            <ImageGridViewer images={images} />
          </div>
        </Container>
      </div>
      <BannerSection />
    </section>
  );
};
