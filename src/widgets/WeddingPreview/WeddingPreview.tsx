import { Link } from 'react-router-dom';
import './WeddingPreview.scss';

interface WeddingPreviewProps {
  imageUrl: string;
  coupleName: string;
  concept: string;
  placeTitle: string;
  placeSubtitle: string;
  guests: string;
  team: string;
  budget: string;
  to: string;
}

export const WeddingPreview = ({
  imageUrl,
  coupleName,
  concept,
  placeTitle,
  placeSubtitle,
  guests,
  team,
  budget,
  to,
}: WeddingPreviewProps) => {
  return (
    <section className="wedding-preview">
      <div className="wedding-preview__image-wrapper">
        <img
          src={imageUrl}
          alt={coupleName}
          className="wedding-preview__image"
        />
      </div>

      <div className="wedding-preview__content">
        <h2 className="wedding-preview__title">{coupleName}</h2>
        <p className="wedding-preview__concept">{concept}</p>

        <div className="wedding-preview__info-grid">
          <div className="wedding-preview__info-item">
            <div className="wedding-preview__icon" aria-hidden="true" />
            <div className="wedding-preview__info-text">
              <div className="wedding-preview__info-label">
                Место проведения
              </div>
              <div className="wedding-preview__info-value">
                {placeTitle}
                <br />
                {placeSubtitle}
              </div>
            </div>
          </div>

          <div className="wedding-preview__info-item">
            <div className="wedding-preview__icon" aria-hidden="true" />
            <div className="wedding-preview__info-text">
              <div className="wedding-preview__info-label">
                Количество гостей
              </div>
              <div className="wedding-preview__info-value">{guests}</div>
            </div>
          </div>

          <div className="wedding-preview__info-item">
            <div className="wedding-preview__icon" aria-hidden="true" />
            <div className="wedding-preview__info-text">
              <div className="wedding-preview__info-label">Команда</div>
              <div className="wedding-preview__info-value">{team}</div>
            </div>
          </div>

          <div className="wedding-preview__info-item">
            <div className="wedding-preview__icon" aria-hidden="true" />
            <div className="wedding-preview__info-text">
              <div className="wedding-preview__info-label">Бюджет</div>
              <div className="wedding-preview__info-value">{budget}</div>
            </div>
          </div>
        </div>

        <div className="wedding-preview__actions">
          <Link to={to} className="wedding-preview__button">
            Смотреть свадьбу
          </Link>
        </div>
      </div>
    </section>
  );
};
