import heroImage1 from '@assets/hero/01.jpg';
import heroImage2 from '@assets/hero/02.jpg';
import heroImage3 from '@assets/hero/21.jpg';
import heroImage4 from '@assets/hero/26.jpg';

export const HOME_HERO_IMAGES: string[] = [
  heroImage1,
  heroImage2,
  heroImage3,
  heroImage4,
];

export const HOME_HERO_TITLE_LINES: string[] = ['Свадьбы', 'нового поколения'];

export const HOME_HERO_PHRASES: string[] = [
  '12 лет опыта, знаний и заботы',
  'Свадьба под ключ с полным сопровождением',
  'Каждая деталь продумана до мелочей',
  'Сценарий, отражающий вашу историю любви',
];

export const HOME_HERO_TYPING_SPEED = 80;
export const HOME_HERO_DELETING_SPEED = 40;
export const HOME_HERO_PAUSE_BEFORE_DELETE = 2000;
export const HOME_HERO_PAUSE_BEFORE_NEXT = 400;
export const HOME_HERO_SLIDE_CHANGE_INTERVAL = 8000;

export const HOME_SERVICES_TITLE_LINES: string[] = [
  'Мы создаём атмосферные свадьбы',
  'для счастливых пар',
];

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
];

export const HOME_VIDEO_URL = 'https://player.vimeo.com/video/208475678';

export const HOME_PORTFOLIO_TITLE = 'Портфолио';

export const HOME_PORTFOLIO_SUBTITLE =
  'Рассказы о наших свадьбах в виде подробных кейсов';

export type HomePortfolioItem = {
  id: string;
  title: string;
  tagline: string;
  link: string;
  image: string;
};

export const HOME_PORTFOLIO_ITEMS: HomePortfolioItem[] = [
  {
    id: 'yan-i-natalya',
    title: 'Ян и Наталья',
    tagline: '«Где угодно, главное со мной»',
    link: '/portfolio/yan-i-natalya',
    image: heroImage1,
  },
  {
    id: 'mihail-i-vera',
    title: 'Михаил и Вера',
    tagline: 'Концепция «Я тебя найду везде!»',
    link: '/portfolio/mihail-i-vera',
    image: heroImage2,
  },
  {
    id: 'aleksandr-i-elizaveta',
    title: 'Александр и Елизавета',
    tagline: '«And they lived happily ever after»',
    link: '/portfolio/aleksandr-i-elizaveta',
    image: heroImage3,
  },
];
