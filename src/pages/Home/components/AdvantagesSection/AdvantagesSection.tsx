import { Container } from '@shared/ui/Container/Container';
import {
  HOME_ADVANTAGES_ITEMS,
  HOME_ADVANTAGES_SUBTITLE,
  HOME_ADVANTAGES_TITLE,
} from '@shared/constants';

import './AdvantagesSection.scss';

export const AdvantagesSection = () => {
  const leftItems = HOME_ADVANTAGES_ITEMS.filter((_, index) => index % 2 === 0);
  const rightItems = HOME_ADVANTAGES_ITEMS.filter(
    (_, index) => index % 2 === 1
  );

  const orderMap = new Map(
    HOME_ADVANTAGES_ITEMS.map((item, index) => [item.id, index + 1])
  );

  const renderItem = (id: string) => {
    const item = HOME_ADVANTAGES_ITEMS.find((adv) => adv.id === id);
    if (!item) return null;

    const order = orderMap.get(item.id) ?? 0;
    const themeClass =
      item.theme === 'dark'
        ? ' home-advantages__item--dark'
        : ' home-advantages__item--light';
    const imageClass = item.bgImage ? ' home-advantages__item--with-image' : '';

    return (
      <article
        key={item.id}
        className={`home-advantages__item${themeClass}${imageClass}`}
        style={
          item.bgImage ? { backgroundImage: `url(${item.bgImage})` } : undefined
        }
      >
        <div className="home-advantages__item-inner">
          <h3 className="home-advantages__item-title">
            <span className="home-advantages__item-number">({order})</span>{' '}
            {item.title}
          </h3>
          <div className="home-advantages__item-line" />
          <p className="home-advantages__item-text">{item.text}</p>
        </div>
      </article>
    );
  };

  return (
    <section
      className="home-advantages"
      aria-labelledby="home-advantages-title"
    >
      <Container>
        <header className="home-advantages__header">
          <h2 id="home-advantages-title" className="home-advantages__title">
            {HOME_ADVANTAGES_TITLE}
          </h2>
          <p className="home-advantages__subtitle">
            {HOME_ADVANTAGES_SUBTITLE}
          </p>
        </header>

        <div className="home-advantages__columns">
          <div className="home-advantages__column home-advantages__column--left">
            {leftItems.map((item) => renderItem(item.id))}
          </div>

          <div className="home-advantages__column home-advantages__column--right">
            {rightItems.map((item) => renderItem(item.id))}
          </div>
        </div>
      </Container>
    </section>
  );
};
