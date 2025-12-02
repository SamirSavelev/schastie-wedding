import { Link } from 'react-router-dom';
import './ArticlePreview.scss';

interface ArticlePreviewProps {
  imageUrl: string;
  title: string;
  to: string;
}

export const ArticlePreview = ({
  imageUrl,
  title,
  to,
}: ArticlePreviewProps) => {
  return (
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
        <h2 className="article-preview__title">{title}</h2>
      </Link>
    </article>
  );
};
