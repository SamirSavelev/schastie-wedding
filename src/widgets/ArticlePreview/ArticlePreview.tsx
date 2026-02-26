import { Link } from "react-router-dom";
import type { FC } from "react";

import { Text } from "@shared/ui";
import type { ArticlePreviewInterface } from "@pages/Blog/constants";

import "./ArticlePreview.scss";

export const ArticlePreview: FC<ArticlePreviewInterface> = ({
  imageUrl,
  title,
  to,
}) => (
  <article className="article-preview">
    <Link
      to={to}
      target="_blank"
      rel="noopener noreferrer"
      className="article-preview__link"
    >
      <div className="article-preview__image-wrapper">
        <img src={imageUrl} alt={title} className="article-preview__image" />
      </div>
      <Text variant="body2" align="center" className="article-preview__title">
        {title}
      </Text>
    </Link>
  </article>
);
