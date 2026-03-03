import portfolioHome1_360 from "@assets/portfolio/home/1-360.webp";
import portfolioHome1_720 from "@assets/portfolio/home/1-720.webp";
import portfolioHome1_1600 from "@assets/portfolio/home/1-1600.webp";

import portfolioHome2_360 from "@assets/portfolio/home/2-360.webp";
import portfolioHome2_720 from "@assets/portfolio/home/2-720.webp";
import portfolioHome2_1600 from "@assets/portfolio/home/2-1600.webp";

import portfolioHome3_360 from "@assets/portfolio/home/3-360.webp";
import portfolioHome3_720 from "@assets/portfolio/home/3-720.webp";
import portfolioHome3_1600 from "@assets/portfolio/home/3-1600.webp";

//нейтральные фоны
import bg1 from "@assets/backgrounds/1-360.webp";

import review1_360 from "@assets/reviews/home/1-360.webp";
import review1_720 from "@assets/reviews/home/1-720.webp";
import review1_1600 from "@assets/reviews/home/1-1600.webp";

import review2_360 from "@assets/reviews/home/2-360.webp";
import review2_720 from "@assets/reviews/home/2-720.webp";
import review2_1600 from "@assets/reviews/home/2-1600.webp";

import review3_360 from "@assets/reviews/home/3-360.webp";
import review3_720 from "@assets/reviews/home/3-720.webp";
import review3_1600 from "@assets/reviews/home/3-1600.webp";

import review4_360 from "@assets/reviews/home/4-360.webp";
import review4_720 from "@assets/reviews/home/4-720.webp";
import review4_1600 from "@assets/reviews/home/4-1600.webp";

import review5_360 from "@assets/reviews/home/5-360.webp";
import review5_720 from "@assets/reviews/home/5-720.webp";
import review5_1600 from "@assets/reviews/home/5-1600.webp";

import InstagramIcon from "@assets/icons/instagram.svg";
import TelegramIcon from "@assets/icons/telegram.svg";
import VkIcon from "@assets/icons/vk.svg";
import WhatsappIcon from "@assets/icons/whatsapp.svg";
import PhoneIcon from "@assets/icons/phone.svg";

import type { ReactNode } from "react";
export type ResponsiveImage = {
  src: string;
  srcSet: string;
  sizes: string;
  alt?: string;
};

const toSrcSet = (sources: Array<{ src: string; w: number }>) =>
  sources.map((s) => `${s.src} ${s.w}w`).join(", ");
// ССЫЛКИ НА СВЯЗЬ
export const PHONE_LINK = "tel:+79372899055"; // телефонный номер для звонка
export const WHATSAPP_LINK = "https://wa.me/89376260255"; // ссылка для WhatsApp
export const TELEGRAM_LINK = "https://t.me/Lyudmila_vs"; // ссылка для Telegram
export const VK_LINK = "https://vk.com/schastie_kazan"; // ссылка для ВКонтакте
export const INSTAGRAM_LINK = "https://instagram.com/schastie_wedding"; // ссылка для Instagram

export const HOME_SERVICES_TITLE_LINES: string[] = [
  "Мы создаём свадьбы",
  "для счастливых пар",
]; // Заголовок для второй секции на главной странице

export const HOME_SERVICES_MAIN_TEXT =
  "Мы создаём атмосферные свадьбы для счастливых пар — и делаем это с любовью уже с 2016 года. Наше агентство выросло из простой мечты: чтобы каждая пара прожила свой день легко, спокойно и красиво. Мы внимательны к вашим желаниям, умеем услышать самое важное и превращаем идеи в живую историю, наполненную эмоциями и эстетикой. Для нас свадьба — не проект, а уникальная вселенная двух людей, которую мы бережно собираем по деталям. Вы мечтаете — мы организуем. Просто, качественно и по-настоящему.";

export interface HomeServiceItem {
  id: string;
  title: string;
  text: string;
  wide?: boolean;
}

export const HOME_SERVICES_ITEMS: HomeServiceItem[] = [
  {
    id: "decor-floristics",
    title: "Свадебный декор и флористика",
    text: "Индивидуальная концепция оформления создаст неповторимую атмосферу, полную гармонии и тонкой эстетики.",
  },
  {
    id: "photo-video",
    title: "Фотограф и видеограф",
    text: "Ни один момент вашей свадьбы не останется упущенным. Прекрасные кадры вашего торжества навсегда останутся запечатлёнными.",
  },
  {
    id: "catering-restaurant",
    title: "Кейтеринг и ресторан",
    text: "Чтобы всё прошло со вкусом и без заминок, мы тщательно продумываем план подачи блюд и их состав, грамотно распределяем зоны обслуживания.",
  },
  {
    id: "host-light-sound-show-cake",
    title: "Ведущий, свет, звук, шоу-программа, торт",
    text: "Опираясь на наш опыт, мы подберём для вас профессиональную команду, которая превратит ваше торжество в запоминающееся событие.",
  },
  {
    id: "unique-concept",
    title: "Уникальная концепция свадьбы",
    text: "Каждая свадьба — персональная история. Мы чутко ловим эмоции и характер пары, отражаем их в каждой детали торжества — от сценария до финального аккорда вечера.",
  },
  {
    id: "offsite-ceremony",
    title: "Выездная регистрация",
    text: "Трогательная и торжественная церемония регистрации в самых красивых локациях станет незабываемой.",
  },
]; // Элементы для второй секции на главной странице

export const HOME_VIDEO_URL = "https://player.vimeo.com/video/208475678"; // Видео на главной странице

export const HOME_PORTFOLIO_SUBTITLE =
  "Рассказы о наших свадьбах в виде подробных кейсов";

export type HomePortfolioItem = {
  id: number;
  title: string;
  tagline: string;
  linkId: string;
  image: ResponsiveImage;
};

const PORTFOLIO_CARD_SIZES =
  "(max-width: 600px) 92vw, (max-width: 1024px) 44vw, 30vw";

export const HOME_PORTFOLIO_ITEMS: HomePortfolioItem[] = [
  {
    id: 2,
    title: "Алия и Ильнур",
    tagline: "«Любовь в большом городе»",
    linkId: "ilnur-i-aliya",
    image: {
      src: portfolioHome2_720,
      srcSet: toSrcSet([
        { src: portfolioHome2_360, w: 360 },
        { src: portfolioHome2_720, w: 720 },
        { src: portfolioHome2_1600, w: 1600 },
      ]),
      sizes: PORTFOLIO_CARD_SIZES,
      alt: "Алия и Ильнур",
    },
  },
  {
    id: 1,
    title: "Марат и Мария",
    tagline: "«Магия любви – начало легенды»",
    linkId: "marat-i-maria",
    image: {
      src: portfolioHome1_720,
      srcSet: toSrcSet([
        { src: portfolioHome1_360, w: 360 },
        { src: portfolioHome1_720, w: 720 },
        { src: portfolioHome1_1600, w: 1600 },
      ]),
      sizes: PORTFOLIO_CARD_SIZES,
      alt: "Марат и Мария",
    },
  },
  {
    id: 3,
    title: "Иван и Этерика",
    tagline: "«Timeless Ceremony»",
    linkId: "",
    image: {
      src: portfolioHome3_720,
      srcSet: toSrcSet([
        { src: portfolioHome3_360, w: 360 },
        { src: portfolioHome3_720, w: 720 },
        { src: portfolioHome3_1600, w: 1600 },
      ]),
      sizes: PORTFOLIO_CARD_SIZES,
      alt: "Иван и Этерика",
    },
  },
];
export const BG_1 = bg1;
export const HOME_BANNER_TITLE_LINES: string[] = ["Планируете", "свадьбу?"];

export const HOME_BANNER_TYPED_PHRASES: string[] = [
  "подписать договор",
  "забронировать дату",
  "договориться о встрече",
];

export const HOME_BANNER_PHONE = "+7 (937) 289-90-55";

export const HOME_BANNER_EMAIL = "schastie.kazan@gmail.com";
export const HOME_BANNER_EMAIL_LINK = `mailto:${HOME_BANNER_EMAIL}`;

export const HOME_BANNER_FORM_TITLE =
  "Оставьте свои контакты и мы свяжемся с вами в ближайшее время, чтобы ответить на все вопросы";

export const HOME_BANNER_POLICY_TEXT =
  "Нажимая на кнопку, вы соглашаетесь с политикой в отношении обработки персональных данных.";

export interface HomeWorkStep {
  id: string;
  title: string;
  text: string;
}

export const HOME_WORK_TITLE = "Как мы работаем";
export const HOME_WORK_SUBTITLE = "10 шагов организации свадьбы «под ключ»";

export const HOME_WORK_STEPS: HomeWorkStep[] = [
  {
    id: "first-meeting",
    title: "Первая встреча",
    text: `Первая встреча: знакомство и цифры
Расскажем, как мы работаем, какие есть форматы и варианты.
Покажем реальные документы с прошлых свадеб, примеры концепций и сразу посчитаем предварительную смету под ваш запрос.`,
  },
  {
    id: "documentation",
    title: "Создаем документацию",
    text: `Документы, которые экономят ваши нервы
После подписания договора собираем для вас полный «рабочий чемодан»:
план подготовки, подробную смету, тайминг дня, чек-листы и инструкции для всех подрядчиков.
Вы в любой момент понимаете, что, когда и кем делается.`,
  },
  {
    id: "concept",
    title: "Разработка концепции",
    text: `Придумываем концепцию вашей свадьбы
Сначала мы не про цвет салфеток, а про смысл.
Проводим с вами подробное интервью, узнаём ваш стиль, историю, пожелания и ограничения.
На основе этого предлагаем готовую концепцию свадьбы — с идеями по атмосфере, декору, подаче и сценарным ходам.`,
  },
  {
    id: "venue",
    title: "Подбор площадки",
    text: `Ищем и выбираем площадку
Подбираем от 3 до 10 площадок, которые подходят под вашу пару, гостей и бюджет.
Едем вместе на просмотры, сравниваем варианты по важным для вас критериям.
После выбора — помогаем с договором, составляем меню и продумываем зонирование пространства.`,
  },
  {
    id: "team",
    title: "Выбор команды",
    text: `Составляем команду мечты
На основе концепции и ваших пожеланий собираем команду: ведущий, фотограф, видеограф, стилист, флористы, декораторы, артисты и другие специалисты.
Организуем встречи, всё согласовываем, проверяем, что каждый понимает свою задачу и стиль мероприятия.`,
  },
  {
    id: "budget-approve",
    title: "Утверждение сметы",
    text: `Финализируем смету
По мере подготовки какие-то позиции уточняются и дополняются — смета живёт и дорабатывается.
Когда все договоры с подрядчиками заключены, фиксируем финальные суммы и убираем сюрпризы.`,
  },
  {
    id: "final-docs",
    title: "Сдача финальных документов",
    text: `Финальные документы перед свадьбой
Готовим и согласовываем с вами итоговый пакет:
тайминг дня, список гостей, план рассадки, график монтажа и демонтажа, технические задания и инструкции для подрядчиков.
В день свадьбы у всех есть чёткий план, а у вас — спокойная голова.`,
  },
  {
    id: "coordination",
    title: "Координация свадьбы",
    text: `Координация свадебного дня
В день свадьбы мы на площадке с самого утра и до финала.
Проводим саундчеки и репетиции, встречаем гостей, следим за подачей блюд и расходом алкоголя, координируем артистов и подрядчиков.
Если нужно — организуем вывоз цветов, подарков и других важных вещей.`,
  },
  {
    id: "payments",
    title: "Организация оплаты подрядчикам",
    text: `Организация оплат подрядчикам
Берём на себя оплату команды в день свадьбы: стилист, ведущий, диджей, регистратор, фотографы, видеографы, артисты.
Вы не ходите с конвертами и не считаете деньги между тостами — всё по заранее согласованным договорённостям.`,
  },
  {
    id: "photo-video-control",
    title: "Контроль сдачи фото и видео",
    text: `Фото и видео — под контролем сроков
После свадьбы следим за сроками готовности фото и видео.
Напоминаем подрядчикам, контролируем сдачу материалов и отправляем вам удобные ссылки по мере готовности, чтобы вы спокойно переживали «послесловие» праздника.`,
  },
];

export type HomeReviewItem = {
  id: string;
  couple: string;
  quote: string;
  image: ResponsiveImage;
};

export const HOME_REVIEWS_TITLE = "Отзывы о нас";

export const HOME_REVIEWS_SUBTITLE =
  "Истории наших пар, слова благодарности, подробности свадеб";
const REVIEW_SIZES = "(max-width: 720px) 72vw, 240px";

export const HOME_REVIEWS_ITEMS: HomeReviewItem[] = [
  {
    id: "rinat-adelya",
    couple: "Ринат и Аделя",
    image: {
      src: review1_720,
      srcSet: toSrcSet([
        { src: review1_360, w: 360 },
        { src: review1_720, w: 720 },
        { src: review1_1600, w: 1600 },
      ]),
      sizes: REVIEW_SIZES,
      alt: "Отзыв — Пара 1",
    },
    quote:
      "Благодарим вас от всей души ❤️ Самое важное для нас — это то, что мы забыли о регистрации брака и прожили все эмоции от начала и до конца с трепетом и мурашками! Все было на высшем уровне, лучше, чем в самых красивых мечтах. мы будем вспоминать всю жизнь свадьбу и вас, наших прекрасных и самых лучших организаторов 🫶🏼 никто не сделал бы такую сказку, которую сотворили вы",
  },
  {
    id: "vyacheslav-marina",
    couple: "Вячеслав и Марина",
    image: {
      src: review2_720,
      srcSet: toSrcSet([
        { src: review2_360, w: 360 },
        { src: review2_720, w: 720 },
        { src: review2_1600, w: 1600 },
      ]),
      sizes: REVIEW_SIZES,
      alt: "Отзыв — Пара 2",
    },
    quote:
      "Наши дорогие Люда и Лена! Возвращаемся к вам с огромной благодарностью! ❤️ Самый правильный шаг в подготовке к свадьбе - было обратиться к вам! Если бы я вернулась обратно в прошлый год, я также выбрала бы вас. Спасибо вам за ваш опыт, терпение, тактичность и организацию. Все было на высшем уровне! Мне было очень комфортно и легко на свадьбе, спасибо за это вам!!! Обнимаем и любим 😘",
  },
  {
    id: "pavel-liana",
    couple: "Павел и Лиана",
    image: {
      src: review3_720,
      srcSet: toSrcSet([
        { src: review3_360, w: 360 },
        { src: review3_720, w: 720 },
        { src: review3_1600, w: 1600 },
      ]),
      sizes: REVIEW_SIZES,
      alt: "Отзыв — Пара 3",
    },
    quote:
      "Хотим от всей души поблагодарить наше свадебное агентство «Счастье» за безупречную организацию нашего праздника! Вы сделали наш день по-настоящему волшебным. Каждая деталь была продумана, и мы смогли полностью расслабиться и наслаждаться каждым моментом, зная, что всё в надежных руках. Вы — профессионал высочайшего уровня! Огромное спасибо!",
  },
  {
    id: "roman-maria",
    couple: "Роман и Мария",
    image: {
      src: review4_720,
      srcSet: toSrcSet([
        { src: review4_360, w: 360 },
        { src: review4_720, w: 720 },
        { src: review4_1600, w: 1600 },
      ]),
      sizes: REVIEW_SIZES,
      alt: "Отзыв — Пара 4",
    },
    quote:
      "Когда мы начали готовиться к свадьбе, я и представить не могла, насколько все может быть легко и безоблачно. Всё благодаря нашим потрясающим организаторам — Елене и Людмиле! Девушки, вы — гении своего дела! Ваш профессионализм восхищает. Вы не просто исполнители, вы — настоящие стратеги и психологи. Вы слышали все наши, порой смутные, пожелания и воплотили их в жизнь так, что получилось даже лучше, чем в мечтах. От выбора площадки и до последнего танца — всё было выверено и гармонично. Отдельный восторг — это работа вашей команды! Ребята, которые работали в день свадьбы, — это золото! Настолько тактичные, внимательные и быстрые. Благодаря вам и вашей команде мы в свой день не решали никаких проблем, не бегали, не нервничали. Мы просто были счастливыми женихом и невестой, которые живут в самой доброй сказке.",
  },
  {
    id: "timur-liliya",
    couple: "Тимур и Лилия",
    image: {
      src: review5_720,
      srcSet: toSrcSet([
        { src: review5_360, w: 360 },
        { src: review5_720, w: 720 },
        { src: review5_1600, w: 1600 },
      ]),
      sizes: REVIEW_SIZES,
      alt: "Отзыв — Пара 5",
    },
    quote:
      "Огромное спасибо нашим организаторам Елене и Людмиле за идеальную свадьбу! Всё прошло безупречно, без единой суеты. Вы — профессионалы высочайшего уровня, а ваша команда работала слаженно и четко. Мы смогли полностью расслабиться и наслаждаться каждым моментом нашего праздника. Спасибо за ваше спокойствие и поддержку! Будем рекомендовать вас от всей души!",
  },
];

export interface HomeWhyItem {
  id: string;
  title: string;
  text: string | ReactNode;
}

export const HOME_WHY_TITLE = "Почему нас выбирают?";

export const HOME_WHY_SUBTITLE =
  "6 главных преимуществ агентства Счастье Wedding";

export const HOME_WHY_ITEMS: HomeWhyItem[] = [
  {
    id: "client-service",
    title: "Клиентский сервис",
    text: "У каждой пары — свой пакет документов: план подготовки, смета, тайминг, чек-листы и инструкции. Вся отчётность прозрачная: вы понимаете, за что платите и на каком этапе сейчас подготовка.",
  },
  {
    id: "team",
    title: "Команда",
    text: (
      <>
        Над каждой свадьбой работает минимум два координатора:
        <ul style={{ padding: "6px 18px 6px" }}>
          <li>координатор пары</li>
          <li>координатор площадки.</li>
        </ul>
        Мы сами определяем нужное количество координаторов под ваш формат, но
        стоимость для вас от этого не меняется.
      </>
    ),
  },
  {
    id: "trends",
    title: "Мы задаем тренды",
    text: "Наши свадьбы легко узнать по стилю: чистая картинка, продуманные детали, живая атмосфера.\nФотографии наших проектов часто разлетаются по Pinterest и используются как референсы.",
  },
  {
    id: "communication",
    title: "О коммуникации",
    text: "Мы за живое, уважительное общение. Тактичные, дружелюбные, без пафоса.\nЦеним надёжность, честность и эмпатию — и в себе, и в наших парах.",
  },
  {
    id: "online-offline",
    title: "Онлайн или оффлайн",
    text: "Встречи с нашими парами проходят как в Zoom, так и в нашем офисе в центре Москвы.",
  },
  {
    id: "coordination",
    title: "Служба координации",
    text: (
      <>
        Встречаемся так, как удобно вам:
        <ul style={{ padding: "8px 18px 8px" }}>
          <li>лично</li>
          <li>в Zoom</li>
        </ul>
        Главное — чтобы вы чувствовали себя комфортно и спокойно.
      </>
    ),
  },
];

export const HOME_NUMBERS_TITLE = "В цифрах";

export type HomeNumberItem = {
  id: string;
  value: string;
  label: string;
};

export const HOME_NUMBERS_ITEMS: HomeNumberItem[] = [
  // Данные для секции цифры
  {
    id: "experience",
    value: "9",
    label: "лет опыта работы в\nорганизации свадеб",
  },
  {
    id: "specialists",
    value: "180+",
    label: "свадебных\nспециалистов в нашей базе",
  },
  {
    id: "happy-couples",
    value: "140+",
    label: "счастливых пар",
  },
];

export const SERVICES_PRICES_TITLE = "Сколько стоит свадьба?";

export const SERVICES_PRICES_LEAD =
  "Наше свадебное агентство сотрудничает со специалистами, которые предлагают лучшие условия на свадебные услуги в Казани и по всему Татарстану. Стоимость каждой услуги обсуждается в индивидуальном порядке и зависит от ваших приоритетов. Чтобы вам было легче представить бюджет, мы собрали ориентировочные ценовые категории в таблицу ниже.";

export interface ServicesPriceItem {
  id: string;
  name: string;
  medium: string;
  pro: string;
  vip: string;
  comment: string;
}
type ServicesPricesColumnId = "name" | "medium" | "pro" | "vip" | "comment";

interface ServicesPricesColumn {
  id: ServicesPricesColumnId;
  label: string;
}

export const SERVICES_PRICES_COLUMNS: ServicesPricesColumn[] = [
  { id: "name", label: "Услуга" },
  { id: "medium", label: "Medium" },
  { id: "pro", label: "Pro" },
  { id: "vip", label: "Vip" },
  { id: "comment", label: "Комментарии" },
];
export const SERVICES_PRICES_ITEMS: ServicesPriceItem[] = [
  {
    id: "banquet",
    name: "Банкет",
    medium: "5 000",
    pro: "8 000",
    vip: "13 000",
    comment:
      "Цена при расчёте меню на 1 гостя. Не включает обслуживание, пробковый сбор и алкоголь.",
  },
  {
    id: "photographer",
    name: "Фотограф",
    medium: "40 000",
    pro: "70 000",
    vip: "150 000",
    comment: "Цена зависит от портфолио и стоимости часа работы.",
  },
  {
    id: "videographer",
    name: "Видеограф",
    medium: "60 000",
    pro: "110 000",
    vip: "200 000",
    comment: "Цена зависит от набора услуг и количества часов работы.",
  },
  {
    id: "stylist",
    name: "Стилист",
    medium: "10 000",
    pro: "12 000",
    vip: "20 000",
    comment:
      "На стоимость влияет наличие репетиции, опыт, уровень сервиса и используемая косметика.",
  },
  {
    id: "host",
    name: "Ведущий",
    medium: "80 000",
    pro: "100 000",
    vip: "150 000",
    comment:
      "На цену влияет опыт ведущего, его самопрезентация, узнаваемость и медийность.",
  },
  {
    id: "dj",
    name: "Ди-джей",
    medium: "20 000",
    pro: "30 000",
    vip: "50 000",
    comment: "Цена зависит от опыта работы и позиционирования специалиста.",
  },
  {
    id: "entertainment",
    name: "Развлечения",
    medium: "20 000",
    pro: "60 000",
    vip: "200 000",
    comment: "Цена зависит от вида активности и набора услуг.",
  },
  {
    id: "cocktail-bar",
    name: "Коктейльный бар",
    medium: "35 000",
    pro: "70 000",
    vip: "150 000",
    comment: "Цена зависит от количества бокалов и дополнительных опций.",
  },
  {
    id: "cover-band",
    name: "Кавер-группа",
    medium: "80 000",
    pro: "120 000",
    vip: "200 000",
    comment: "Цена зависит от состава группы и опыта работы.",
  },
  {
    id: "show",
    name: "Шоу-программа",
    medium: "30 000",
    pro: "55 000",
    vip: "300 000",
    comment: "Цена зависит от артистов и продолжительности номеров.",
  },
  {
    id: "wedding-dance",
    name: "Свадебный танец",
    medium: "2 500",
    pro: "3 500",
    vip: "4 500",
    comment:
      "Цена за один урок с хореографом, без учёта аренды зала для репетиций.",
  },
  {
    id: "wedding-cake",
    name: "Свадебный торт",
    medium: "2 500",
    pro: "4 000",
    vip: "6 000",
    comment: "Цена указана за 1 кг и не включает доставку торта на площадку.",
  },
  {
    id: "printing",
    name: "Полиграфия",
    medium: "500",
    pro: "3 000",
    vip: "10 000",
    comment:
      "Цена указана за 1 шт. и зависит от набора, вида бумаги и способа изготовления.",
  },
  {
    id: "hotel-room",
    name: "Номер в отеле",
    medium: "20 000",
    pro: "35 000",
    vip: "80 000",
    comment:
      "Цена указана за сутки и зависит от категории номера и выбранного отеля.",
  },
  {
    id: "ceremony-decor",
    name: "Оформление свадьбы: церемония",
    medium: "50 000",
    pro: "150 000",
    vip: "200 000",
    comment: "Цена зависит от общей концепции свадьбы и масштаба декора.",
  },
  {
    id: "sweetheart-table",
    name: "Стол молодожёнов",
    medium: "30 000",
    pro: "60 000",
    vip: "100 000",
    comment:
      "Цена зависит от элементов декора и флористики, выбранного текстиля и мебели.",
  },
  {
    id: "guest-tables",
    name: "Гостевые столы",
    medium: "15 000",
    pro: "25 000",
    vip: "45 000",
    comment:
      "Цена указана за один стол и зависит от флористики, текстиля и типа мебели.",
  },
  {
    id: "photozone",
    name: "Фотозона",
    medium: "30 000",
    pro: "60 000",
    vip: "150 000",
    comment:
      "Цена зависит от сложности конструкции, используемых материалов и набора мебели и декора.",
  },
  {
    id: "seating-plan",
    name: "План рассадки",
    medium: "5 000",
    pro: "10 000",
    vip: "15 000",
    comment:
      "Цена зависит от вида плана, стиля оформления и сложности изготовления.",
  },
  {
    id: "bridal-bouquet",
    name: "Букет невесты",
    medium: "7 000",
    pro: "10 000",
    vip: "15 000",
    comment: "Цена зависит от видов цветов, ихсезонности и формы букета.",
  },
  {
    id: "sound",
    name: "Техническое оснащение: звуковое оборудование",
    medium: "30 000",
    pro: "60 000",
    vip: "200 000",
    comment:
      "Цена включает работу специалистов, доставку, монтаж и демонтаж оборудования.",
  },
  {
    id: "backline",
    name: "Backline (музыкальный бэклайн)",
    medium: "35 000",
    pro: "60 000",
    vip: "90 000",
    comment:
      "Цена зависит от технического райдера музыкантов и состава группы.",
  },
  {
    id: "light",
    name: "Световое оборудование",
    medium: "20 000",
    pro: "60 000",
    vip: "250 000",
    comment:
      "Цена зависит от количества приборов и включает работу художника по свету.",
  },
  {
    id: "video",
    name: "Видеооборудование",
    medium: "10 000",
    pro: "50 000",
    vip: "200 000",
    comment:
      "Цена зависит от вида и размеров экранов, а также сложности монтажа.",
  },
  {
    id: "special-effects",
    name: "Спецэффекты",
    medium: "10 000",
    pro: "40 000",
    vip: "200 000",
    comment:
      "Цена зависит от вида спецэффектов и продолжительности их использования.",
  },
  {
    id: "transfer",
    name: "Трансфер",
    medium: "3 000",
    pro: "5 000",
    vip: "15 000",
    comment:
      "Цена указана за час аренды и зависит от марки автомобиля и года выпуска.",
  },
];

export const SERVICE_TABLE_POST_NOTE =
  "Все указанные суммы являются ориентировочными и помогают сформировать общее представление о бюджете. Точные стоимости рассчитываются индивидуально после первой встречи и согласования концепции свадьбы.";

export const NETWORKS = [
  {
    key: "phone",
    classSuffix: "phone",
    label: "Позвонить",
    Icon: PhoneIcon,
    onClick: () => {
      window.open(PHONE_LINK, "_blank");
    },
  },
  {
    key: "whatsapp",
    classSuffix: "whatsapp",
    label: "Написать в WhatsApp",
    Icon: WhatsappIcon,
    onClick: () => {
      window.open(WHATSAPP_LINK, "_blank");
    },
  },
  {
    key: "telegram",
    classSuffix: "telegram",
    label: "Написать в Telegram",
    Icon: TelegramIcon,
    onClick: () => {
      window.open(TELEGRAM_LINK, "_blank");
    },
  },
  {
    key: "vk",
    classSuffix: "vk",
    label: "Написать во ВКонтакте",
    Icon: VkIcon,
    onClick: () => {
      window.open(VK_LINK, "_blank");
    },
  },
  {
    key: "instagram",
    classSuffix: "instagram",
    label: "Написать в Instagram",
    Icon: InstagramIcon,
    onClick: () => {
      window.open(INSTAGRAM_LINK, "_blank");
    },
  },
];
