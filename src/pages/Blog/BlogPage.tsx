import { PageHeader, ArticlePreview, BannerSection } from "@widgets";
import { Container } from "@shared/ui";
import headerImage from "@assets/blog/header.jpg";
import "./BlogPage.scss";
import { Helmet } from "react-helmet-async";
import { ARTICLES_PREVIEWS } from "./constants";

export const BlogPage = () => (
  <>
    <Helmet>
      <title>Блог | Счастье — планирование свадеб в Казани</title>
    </Helmet>
    <PageHeader
      backgroundDesktop={headerImage}
      backgroundMobile={headerImage}
      title="Блог"
      bottomText="Полезные статьи о свадьбах и подготовке"
    />

    <Container>
      <div className="blog-list">
        <div className="blog-list__grid">
          {ARTICLES_PREVIEWS.map((article) => (
            <ArticlePreview key={article.id} {...article} />
          ))}
        </div>
      </div>
    </Container>
    <BannerSection />
  </>
);
