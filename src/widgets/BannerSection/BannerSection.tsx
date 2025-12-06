import { useState } from 'react';

import InstagramIcon from '@assets/icons/instagram.svg';
import TelegramIcon from '@assets/icons/telegram.svg';
import VkIcon from '@assets/icons/vk.svg';
import WhatsappIcon from '@assets/icons/whatsapp.svg';

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

import { Button, Container, Text, TextField, TypedLine } from '@shared/ui';

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
            <Text
              variant="h3"
              className="home-banner__title"
              color="black"
              weight="regular"
              textTransform="uppercase"
            >
              {HOME_BANNER_TITLE_LINES.map((line) => (
                <span key={line}>{line}</span>
              ))}
            </Text>

            <TypedLine phrases={HOME_BANNER_TYPED_PHRASES} />

            <a href={PHONE_LINK}>
              <Text variant="h3" weight="light" font="helvetica">
                {HOME_BANNER_PHONE}
              </Text>
            </a>

            <a href={HOME_BANNER_EMAIL_LINK}>
              <Text variant="subtitle" weight="light" font="helvetica">
                {HOME_BANNER_EMAIL}
              </Text>
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

          <div className="home-banner__right">
            <Text variant="subtitle">{HOME_BANNER_FORM_TITLE}</Text>
            <form
              className="home-banner__form"
              onSubmit={handleSubmit}
              noValidate
            >
              <TextField
                label="Имя"
                placeholder="Как вас зовут?"
                type="text"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                autoComplete="name"
                required
              />

              <TextField
                label="Телефон"
                placeholder="Введите номер телефона"
                type="tel"
                name="phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                autoComplete="tel"
                required
              />

              <TextField
                label="Email"
                placeholder="Введите адрес электронной почты"
                type="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                autoComplete="email"
                required
              />

              <Button variant="primary" type="submit" size="lg">
                ОТПРАВИТЬ
              </Button>

              <Text variant="caption">{HOME_BANNER_POLICY_TEXT}</Text>
            </form>
          </div>
        </div>
      </Container>
    </section>
  );
};
