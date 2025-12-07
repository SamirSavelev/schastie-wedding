import type { ComponentType } from 'react';
import articleOrgHeroImage from '../Articles/ArticleOrg/images/2.webp';
import { ArticleOrg } from '@pages/Articles';

export type ArticleId = 'svadebnyy-organizator-i-koordinator';

export interface ArticleConfig {
  id: ArticleId;
  title: string;
  description: string;
  heroImage: string;
  Component: ComponentType;
}

export const ARTICLES: ArticleConfig[] = [
  {
    id: 'svadebnyy-organizator-i-koordinator',
    title: 'Свадебный организатор и координатор. В чём отличия?',
    description:
      'Что делает свадебный организатор, а что — координатор, и зачем они нужны на вашей свадьбе',
    heroImage: articleOrgHeroImage,
    Component: ArticleOrg,
  },
];

const articlesMap: Record<string, ArticleConfig> = ARTICLES.reduce(
  (acc, article) => {
    acc[article.id] = article;
    return acc;
  },
  {} as Record<string, ArticleConfig>
);

export function getArticleById(id: string): ArticleConfig | undefined {
  return articlesMap[id];
}
