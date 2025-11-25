import { useState } from 'react';
import { Container } from '@shared/ui/Container/Container';
import InstagramIcon from '@assets/icons/instagram.svg';
import TelegramIcon from '@assets/icons/telegram.svg';
import VkIcon from '@assets/icons/vk.svg';
import WhatsappIcon from '@assets/icons/whatsapp.svg';

import './ContactsPage.scss';

export const ContactsPage = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();

    const to = 'schastie.kazan@gmail.com';
    const subject = `Заявка с сайта: ${name || 'без имени'}`;
    const body =
      `Имя: ${name}\n` + `Телефон: ${phone}\n\n` + `Сообщение:\n${message}`;

    window.location.href = `mailto:${to}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
  };

  return (
    <section className="contacts" aria-labelledby="contacts-title">
      <Container>
        <h1 id="contacts-title" className="contacts__title">
          Контакты
        </h1>
        <p className="contacts__lead">
          Мы всегда открыты для общения и готовы помочь вам организовать
          праздник вашей мечты.
        </p>

        <div className="contacts__grid">
          {/* Форма */}
          <div className="contacts__card">
            <h3 className="contacts__subtitle">Напишите нам</h3>

            <form className="contacts__form" onSubmit={handleSubmit} noValidate>
              <label className="contacts__field">
                <span className="contacts__label">Имя</span>
                <input
                  className="contacts__input"
                  type="text"
                  name="name"
                  placeholder="Ваше имя"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  autoComplete="name"
                  required
                />
              </label>

              <label className="contacts__field">
                <span className="contacts__label">Контактный телефон</span>
                <input
                  className="contacts__input"
                  type="tel"
                  name="phone"
                  placeholder="+7 (___) ___-__-__"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  autoComplete="tel"
                  required
                />
              </label>

              <label className="contacts__field">
                <span className="contacts__label">Сообщение</span>
                <textarea
                  className="contacts__textarea"
                  name="message"
                  placeholder="Кратко опишите задачу"
                  rows={6}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                />
              </label>

              <button className="contacts__submit" type="submit">
                Отправить
              </button>
            </form>
          </div>

          {/* Контакты */}
          <div className="contacts__card contacts__info">
            <h3 className="contacts__subtitle">Наши контакты</h3>

            <ul className="contacts__list">
              <li>
                <span className="contacts__item-title">Тел.:</span>
                <a href="tel:+79372899055" className="contacts__link">
                  8 (937) 289-90-55
                </a>
                <span className="contacts__dot"> • </span>
                <a href="tel:+79376260255" className="contacts__link">
                  8 (937) 626-02-55
                </a>
              </li>
              <li>
                <span className="contacts__item-title">Город:</span>
                <span className="contacts__text">г. Казань</span>
              </li>
              <li>
                <span className="contacts__item-title">Время работы:</span>
                <span className="contacts__text">24 часа</span>
              </li>
              <li>
                <span className="contacts__item-title">Почта:</span>
                <a
                  href="mailto:schastie.kazan@gmail.com"
                  className="contacts__link"
                >
                  schastie.kazan@gmail.com
                </a>
              </li>
            </ul>

            <div className="contacts__socials" aria-label="Социальные сети">
              <a className="contacts__social" href="#" aria-label="Instagram">
                <img src={InstagramIcon} alt="Instagram" />
              </a>
              <a className="contacts__social" href="#" aria-label="Telegram">
                <img src={TelegramIcon} alt="Telegram" />
              </a>
              <a className="contacts__social" href="#" aria-label="VK">
                <img src={VkIcon} alt="VK" />
              </a>
              <a className="contacts__social" href="#" aria-label="WhatsApp">
                <img src={WhatsappIcon} alt="WhatsApp" />
              </a>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
