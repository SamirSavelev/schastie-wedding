import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";

import { ArticleHero } from "@widgets/ArticleHero/ArticleHero";
import { Container } from "@shared/ui/Container/Container";
import { Page404 } from "@pages/Page404/Page404";
import { ImageGridViewer } from "@shared/ui/ImageGridViewer/ImageGridViewer";
import { BannerSection } from "@widgets";

import { getWeddingById } from "./constants";
import "./PortfolioWedding.scss";

export const PortfolioWedding = () => {
  const { id } = useParams<{ id: string }>();

  if (!id) {
    return <Page404 />;
  }

  const wedding = getWeddingById(id);

  if (!wedding) {
    return <Page404 />;
  }

  const { couple, date, heroImage, heroImageWebp, images } = wedding;

  return (
    <section className="page page--portfolio-wedding">
      <Helmet>
        <title>{`${couple} — портфолио | Счастье — планирование свадеб в Казани`}</title>
      </Helmet>

      <ArticleHero
        backgroundImage={heroImage}
        backgroundImageWebp={
          heroImageWebp ? { ...heroImageWebp, sizes: "100vw" } : undefined
        }
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
