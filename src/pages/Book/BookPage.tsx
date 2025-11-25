import { useCallback, useEffect, useState } from 'react';
import { Container } from '@shared/ui/Container/Container';
import './BookPage.scss';

// Картинки (подставь свои пути)
import promoHero from '@assets/book/cover-1.png'; // вертикальное фото с девушкой и книгой

import cover1 from '@assets/book/cover-1.png';
import cover2 from '@assets/book/cover-2.png';
import cover3 from '@assets/book/cover-3.png';
import cover4 from '@assets/book/cover-4.png';
import cover5 from '@assets/book/cover-5.jpg';
import cover6 from '@assets/book/cover-6.png';

import spread1 from '@assets/book/spread-1.png';
import spread2 from '@assets/book/spread-2.png';
import spread3 from '@assets/book/spread-3.png';
import spread4 from '@assets/book/spread-4.png';
import spread5 from '@assets/book/spread-5.png';
import spread6 from '@assets/book/spread-6.png';
import spread7 from '@assets/book/spread-7.png';
import { GallerySlider } from '../../components/GallerySlider/GallerySlider';

const covers = [cover1, cover2, cover3, cover4, cover5, cover6];
const spreads = [spread1, spread2, spread3, spread4, spread5, spread6, spread7];

export const BookPage = () => {
  // Лайтбокс для коллажа обложек
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const openLightbox = useCallback((idx: number) => {
    setLightboxIndex(idx);
    setLightboxOpen(true);
    document.body.style.overflow = 'hidden';
  }, []);

  const closeLightbox = useCallback(() => {
    setLightboxOpen(false);
    document.body.style.overflow = '';
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (!lightboxOpen) return;
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowRight')
        setLightboxIndex((i) => (i + 1) % covers.length);
      if (e.key === 'ArrowLeft')
        setLightboxIndex((i) => (i - 1 + covers.length) % covers.length);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [lightboxOpen, closeLightbox]);

  const handleOrder = () => {
    const to = 'schastie.kazan@gmail.com';
    const subject = 'Заказ книги «Я — невеста»';
    const body = `Здравствуйте! Хочу заказать книгу «Я — невеста».
Имя: 
Телефон:
Промокод: #ЯНЕВЕСТА_2020
Комментарий: `;

    window.location.href = `mailto:${to}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
  };

  return (
    <section className="book">
      <Container>
        <h1 className="book__title">Книга</h1>
        <p className="book__lead">
          Свадебный планер «Я — невеста» — лёгкий, вдохновляющий и практичный
          помощник для самостоятельной подготовки свадьбы.
        </p>

        {/* Промо-блок — единая ширина, одно вертикальное фото */}
        <div className="book__promo" role="region" aria-label="Промо">
          <div className="book__promo-content">
            <div className="book__badge">-20% до 1&nbsp;апреля</div>
            <h2 className="book__promo-title">
              СВАДЕБНЫЙ ПЛАНЕР «Я — невеста»
            </h2>
            <p className="book__promo-text">
              Здравствуй, счастливая невеста! Поздравляем тебя с новым статусом
              и красивым семейным будущим! Впереди приятная подготовка к свадьбе
              — и если ты в поисках надёжного помощника, ты его нашла.
            </p>

            <div className="book__price">
              <span className="book__price-current">1&nbsp;900&nbsp;₽</span>
              <span className="book__price-old" aria-label="старая цена">
                2&nbsp;400&nbsp;₽
              </span>
            </div>

            <div className="book__promo-row">
              <span className="book__promo-label">Промокод:</span>
              <code className="book__promo-code">#ЯНЕВЕСТА_2020</code>
            </div>

            <p className="book__delivery">
              Доставка по России — бесплатно, ежедневно.
            </p>

            <div className="book__cta">
              <button className="book__btn" onClick={handleOrder}>
                Заказать книгу
              </button>
              <a className="book__btn-secondary" href="#book-details">
                Подробнее о книге
              </a>
            </div>
          </div>

          <div className="book__promo-hero" aria-hidden="true">
            <img src={promoHero} alt="" loading="lazy" />
          </div>
        </div>

        {/* Текст — без ужимания ширины, как и промо/галереи */}
        <div id="book-details" className="book__content">
          <p>
            Свадебный планер «Я — невеста» в лёгкой и захватывающей форме
            раскроет главные секреты и важные детали организации праздника
            мечты!
          </p>

          <ul className="book__features">
            <li>Структурированный план работы и ключевая информация.</li>
            <li>
              Детальный разбор: ресторан, ведущий, фотограф, оператор,
              декоратор, стилист, кондитер и др. — что спросить и как работать
              дальше.
            </li>
            <li>
              Профессиональные советы автора (8+ лет опыта свадеб европейского
              формата).
            </li>
            <li>Готовые схемы, сметы, таблицы — экономят время и бюджет.</li>
            <li>Сценарий и тайминг свадебного дня.</li>
            <li>
              Вдохновение и любовь — с первой страницы. У вас всё получится!
            </li>
          </ul>

          <p>
            «Я — невеста» — первый в России планер для молодожёнов, который
            влюбляет с первого взгляда и вдохновляет на создание атмосферного,
            незабываемого торжества. Подходит и начинающим организаторам.
          </p>
        </div>

        {/* Коллаж обложек — 2 ряда, с лайтбоксом */}
        <div className="book__covers">
          <h3 className="book__section-title">Обложки</h3>
          <div className="book__covers-grid">
            {covers.map((src, i) => (
              <button
                key={i}
                className="book__cover-tile"
                type="button"
                onClick={() => openLightbox(i)}
                aria-label={`Открыть изображение ${i + 1} полноэкранно`}
              >
                <img src={src} alt={`Обложка ${i + 1}`} loading="lazy" />
              </button>
            ))}
          </div>
        </div>

        {/* Развороты — слайдер на Swiper, принимает набор фото */}
        <div className="book__spreads">
          <GallerySlider images={spreads} title="Развороты" effect="fade" />
        </div>

        {/* Нижний CTA */}
        <div className="book__bottom-cta">
          <h3 className="book__bottom-title">
            Готовы начать подготовку мечты?
          </h3>
          <p className="book__bottom-text">
            Оформите заказ — и уже сегодня получите вдохновение и понятный план
            действий.
          </p>
          <button className="book__btn" onClick={handleOrder}>
            Заказать книгу
          </button>
        </div>
      </Container>

      {/* Лайтбокс */}
      {lightboxOpen && (
        <div
          className="lightbox"
          role="dialog"
          aria-modal="true"
          onClick={closeLightbox}
        >
          <button
            className="lightbox__close"
            onClick={closeLightbox}
            aria-label="Закрыть"
          >
            ✕
          </button>
          <button
            className="lightbox__nav lightbox__nav--prev"
            onClick={(e) => {
              e.stopPropagation();
              setLightboxIndex((i) => (i - 1 + covers.length) % covers.length);
            }}
            aria-label="Предыдущее"
          >
            ‹
          </button>
          <img
            className="lightbox__image"
            src={covers[lightboxIndex]}
            alt={`Обложка ${lightboxIndex + 1}`}
            onClick={(e) => e.stopPropagation()}
          />
          <button
            className="lightbox__nav lightbox__nav--next"
            onClick={(e) => {
              e.stopPropagation();
              setLightboxIndex((i) => (i + 1) % covers.length);
            }}
            aria-label="Следующее"
          >
            ›
          </button>
        </div>
      )}
    </section>
  );
};
