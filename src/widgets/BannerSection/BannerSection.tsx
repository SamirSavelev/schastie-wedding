import { useState } from 'react';
import { Container } from '@shared/ui/Container/Container';
import { TypedLine } from '@shared/ui/TypedLine/TypedLine';
import {
  HOME_BANNER_EMAIL,
  HOME_BANNER_EMAIL_LINK,
  HOME_BANNER_FORM_TITLE,
  HOME_BANNER_PHONE,
  PHONE_LINK,
  HOME_BANNER_POLICY_TEXT,
  HOME_BANNER_TITLE_LINES,
  HOME_BANNER_TYPED_PHRASES,
} from '@shared/constants';

import InstagramIcon from '@assets/icons/instagram.svg';
import TelegramIcon from '@assets/icons/telegram.svg';
import VkIcon from '@assets/icons/vk.svg';
import WhatsappIcon from '@assets/icons/whatsapp.svg';

import './BannerSection.scss';

export const BannerSection = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();

    const to = HOME_BANNER_EMAIL;
    const subject = `Заявка с главного баннера: ${name || 'без имени'}`;
    const body =
      `Имя: ${name}\n` +
      `Телефон: ${phone}\n` +
      `Email: ${email}\n\n` +
      'Источник: главный баннер сайта';

    window.location.href = `mailto:${to}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
  };

  return (
    <section className="home-banner" aria-labelledby="home-banner-title">
      <Container>
        <div className="home-banner__grid">
          <div className="home-banner__left">
            <h2 id="home-banner-title" className="home-banner__title">
              {HOME_BANNER_TITLE_LINES.map((line) => (
                <span key={line}>{line}</span>
              ))}
            </h2>

            <TypedLine
              phrases={HOME_BANNER_TYPED_PHRASES}
              className="home-banner__typed-line"
            />

            <a href={PHONE_LINK} className="home-banner__phone">
              {HOME_BANNER_PHONE}
            </a>

            <a href={HOME_BANNER_EMAIL_LINK} className="home-banner__email">
              {HOME_BANNER_EMAIL}
            </a>

            <div className="home-banner__socials" aria-label="Социальные сети">
              <a
                className="home-banner__social home-banner__social--instagram"
                href="#"
                aria-label="Instagram"
              >
                <img src={InstagramIcon} alt="Instagram" />
              </a>
              <a
                className="home-banner__social home-banner__social--telegram"
                href="#"
                aria-label="Telegram"
              >
                <img src={TelegramIcon} alt="Telegram" />
              </a>
              <a
                className="home-banner__social home-banner__social--vk"
                href="#"
                aria-label="VK"
              >
                <img src={VkIcon} alt="VK" />
              </a>
              <a
                className="home-banner__social home-banner__social--whatsapp"
                href="#"
                aria-label="WhatsApp"
              >
                <img src={WhatsappIcon} alt="WhatsApp" />
              </a>
            </div>
          </div>

          {/* Правая колонка – форма */}
          <div className="home-banner__right">
            <h3 className="home-banner__form-title">
              {HOME_BANNER_FORM_TITLE}
            </h3>

            <form
              className="home-banner__form"
              onSubmit={handleSubmit}
              noValidate
            >
              <label className="home-banner__field">
                <span className="home-banner__field-label">Как вас зовут?</span>
                <input
                  className="home-banner__input"
                  type="text"
                  name="name"
                  placeholder="Как вас зовут?*"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  autoComplete="name"
                  required
                />
              </label>

              <label className="home-banner__field">
                <span className="home-banner__field-label">
                  Ваш номер телефона
                </span>
                <input
                  className="home-banner__input"
                  type="tel"
                  name="phone"
                  placeholder="Ваш номер телефона*"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  autoComplete="tel"
                  required
                />
              </label>

              <label className="home-banner__field">
                <span className="home-banner__field-label">Ваш Email</span>
                <input
                  className="home-banner__input"
                  type="email"
                  name="email"
                  placeholder="Ваш Email*"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  autoComplete="email"
                  required
                />
              </label>

              <p className="home-banner__required-note">
                * — поле, обязательное для заполнения
              </p>

              <button className="home-banner__submit" type="submit">
                ОТПРАВИТЬ
              </button>

              <p className="home-banner__policy">{HOME_BANNER_POLICY_TEXT}</p>
            </form>
          </div>
        </div>
      </Container>
    </section>
  );
};
