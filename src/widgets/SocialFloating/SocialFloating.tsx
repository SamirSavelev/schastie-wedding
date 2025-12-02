// src/widgets/SocialFloating/SocialFloating.tsx
import { useEffect, useState } from 'react';
import './SocialFloating.scss';
import InstagramIcon from '@assets/icons/instagram.svg';
import TelegramIcon from '@assets/icons/telegram.svg';
import VkIcon from '@assets/icons/vk.svg';
import WhatsappIcon from '@assets/icons/whatsapp.svg';
import PhoneIcon from '@assets/icons/phone.svg';
import messageIcon from '@assets/icons/message.svg';
import closeIcon from '@assets/icons/close.svg';
export const SocialFloating = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [visibleCount, setVisibleCount] = useState(0);

  const networks = [
    {
      key: 'phone',
      classSuffix: 'phone',
      label: 'Позвонить',
      Icon: PhoneIcon,
      onClick: () => {
        console.log('Позвонить');
      },
    },
    {
      key: 'whatsapp',
      classSuffix: 'whatsapp',
      label: 'Написать в WhatsApp',
      Icon: WhatsappIcon,
      onClick: () => {
        console.log('Написать в WhatsApp');
      },
    },
    {
      key: 'telegram',
      classSuffix: 'telegram',
      label: 'Написать в Telegram',
      Icon: TelegramIcon,
      onClick: () => {
        console.log('Написать в Telegram');
      },
    },
    {
      key: 'vk',
      classSuffix: 'vk',
      label: 'Написать во ВКонтакте',
      Icon: VkIcon,
      onClick: () => {
        console.log('Написать во ВКонтакте');
      },
    },
    {
      key: 'instagram',
      classSuffix: 'instagram',
      label: 'Написать в Instagram',
      Icon: InstagramIcon,
      onClick: () => {
        console.log('Написать в Instagram');
      },
    },
  ] as const;

  useEffect(() => {
    const total = networks.length;
    const timeouts: number[] = [];
    const step = 90;

    if (isOpen) {
      for (let i = 0; i <= total; i += 1) {
        const timeout = window.setTimeout(() => {
          setVisibleCount(i);
        }, i * step);
        timeouts.push(timeout);
      }
    } else {
      for (let i = 0; i <= total; i += 1) {
        const timeout = window.setTimeout(() => {
          setVisibleCount(total - i);
        }, i * step);
        timeouts.push(timeout);
      }
    }

    return () => {
      timeouts.forEach((id) => window.clearTimeout(id));
    };
  }, [isOpen, networks.length]);

  const handleToggle = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div
      className={`socials-floating${isOpen ? ' socials-floating--open' : ''}`}
    >
      <div className="socials-floating__row">
        {networks.map(({ key, classSuffix, label, Icon, onClick }, index) => {
          const isVisible = index < visibleCount;

          return (
            <button
              key={key}
              type="button"
              className={
                `socials-floating__item socials-floating__item--${classSuffix}` +
                (isVisible ? ' socials-floating__item--visible' : '')
              }
              aria-label={label}
              onClick={onClick}
            >
              <span className="socials-floating__item-icon">
                <img src={Icon} alt={label} />
              </span>
              <span className="socials-floating__item-tooltip">{label}</span>
            </button>
          );
        })}
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
