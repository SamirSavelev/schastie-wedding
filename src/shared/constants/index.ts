import heroImage1 from '@assets/hero/01.jpg';
import heroImage2 from '@assets/hero/02.jpg';
import heroImage3 from '@assets/hero/21.jpg';
import heroImage4 from '@assets/hero/26.jpg';
import whyHeroImage from '@assets/home/why-us-hero.jpg';
import InstagramIcon from '@assets/icons/instagram.svg';
import TelegramIcon from '@assets/icons/telegram.svg';
import VkIcon from '@assets/icons/vk.svg';
import WhatsappIcon from '@assets/icons/whatsapp.svg';
import PhoneIcon from '@assets/icons/phone.svg';
import coupleMV from '@assets/portfolio/-269.jpg.webp';
import coupleAS from '@assets/portfolio/0209.jpg.webp';
import coupleDN from '@assets/portfolio/123A5147.jpg.webp';
import articleImage1 from '@assets/blog/articles/article-1.webp';
import articleImage2 from '@assets/blog/articles/article-2.webp';
import articleImage3 from '@assets/blog/articles/article-3.webp';
import articleImage4 from '@assets/blog/articles/article-4.webp';
import articleImage5 from '@assets/blog/articles/article-5.webp';
import articleImage6 from '@assets/blog/articles/article-6.webp';
import type { WeddingId } from '@pages/PortfolioWedding/constants';

// ССЫЛКИ НА СВЯЗЬ
export const PHONE_LINK = 'tel:+79372899055'; // телефонный номер для звонка
export const WHATSAPP_LINK = 'https://wa.me/79372899055'; // ссылка для WhatsApp
export const TELEGRAM_LINK = 'https://t.me/schastie_wedding'; // ссылка для Telegram
export const VK_LINK = 'https://vk.com/schastie_wedding'; // ссылка для ВКонтакте
export const INSTAGRAM_LINK = 'https://instagram.com/schastie_wedding'; // ссылка для Instagram

// ГЛАВНАЯ СТРАНИЦА

export const HOME_HERO_IMAGES: string[] = [
  heroImage1,
  heroImage2,
  heroImage3,
  heroImage4,
]; // Изображения для слайдшоу в начале главной страницы

export const HOME_HERO_SLIDE_CHANGE_INTERVAL = 8000; // Интервал смены слайдов в миллисекундах

export const HOME_HERO_TITLE_LINES: string[] = ['Свадьбы', 'нового поколения']; // Заголовок в начале главной страницы

export const HOME_HERO_PHRASES: string[] = [
  '12 лет опыта, знаний и заботы',
  'Свадьба под ключ с полным сопровождением',
  'Каждая деталь продумана до мелочей',
  'Сценарий, отражающий вашу историю любви',
]; // Фразы для эффекта печатающейся строки в начале главной страницы

export const HOME_SERVICES_TITLE_LINES: string[] = [
  'Мы создаём атмосферные свадьбы',
  'для счастливых пар',
]; // Заголовок для второй секции на главной странице

export interface HomeServiceItem {
  id: string;
  title: string;
  text: string;
  wide?: boolean;
}

export const HOME_SERVICES_ITEMS: HomeServiceItem[] = [
  {
    id: 'decor-floristics',
    title: 'Свадебный декор и флористика',
    text: 'Индивидуальная концепция оформления создаст неповторимую атмосферу, полную гармонии и тонкой эстетики.',
  },
  {
    id: 'photo-video',
    title: 'Фотограф и видеограф',
    text: 'Ни один момент вашей свадьбы не останется упущенным. Прекрасные кадры вашего торжества навсегда останутся запечатлёнными.',
  },
  {
    id: 'catering-restaurant',
    title: 'Кейтеринг и ресторан',
    text: 'Чтобы всё прошло со вкусом и без заминок, мы тщательно продумываем план подачи блюд и их состав, грамотно распределяем зоны обслуживания.',
  },
  {
    id: 'host-light-sound-show-cake',
    title: 'Ведущий, свет, звук, шоу-программа, торт',
    text: 'Опираясь на наш опыт, мы подберём для вас профессиональную команду, которая превратит ваше торжество в запоминающееся событие.',
  },
  {
    id: 'unique-concept',
    title: 'Уникальная концепция свадьбы',
    text: 'Каждая свадьба — персональная история. Мы чутко ловим эмоции и характер пары, отражаем их в каждой детали торжества — от сценария до финального аккорда вечера.',
  },
  {
    id: 'offsite-ceremony',
    title: 'Выездная регистрация',
    text: 'Трогательная и торжественная церемония регистрации в самых красивых локациях станет незабываемой.',
  },
]; // Элементы для второй секции на главной странице

export const HOME_VIDEO_URL = 'https://player.vimeo.com/video/208475678'; // Видео на главной странице

export const HOME_PORTFOLIO_TITLE = 'Портфолио';

export const HOME_PORTFOLIO_SUBTITLE =
  'Рассказы о наших свадьбах в виде подробных кейсов';

export type HomePortfolioItem = {
  id: number;
  title: string;
  tagline: string;
  linkId: string;
  image: string;
};

export const HOME_PORTFOLIO_ITEMS: HomePortfolioItem[] = [
  {
    id: 1,
    title: 'Ян и Наталья',
    tagline: '«Где угодно, главное со мной»',
    linkId: '1',
    image: heroImage1,
  },
  {
    id: 2,
    title: 'Михаил и Вера',
    tagline: 'Концепция «Я тебя найду везде!»',
    linkId: '2',
    image: heroImage2,
  },
  {
    id: 3,
    title: 'Александр и Елизавета',
    tagline: '«And they lived happily ever after»',
    linkId: '3',
    image: heroImage3,
  },
];

export const HOME_BANNER_TITLE_LINES: string[] = ['Планируете', 'свадьбу?'];

export const HOME_BANNER_TYPED_PHRASES: string[] = [
  'подписать договор',
  'забронировать дату',
  'договориться о встрече',
];

export const HOME_BANNER_PHONE = '+7 (937) 289-90-55';

export const HOME_BANNER_EMAIL = 'schastie.kazan@gmail.com';
export const HOME_BANNER_EMAIL_LINK = `mailto:${HOME_BANNER_EMAIL}`;

export const HOME_BANNER_FORM_TITLE =
  'Оставьте свои контакты и мы свяжемся с вами в ближайшее время, чтобы ответить на все вопросы';

export const HOME_BANNER_POLICY_TEXT =
  'Нажимая на кнопку, вы соглашаетесь с политикой в отношении обработки персональных данных.';

export interface HomeWorkStep {
  id: string;
  title: string;
  text: string;
}

export const HOME_WORK_TITLE = 'Как мы работаем';
export const HOME_WORK_SUBTITLE = '10 этапов организации свадьбы «под ключ»';

export const HOME_WORK_STEPS: HomeWorkStep[] = [
  {
    id: 'first-meeting',
    title: 'Первая встреча',
    text: `Мы расскажем, как происходит организация свадьбы под ключ в нашем агентстве, покажем виды свадебных документов, реализованные концепции и рассчитаем первичную смету.`,
  },
  {
    id: 'documentation',
    title: 'Создаем документацию',
    text: `После заключения договора мы готовим полный пакет документов для организации свадьбы: план подготовки, смету, тайминг свадебного дня, чек-листы и инструкции для подрядчиков.`,
  },
  {
    id: 'concept',
    title: 'Разработка концепции',
    text: `Чтобы подобрать инструменты для воплощения вашей свадьбы, необходимо изначально придумать идею. Благодаря подробному интервью с вами и нашему опыту в организации различных форматов свадеб, мы предложим лучшую концепцию свадьбы.`,
  },
  {
    id: 'venue',
    title: 'Подбор площадки',
    text: `Презентуем от трёх до десяти вариантов подходящих площадок, выезжаем на осмотр. Делаем сравнительный анализ понравившихся вариантов. Заключаем договор, составляем меню и зонируем пространство.`,
  },
  {
    id: 'team',
    title: 'Выбор команды',
    text: `Исходя из пожеланий пары и выбранной концепции свадьбы подбираем специалистов для реализации задуманных идей. Проводим встречи, заключаем договоры и согласовываем детали работы.`,
  },
  {
    id: 'budget-approve',
    title: 'Утверждение сметы',
    text: `В процессе подготовки свадьбы смета будет постоянно корректироваться. Окончательные стоимости услуг вносятся после заключения договоров с каждым из Исполнителей.`,
  },
  {
    id: 'final-docs',
    title: 'Сдача финальных документов',
    text: `Согласовываем окончательные варианты тайминга, списка гостей, плана рассадки, графика монтажа и демонтажа, технических заданий и инструкций для подрядчиков.`,
  },
  {
    id: 'coordination',
    title: 'Координация свадьбы',
    text: `Взаимодействуем с Исполнителями в течение всего свадебного дня. Проводим саунд-чеки и репетиции, встречаем гостей, контролируем вынос блюд и расход алкоголя от клиента, координируем работу артистов, при необходимости организуем вывоз цветов и подарков.`,
  },
  {
    id: 'payments',
    title: 'Организация оплаты подрядчикам',
    text: `Оплачиваем услуги стилиста, ведущего, ди-джея, регистратора, фотографов, видеографов, артистов по завершении их работы, согласно заключённым договорам.`,
  },
  {
    id: 'photo-video-control',
    title: 'Контроль сдачи фото и видео',
    text: `Контролируем сроки сдачи фото- и видеоматериалов со свадьбы и высылаем ссылки по мере готовности.`,
  },
];

export interface HomeReviewItem {
  id: string;
  couple: string;
  quote: string;
  image: string;
}

export const HOME_REVIEWS_TITLE = 'Отзывы о нас';

export const HOME_REVIEWS_SUBTITLE =
  'Истории наших пар, слова благодарности, подробности свадеб';

export const HOME_REVIEWS_ITEMS: HomeReviewItem[] = [
  {
    id: 'viktor-anna',
    couple: 'Виктор и Анна',
    image: heroImage1,
    quote:
      'Ксюша — это просто алмаз. Рассказала и показала, кого надо, сняла с нас 90% забот, на которые критически не хватало времени. Организация, атмосфера, команда — всё было на высоте. Мы до сих пор пересматриваем фото и вспоминаем этот день с улыбкой.',
  },
  {
    id: 'ivan-anna',
    couple: 'Иван и Анна',
    image: heroImage2,
    quote:
      'Мы мечтали о тёплой камерной свадьбе без лишнего пафоса. Команда предложила концепцию, в которую влюбились с первого эскиза. В день свадьбы мы просто наслаждались происходящим и не думали ни о тайминге, ни о подрядчиках — обо всём позаботились за нас.',
  },
  {
    id: 'dmitry-elena',
    couple: 'Дмитрий и Елена',
    image: heroImage3,
    quote:
      'Особенно поразила работа с деталями: от пригласительных до рассадки гостей всё было про нас. Отдельное спасибо за выездную регистрацию — гости плакали и смеялись одновременно. Это был идеальный сценарий, в котором каждый момент был на своём месте.',
  },
  {
    id: 'kirill-olga',
    couple: 'Кирилл и Ольга',
    image: heroImage4,
    quote:
      'Мы планировали свадьбу за два месяца и думали, что это нереально. Но агентство доказало обратное. Чёткий план, прозрачная смета, понятная коммуникация. Ни одного сорванного срока и ни единой накладки в день свадьбы. Это было лучше, чем мы могли представить.',
  },
  {
    id: 'alexey-maria',
    couple: 'Алексей и Мария',
    image: heroImage1,
    quote:
      'Спасибо за праздник, который до сих пор вспоминают наши родители и друзья. Мы чувствовали поддержку на каждом этапе подготовки, а в сам день — абсолютное спокойствие. Если бы пришлось выбирать ещё раз, мы бы снова пришли к вам.',
  },
];

export interface HomeWhyItem {
  id: string;
  title: string;
  text: string;
}

export const HOME_WHY_TITLE = 'Почему нас выбирают?';

export const HOME_WHY_SUBTITLE =
  '6 главных преимуществ агентства Schastie Wedding';

export const HOME_WHY_HERO_IMAGE = whyHeroImage;

export const HOME_WHY_ITEMS: HomeWhyItem[] = [
  {
    id: 'client-service',
    title: 'Клиентский сервис',
    text: 'Личный кабинет и персонализированные документы каждой паре.',
  },
  {
    id: 'team',
    title: 'Команда',
    text: 'Над каждой свадьбой работают 2 организатора: Елена Тихонова и Людмила Соснова.',
  },
  {
    id: 'trends',
    title: 'Мы задаем тренды',
    text: 'У наших свадеб узнаваемый стиль. Фото наших свадеб очень популярны на Pinterest.',
  },
  {
    id: 'communication',
    title: 'О коммуникации',
    text: 'Мы тактичные, дружелюбные и искренние. Ценим уважение, надежность и эмпатию.',
  },
  {
    id: 'online-offline',
    title: 'Онлайн или офлайн',
    text: 'Встречи с нашими парами проходят как в Zoom, так и в нашем офисе в центре Москвы.',
  },
  {
    id: 'coordination',
    title: 'Служба координации',
    text: 'В агентстве работает постоянная команда из 8 опытных свадебных координаторов.',
  },
];

export const HOME_NUMBERS_TITLE = 'В цифрах';

export type HomeNumberItem = {
  id: string;
  value: string;
  label: string;
};

export const HOME_NUMBERS_BACKGROUND = heroImage1; // Изображение для секции цифры

export const HOME_NUMBERS_ITEMS: HomeNumberItem[] = [
  // Данные для секции цифры
  {
    id: 'experience',
    value: '12',
    label: 'лет опыта работы в\nорганизации свадеб',
  },
  {
    id: 'min-budget',
    value: '3',
    label: 'млн. рублей — минимальный\nбюджет свадьбы',
  },
  {
    id: 'specialists',
    value: '540+',
    label: 'свадебных\nспециалистов в нашей базе',
  },
  {
    id: 'happy-couples',
    value: '310+',
    label: 'счастливых пар',
  },
];

export const SERVICES_INTRO_TITLE = 'Организация свадеб «под ключ»';

export const SERVICES_INTRO_MAIN_TEXT =
  'Основной услугой свадебного агентства «Schastie Wedding» является организация свадеб «под ключ». Только в этом случае мы можем гарантировать безупречную организацию и нести ответственность за реализацию концепции.';

export const SERVICES_INTRO_BUDGET_PREFIX =
  'Минимальный бюджет для организации свадьбы с нашим агентством составляет ';
export const SERVICES_INTRO_BUDGET_VALUE = '3\u00a0млн\u00a0рублей';

export const SERVICES_INTRO_BADGE_CAPTION = 'Агентское вознаграждение';
export const SERVICES_INTRO_BADGE_PERCENT = 'От 70 000 рублей';
export const SERVICES_INTRO_BADGE_SUB =
  'с каждой пары на встрече мы рассчитываем стоимость индивидуально под ваши потребности';

export const SERVICES_INTRO_NOTE =
  'С каждой парой мы заключаем договор на оказание услуг, где прописан весь перечень предоставляемых услуг и зона ответственности агентства.';

export const SERVICES_CHAT_BRIDE_NAME = 'Невеста';

export const SERVICES_CHAT_BRIDE_MESSAGE =
  'Где можно посмотреть более полный список того, что входит в услугу организация свадьбы «под ключ»?';

export const SERVICES_CHAT_ORGANIZER_NAME =
  'Свадебное агентство Schastie Wedding';

export const SERVICES_CHAT_ORGANIZER_INTRO =
  'Вы не поверите, но полный перечень обязанностей свадебного организатора в нашем агентстве состоит из 135 пунктов. Если описать их общими словами, то получается вот такой список:';

export const SERVICES_CHAT_ORGANIZER_LIST: string[] = [
  'Проведение первой встречи. Заключение договора.',
  'Детальная разработка концепции свадьбы. Интервью.',
  'Подбор места проведения свадьбы: отель для утра невесты и жениха, площадки для церемонии и свадебного ужина.',
  'Поиск и подбор всех необходимых специалистов: декоратор, ведущий, фотограф, видеограф, регистратор, стилист, артисты, технический продакшн, кондитер, хореограф-постановщик, трансфер и др.',
  'Составление меню для свадебного ужина.',
  'Дегустация начинок свадебного торта.',
  'Написание авторского сценария.',
  'Составление рабочей документации: тайминги, инструкции, технические задания, чек-листы, списки на монтаж и демонтаж, схемы расстановки мебели и др.',
  'Делаем расчёт алкогольных напитков.',
  'Координация на весь период свадебного дня, а также при необходимости в течение всего свадебного уикенда.',
];

export const SERVICES_PRICES_TITLE = 'Сколько стоит свадьба?';

export const SERVICES_PRICES_LEAD =
  'Наше свадебное агентство сотрудничает со специалистами, которые предлагают лучшие условия на свадебные услуги в Казани и по всему Татарстану. Стоимость каждой услуги обсуждается в индивидуальном порядке и зависит от ваших приоритетов. Чтобы вам было легче представить бюджет, мы собрали ориентировочные ценовые категории в таблицу ниже.';

export interface ServicesPriceItem {
  id: string;
  name: string;
  medium: string;
  pro: string;
  vip: string;
  comment: string;
}
type ServicesPricesColumnId = 'name' | 'medium' | 'pro' | 'vip' | 'comment';

interface ServicesPricesColumn {
  id: ServicesPricesColumnId;
  label: string;
}

export const SERVICES_PRICES_COLUMNS: ServicesPricesColumn[] = [
  { id: 'name', label: 'Услуга' },
  { id: 'medium', label: 'Medium' },
  { id: 'pro', label: 'Pro' },
  { id: 'vip', label: 'Vip' },
  { id: 'comment', label: 'Комментарии' },
];
export const SERVICES_PRICES_ITEMS: ServicesPriceItem[] = [
  {
    id: 'banquet',
    name: 'Банкет',
    medium: '6 000',
    pro: '8 000',
    vip: '13 000',
    comment:
      'Цена при расчёте меню на 1 гостя. Не включает обслуживание, пробковый сбор и алкоголь.',
  },
  {
    id: 'photographer',
    name: 'Фотограф',
    medium: '80 000',
    pro: '120 000',
    vip: '200 000',
    comment: 'Цена зависит от портфолио и стоимости часа работы.',
  },
  {
    id: 'videographer',
    name: 'Видеограф',
    medium: '90 000',
    pro: '120 000',
    vip: '210 000',
    comment: 'Цена зависит от набора услуг и количества часов работы.',
  },
  {
    id: 'stylist',
    name: 'Стилист',
    medium: '20 000',
    pro: '30 000',
    vip: '50 000',
    comment:
      'На стоимость влияет наличие репетиции, опыт, уровень сервиса и используемая косметика.',
  },
  {
    id: 'host',
    name: 'Ведущий',
    medium: '100 000',
    pro: '150 000',
    vip: '300 000',
    comment:
      'На цену влияет опыт ведущего, его самопрезентация, узнаваемость и медийность.',
  },
  {
    id: 'dj',
    name: 'Ди-джей',
    medium: '20 000',
    pro: '30 000',
    vip: '50 000',
    comment: 'Цена зависит от опыта работы и позиционирования специалиста.',
  },
  {
    id: 'entertainment',
    name: 'Развлечения',
    medium: '20 000',
    pro: '60 000',
    vip: '200 000',
    comment: 'Цена зависит от вида активности и набора услуг.',
  },
  {
    id: 'cocktail-bar',
    name: 'Коктейльный бар',
    medium: '35 000',
    pro: '70 000',
    vip: '200 000',
    comment: 'Цена зависит от количества бокалов и дополнительных опций.',
  },
  {
    id: 'cover-band',
    name: 'Кавер-группа',
    medium: '120 000',
    pro: '150 000',
    vip: '300 000',
    comment: 'Цена зависит от состава группы и опыта работы.',
  },
  {
    id: 'show',
    name: 'Шоу-программа',
    medium: '30 000',
    pro: '55 000',
    vip: '300 000',
    comment: 'Цена зависит от артистов и продолжительности номеров.',
  },
  {
    id: 'wedding-dance',
    name: 'Свадебный танец',
    medium: '2 500',
    pro: '3 500',
    vip: '4 500',
    comment:
      'Цена за один урок с хореографом, без учёта аренды зала для репетиций.',
  },
  {
    id: 'wedding-cake',
    name: 'Свадебный торт',
    medium: '2 500',
    pro: '4 000',
    vip: '6 000',
    comment: 'Цена указана за 1 кг и не включает доставку торта на площадку.',
  },
  {
    id: 'printing',
    name: 'Полиграфия',
    medium: '500',
    pro: '3 000',
    vip: '10 000',
    comment:
      'Цена указана за 1 шт. и зависит от набора, вида бумаги и способа изготовления.',
  },
  {
    id: 'hotel-room',
    name: 'Номер в отеле',
    medium: '20 000',
    pro: '35 000',
    vip: '80 000',
    comment:
      'Цена указана за сутки и зависит от категории номера и выбранного отеля.',
  },
  {
    id: 'ceremony-decor',
    name: 'Оформление свадьбы: церемония',
    medium: '90 000',
    pro: '150 000',
    vip: '500 000',
    comment: 'Цена зависит от общей концепции свадьбы и масштаба декора.',
  },
  {
    id: 'sweetheart-table',
    name: 'Стол молодожёнов',
    medium: '60 000',
    pro: '100 000',
    vip: '350 000',
    comment:
      'Цена зависит от элементов декора и флористики, выбранного текстиля и мебели.',
  },
  {
    id: 'guest-tables',
    name: 'Гостевые столы',
    medium: '15 000',
    pro: '25 000',
    vip: '45 000',
    comment:
      'Цена указана за один стол и зависит от флористики, текстиля и типа мебели.',
  },
  {
    id: 'photozone',
    name: 'Фотозона',
    medium: '50 000',
    pro: '90 000',
    vip: '200 000',
    comment:
      'Цена зависит от сложности конструкции, используемых материалов и набора мебели и декора.',
  },
  {
    id: 'seating-plan',
    name: 'План рассадки',
    medium: '7 000',
    pro: '15 000',
    vip: '25 000',
    comment:
      'Цена зависит от вида плана, стиля оформления и сложности изготовления.',
  },
  {
    id: 'bridal-bouquet',
    name: 'Букет невесты',
    medium: '7 000',
    pro: '10 000',
    vip: '15 000',
    comment: 'Цена зависит от видов цветов, их сезонности и формы букета.',
  },
  {
    id: 'sound',
    name: 'Техническое оснащение: звуковое оборудование',
    medium: '50 000',
    pro: '70 000',
    vip: '200 000',
    comment:
      'Цена включает работу специалистов, доставку, монтаж и демонтаж оборудования.',
  },
  {
    id: 'backline',
    name: 'Backline (музыкальный бэклайн)',
    medium: '35 000',
    pro: '60 000',
    vip: '90 000',
    comment:
      'Цена зависит от технического райдера музыкантов и состава группы.',
  },
  {
    id: 'light',
    name: 'Световое оборудование',
    medium: '60 000',
    pro: '90 000',
    vip: '350 000',
    comment:
      'Цена зависит от количества приборов и включает работу художника по свету.',
  },
  {
    id: 'video',
    name: 'Видеооборудование',
    medium: '20 000',
    pro: '60 000',
    vip: '200 000',
    comment:
      'Цена зависит от вида и размеров экранов, а также сложности монтажа.',
  },
  {
    id: 'special-effects',
    name: 'Спецэффекты',
    medium: '20 000',
    pro: '40 000',
    vip: '200 000',
    comment:
      'Цена зависит от вида спецэффектов и продолжительности их использования.',
  },
  {
    id: 'transfer',
    name: 'Трансфер',
    medium: '3 000',
    pro: '5 000',
    vip: '15 000',
    comment:
      'Цена указана за час аренды и зависит от марки автомобиля и года выпуска.',
  },
];

export const SERVICE_TABLE_POST_NOTE =
  'Все указанные суммы являются ориентировочными и помогают сформировать общее представление о бюджете. Точные стоимости рассчитываются индивидуально после первой встречи и согласования концепции свадьбы.';

export const SERVICES_MAGIC_TITLE =
  'Работа организатора — это магия и немного чисел';

export const SERVICES_MAGIC_SUBTITLE =
  '* — наведите на точку, чтобы создать идеальную свадьбу';

export const SERVICES_MAGIC_ORGANIZER_TITLE = 'Свадебный организатор';
export const SERVICES_MAGIC_SPECIALISTS_TITLE = 'Свадебные специалисты';
export const SERVICES_MAGIC_COUPLE_TITLE = 'Жених и невеста';

export const SERVICES_MAGIC_ORGANIZER_STATS: string[] = [
  '8 лет опыта',
  '165 площадок',
  '83 ведущих',
  '128 фотографов',
];

export const SERVICES_MAGIC_SPECIALISTS_STATS: string[] = [
  '15 договоров',
  '17 встреч',
  '3 чата',
  '8 технических заданий',
];

export const SERVICES_MAGIC_COUPLE_STATS: string[] = [
  '8-часовой сон',
  'до −15% экономии бюджета',
  '24 часа с любимыми',
  '79% сохранённых нервных клеток',
];

export const NETWORKS = [
  {
    key: 'phone',
    classSuffix: 'phone',
    label: 'Позвонить',
    Icon: PhoneIcon,
    onClick: () => {
      window.open(PHONE_LINK, '_blank');
    },
  },
  {
    key: 'whatsapp',
    classSuffix: 'whatsapp',
    label: 'Написать в WhatsApp',
    Icon: WhatsappIcon,
    onClick: () => {
      window.open(WHATSAPP_LINK, '_blank');
    },
  },
  {
    key: 'telegram',
    classSuffix: 'telegram',
    label: 'Написать в Telegram',
    Icon: TelegramIcon,
    onClick: () => {
      window.open(TELEGRAM_LINK, '_blank');
    },
  },
  {
    key: 'vk',
    classSuffix: 'vk',
    label: 'Написать во ВКонтакте',
    Icon: VkIcon,
    onClick: () => {
      window.open(VK_LINK, '_blank');
    },
  },
  {
    key: 'instagram',
    classSuffix: 'instagram',
    label: 'Написать в Instagram',
    Icon: InstagramIcon,
    onClick: () => {
      window.open(INSTAGRAM_LINK, '_blank');
    },
  },
];

export interface ServicesGuaranteeItem {
  id: string;
  title: string;
  description: string;
  note: string;
}

export const SERVICES_GUARANTEES_TITLE = 'Мы даём гарантии!';

export const SERVICES_GUARANTEES_ITEMS: ServicesGuaranteeItem[] = [
  {
    id: 'success',
    title: 'Гарантия успеха',
    description:
      'Если большинство гостей скажут, что им не нравится пребывание на вашей свадьбе, мы вернём вам деньги за организацию свадьбы.',
    note: '* Возврат денежных средств возможен при составлении жалоб от 50% гостей в день вашей свадьбы.',
  },
  {
    id: 'organizer',
    title: 'Гарантия организатора',
    description:
      'Если ваш персональный свадебный организатор не выполнит условия договора на оказание услуг, мы возьмём на себя все оставшиеся расходы по вашей свадьбе.',
    note: '* Нарушение должно касаться одного из пунктов акта выполненных работ, который является приложением к договору.',
  },
  {
    id: 'money-back',
    title: 'Гарантия возврата денег',
    description:
      'Если вам не понравится ваша свадьба, мы вернём вам деньги и уедем с мероприятия со всей своей командой.',
    note: `* Жалобы на работу всей команды должны быть зафиксированы на бумаге с подписями молодожёнов и их родителей.`,
  },
];

export const IMAGE_MARQUEE_VIEWER_ARIA_LABEL =
  'Просмотр фотографий в полноэкранном режиме';

export const IMAGE_MARQUEE_VIEWER_CLOSE_LABEL = 'Закрыть просмотр';

export const IMAGE_MARQUEE_VIEWER_PREV_LABEL = 'Предыдущее фото';

export const IMAGE_MARQUEE_VIEWER_NEXT_LABEL = 'Следующее фото';

export const MARQUEE_IMAGES = [
  { id: '1', src: heroImage1, alt: 'Свадьба 1' },
  { id: '2', src: heroImage2, alt: 'Свадьба 2' },
  { id: '3', src: heroImage3, alt: 'Свадьба 3' },
  { id: '4', src: heroImage4, alt: 'Свадьба 4' },
  { id: '5', src: heroImage1, alt: 'Свадьба 5' },
  { id: '6', src: heroImage2, alt: 'Свадьба 6' },
  { id: '7', src: heroImage3, alt: 'Свадьба 7' },
  { id: '8', src: heroImage4, alt: 'Свадьба 8' },
  { id: '9', src: heroImage1, alt: 'Свадьба 9' },
  { id: '10', src: heroImage2, alt: 'Свадьба 10' },
  { id: '11', src: heroImage3, alt: 'Свадьба 11' },
  { id: '12', src: heroImage4, alt: 'Свадьба 12' },
  { id: '13', src: heroImage1, alt: 'Свадьба 13' },
  { id: '14', src: heroImage2, alt: 'Свадьба 14' },
  { id: '15', src: heroImage3, alt: 'Свадьба 15' },
  { id: '16', src: heroImage4, alt: 'Свадьба 16' },
  { id: '17', src: heroImage1, alt: 'Свадьба 17' },
  { id: '18', src: heroImage2, alt: 'Свадьба 18' },
  { id: '19', src: heroImage3, alt: 'Свадьба 19' },
  { id: '20', src: heroImage4, alt: 'Свадьба 20' },
];

export interface PortfolioWedding {
  id: WeddingId;
  imageUrl: string;
  coupleName: string;
  concept: string;
  placeTitle: string;
  placeSubtitle: string;
  guests: string;
  team: string;
  budget: string;
}
export const PORTFOLIO_WEDDINGS_PREVIEWS: Array<PortfolioWedding> = [
  {
    id: 'mihail-i-vera',
    imageUrl: coupleMV,
    coupleName: 'Михаил и Вера',
    concept: 'Концепция «Я тебя найду везде»',
    placeTitle: 'Загородная площадка',
    placeSubtitle: 'Hide',
    guests: '101 человек',
    team: '63 специалиста',
    budget: '> 4 млн. руб.',
  },
  {
    id: 'aleksandr-i-elizaveta',
    imageUrl: coupleAS,
    coupleName: 'Алексей и Софья',
    concept: 'Концепция «Город в огнях»',
    placeTitle: 'Панорамный ресторан',
    placeSubtitle: 'Терраса на крыше',
    guests: '80 человек',
    team: '48 специалистов',
    budget: '≈ 3 млн. руб.',
  },
  {
    id: 'yan-i-natalya',
    imageUrl: coupleDN,
    coupleName: 'Дмитрий и Наталья',
    concept: 'Концепция «Сад мечты»',
    placeTitle: 'Усадьба за городом',
    placeSubtitle: 'Теплая оранжерея',
    guests: '65 человек',
    team: '37 специалистов',
    budget: '≈ 2,5 млн. руб.',
  },
];

export const PORTFOLIO_DETAILS =
  'Наше портфолио — не просто статичная галерея. Мы рассказываем о наших свадьбах в виде подробных кейсов: увлекательные истории любви, уникальные концепции, эскизы декора, комментарии от свадебных специалистов, фото и видео-экстейджи и многое другое. Приятного просмотра!';

export interface ArticlePreview {
  id: number;
  title: string;
  imageUrl: string;
  to: string;
}
export const ARTICLES_PREVIEWS: Array<ArticlePreview> = [
  {
    id: 1,
    title: 'СВАДЕБНЫЙ ОРГАНИЗАТОР И КООРДИНАТОР. В ЧЕМ ОТЛИЧИЯ?',
    imageUrl: articleImage1,
    to: '/blog/svadebnyy-organizator-i-koordinator',
  },
  {
    id: 2,
    title: 'БАНКЕТ ИЛИ ФУРШЕТ. ЧТО ВЫБРАТЬ?',
    imageUrl: articleImage2,
    to: '/blog/banket-ili-furshet',
  },
  {
    id: 3,
    title: 'СВАДЬБА В РЕСТОРАНЕ «ВОДА»',
    imageUrl: articleImage3,
    to: '/blog/svadba-v-restorane-voda',
  },
  {
    id: 4,
    title: 'БЕЛАЯ СВАДЬБА',
    imageUrl: articleImage4,
    to: '/blog/belaya-svadba',
  },
  {
    id: 5,
    title: 'СВАДЬБА НА СВИЯЖСКИХ ХОЛМАХ',
    imageUrl: articleImage5,
    to: '/blog/svadba-na-sviyazhskih-holmah',
  },
  {
    id: 6,
    title: 'КАК ВЫБРАТЬ СТИЛЬ СВАДЬБЫ',
    imageUrl: articleImage6,
    to: '/blog/kak-vybrat-stil-svadby',
  },
];

// --- REVIEWS PAGE (СТРАНИЦА ОТЗЫВОВ) ---

export interface ReviewGalleryImage {
  id: string;
  src: string;
  alt?: string;
}

export interface ReviewItemFull {
  id: string;
  couple: string;
  weddingDate: string;
  mainImage: string;
  review: string;
  gallery: ReviewGalleryImage[];
}

export const REVIEWS_PAGE_TITLE = 'Отзывы';
export const REVIEWS_PAGE_SUBTITLE =
  'Истории наших пар, слова благодарности и детали свадебных дней.';

export const REVIEWS_PAGE_BOTTOM_TEXT = 'Истории наших пар';

export const REVIEWS_VIEWER_ARIA_LABEL = 'Просмотр фотографий со свадьбы';
export const REVIEWS_VIEWER_CLOSE_LABEL = 'Закрыть просмотр';
export const REVIEWS_VIEWER_PREV_LABEL = 'Предыдущее фото';
export const REVIEWS_VIEWER_NEXT_LABEL = 'Следующее фото';

export const REVIEWS_ITEMS: ReviewItemFull[] = [
  {
    id: 'viktor-anna',
    couple: 'Виктор и Анна',
    weddingDate: '12 августа 2023 года',
    mainImage: heroImage1,
    review:
      'Ксюша и команда «Счастье Wedding» сняли с нас 90% забот. Организация, атмосфера, подрядчики — всё было продумано до мелочей. В день свадьбы мы просто наслаждались праздником, не думая ни о тайминге, ни о сценарии. Этот день мы до сих пор вспоминаем с улыбкой.',
    gallery: [
      {
        id: 'viktor-anna-1',
        src: heroImage1,
        alt: 'Виктор и Анна — выездная церемония',
      },
      {
        id: 'viktor-anna-2',
        src: heroImage2,
        alt: 'Виктор и Анна — первый танец',
      },
      {
        id: 'viktor-anna-3',
        src: heroImage3,
        alt: 'Виктор и Анна — детали декора',
      },
    ],
  },
  {
    id: 'ivan-anna',
    couple: 'Иван и Анна',
    weddingDate: '27 мая 2022 года',
    mainImage: heroImage2,
    review:
      'Мы мечтали о тёплой, камерной свадьбе без лишнего пафоса. Команда «Счастье Wedding» предложила концепцию, в которую мы влюбились с первого же эскиза. В день свадьбы всё шло настолько спокойно и гармонично, что мы просто жили моментом и наслаждались каждым кадром.',
    gallery: [
      {
        id: 'ivan-anna-1',
        src: heroImage2,
        alt: 'Иван и Анна — утро невесты',
      },
      {
        id: 'ivan-anna-2',
        src: heroImage3,
        alt: 'Иван и Анна — церемония',
      },
      {
        id: 'ivan-anna-3',
        src: heroImage4,
        alt: 'Иван и Анна — ужин с гостями',
      },
    ],
  },
  {
    id: 'dmitry-elena',
    couple: 'Дмитрий и Елена',
    weddingDate: '3 июня 2021 года',
    mainImage: heroImage3,
    review:
      'Особенно поразила работа с деталями: от пригласительных до плана рассадки всё было про нас. Отдельное спасибо за выездную регистрацию — гости и смеялись, и плакали. Этот день стал по-настоящему семейным событием, а не просто красивым мероприятием.',
    gallery: [
      {
        id: 'dmitry-elena-1',
        src: heroImage3,
        alt: 'Дмитрий и Елена — клятвы у арки',
      },
      {
        id: 'dmitry-elena-2',
        src: heroImage1,
        alt: 'Дмитрий и Елена — прогулка',
      },
      {
        id: 'dmitry-elena-3',
        src: heroImage4,
        alt: 'Дмитрий и Елена — праздничный зал',
      },
    ],
  },
  {
    id: 'kirill-olga',
    couple: 'Кирилл и Ольга',
    weddingDate: '18 сентября 2020 года',
    mainImage: heroImage4,
    review:
      'Мы готовились к свадьбе всего два месяца и думали, что это невозможно. Но «Счастье Wedding» доказали обратное. Чёткий план, понятная смета, адекватные сроки — ни одной накладки в день свадьбы. Всё прошло именно так, как мы хотели, и даже лучше.',
    gallery: [
      {
        id: 'kirill-olga-1',
        src: heroImage4,
        alt: 'Кирилл и Ольга — выездная церемония',
      },
      {
        id: 'kirill-olga-2',
        src: heroImage2,
        alt: 'Кирилл и Ольга — банкет',
      },
      {
        id: 'kirill-olga-3',
        src: heroImage1,
        alt: 'Кирилл и Ольга — детали декора',
      },
    ],
  },
];

export const ABOUT_TITLE = 'О нас';

export const ABOUT_LEAD =
  'Команда «Счастье Wedding» — опытные организаторы, дизайнеры и координаторы.';

export const ABOUT_MISSION =
  'Каждый человек приходит в этот мир со своей миссией. Высшее и нескончаемое счастье — это понять, зачем ты был рождён.';

export const ABOUT_PERSON_ELENA_NAME = 'Тихонова Елена';
export const ABOUT_PERSON_ELENA_ROLE = 'Организатор';
export const ABOUT_PERSON_ELENA_QUOTE =
  '«Что для меня “Счастье”? Это не просто любимая работа — это удовольствие делать людей вокруг чуточку счастливее, радовать и удивлять. Ежедневно нас окружает красота и любовь, настоящие и искренние чувства двух сердец, которые бьются в унисон. Команда профессионалов, с которой не первый год работает “Счастье” — это люди, горящие идеей, вдохновлённые творчеством. И для меня большая удача — быть в этом мире, создавать сказку для вас!»';

export const ABOUT_PERSON_LYUDMILA_NAME = 'Соснова Людмила';
export const ABOUT_PERSON_LYUDMILA_ROLE = 'Организатор';
export const ABOUT_PERSON_LYUDMILA_QUOTE =
  '«Много ли нужно человеку для полного счастья? Одна лишь любовь может сделать человека безмерно счастливым — это точно. С самого детства я верила в это волшебное чувство и, повзрослев, убедилась, что нет прекраснее влюблённых глаз. Занимаясь любимым делом, я каждый день не только чувствую любовь, я её вижу, прикасаюсь к ней, и самым счастливым для меня всегда остаётся знакомство с новой историей любви, воплощение которой доверяют нашей команде. Профессионализм, красота и любовь — залог моего счастья.»';
