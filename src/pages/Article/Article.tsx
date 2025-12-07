import { useParams } from 'react-router-dom';
import { ArticleHero } from '@widgets/ArticleHero/ArticleHero';

import { Page404 } from '@pages/Page404/Page404';

import { getArticleById } from './constants';
import './Article.scss';

export const Article = () => {
  const { id } = useParams<{ id: string }>();

  if (!id) {
    return <Page404 />;
  }

  const article = getArticleById(id);

  if (!article) {
    return <Page404 />;
  }

  const { title, description, heroImage, Component } = article;

  return (
    <section className={`page page--article page--article-${article.id}`}>
      <ArticleHero
        backgroundImage={heroImage}
        title={title}
        description={description}
      />
      <Component />
    </section>
  );
};
