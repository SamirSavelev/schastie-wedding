import './PageHeader.scss';

interface Props {
  backgroundImage: string;
  title: string;
  bottomText: string;
  onCtaClick?: () => void;
}

export const PageHeader = ({
  backgroundImage,
  title,
  bottomText,
  onCtaClick,
}: Props) => {
  return (
    <div
      className="page-header"
      role="banner"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="page-header__overlay" />

      <div className="page-header__content">
        <h1 className="page-header__title">{title}</h1>

        <button
          className="page-header__cta-button"
          type="button"
          onClick={onCtaClick}
        >
          Записаться на встречу
        </button>
      </div>

      <div className="page-header__circle">
        <span className="page-header__circle-text">{bottomText}</span>
      </div>
    </div>
  );
};
