import { PageHeader, ArticlePreview, BannerSection } from '@widgets';
import { Container } from '@shared/ui';
import { ARTICLES_PREVIEWS } from '@shared/constants';
import headerImage from '@assets/blog/header.jpg';
import './BlogPage.scss';

export const BlogPage = () => (
  <>
    <PageHeader
      backgroundImage={headerImage}
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
