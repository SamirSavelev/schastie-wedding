import { useEffect, useState } from 'react';
import { NETWORKS } from '@shared/constants';
import messageIcon from '@assets/icons/message.svg';
import closeIcon from '@assets/icons/close.svg';

import './SocialFloating.scss';

export const SocialFloating = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [visibleCount, setVisibleCount] = useState(0);

  useEffect(() => {
    const total = NETWORKS.length;
    const timeouts: number[] = [];
    const step = 90;

    if (isOpen) {
      for (let i = 0; i <= total; i += 1) {
        const timeout = setTimeout(() => {
          setVisibleCount(i);
        }, i * step);
        timeouts.push(timeout);
      }
    } else {
      for (let i = 0; i <= total; i += 1) {
        const timeout = setTimeout(() => {
          setVisibleCount(total - i);
        }, i * step);
        timeouts.push(timeout);
      }
    }

    return () => {
      timeouts.forEach((id) => clearTimeout(id));
    };
  }, [isOpen]);

  const handleToggle = () => setIsOpen((prev) => !prev);

  return (
    <div
      className={`socials-floating${isOpen ? ' socials-floating--open' : ''}`}
    >
      <div className="socials-floating__row">
        {NETWORKS.map(({ key, classSuffix, label, Icon, onClick }, index) => (
          <button
            key={key}
            type="button"
            className={
              `socials-floating__item socials-floating__item--${classSuffix}` +
              (index < visibleCount ? ' socials-floating__item--visible' : '')
            }
            aria-label={label}
            onClick={onClick}
          >
            <span className="socials-floating__item-icon">
              <img src={Icon} alt={label} />
            </span>
            <span className="socials-floating__item-tooltip">{label}</span>
          </button>
        ))}
      </div>

      <button
        type="button"
        className="socials-floating__toggle"
        onClick={handleToggle}
        aria-label={isOpen ? 'Закрыть контакты' : 'Написать нам'}
        aria-expanded={isOpen}
      >
        <div className="socials-floating__icon">
          <span className="socials-floating__icon-circle">
            <img src={isOpen ? closeIcon : messageIcon} alt="Написать нам" />
          </span>
        </div>

        <div className="socials-floating__tooltip">
          {isOpen ? 'Закрыть' : 'Социальные сети'}
        </div>
      </button>
    </div>
  );
};
