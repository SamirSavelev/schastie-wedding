import heroImage1 from '@assets/hero/01.jpg';
import heroImage2 from '@assets/hero/02.jpg';
import heroImage3 from '@assets/hero/21.jpg';
import heroImage4 from '@assets/hero/26.jpg';

export type WeddingId =
  | 'yan-i-natalya'
  | 'mihail-i-vera'
  | 'aleksandr-i-elizaveta';

export interface WeddingImage {
  id: string;
  src: string;
  alt?: string;
}

export interface WeddingConfig {
  id: WeddingId;
  couple: string;
  date: string;
  heroImage: string;
  images: WeddingImage[];
}

export const WEDDINGS: WeddingConfig[] = [
  {
    id: 'yan-i-natalya',
    couple: 'Ян и Наталья',
    date: '23 июля 2023',
    heroImage: heroImage1,
    images: [
      {
        id: 'yan-1',
        src: heroImage1,
        alt: 'Ян и Наталья — выездная церемония',
      },
      { id: 'yan-2', src: heroImage2, alt: 'Ян и Наталья — первый танец' },
      { id: 'yan-3', src: heroImage3, alt: 'Декор свадьбы Яна и Натальи' },
      { id: 'yan-4', src: heroImage4, alt: 'Гости на свадьбе Яна и Натальи' },
    ],
  },
  {
    id: 'mihail-i-vera',
    couple: 'Михаил и Вера',
    date: '10 августа 2024',
    heroImage: heroImage2,
    images: [
      {
        id: 'mv-1',
        src: heroImage2,
        alt: 'Михаил и Вера — свадебная прогулка',
      },
      {
        id: 'mv-2',
        src: heroImage1,
        alt: 'Детали декора свадьбы Михаила и Веры',
      },
      { id: 'mv-3', src: heroImage3, alt: 'Выездная церемония Михаила и Веры' },
      { id: 'mv-4', src: heroImage4, alt: 'Гости на свадьбе Михаила и Веры' },
    ],
  },
  {
    id: 'aleksandr-i-elizaveta',
    couple: 'Александр и Елизавета',
    date: '14 сентября 2022',
    heroImage: heroImage3,
    images: [
      { id: 'ae-1', src: heroImage3, alt: 'Александр и Елизавета — церемония' },
      {
        id: 'ae-2',
        src: heroImage1,
        alt: 'Флористика на свадьбе Александра и Елизаветы',
      },
      {
        id: 'ae-3',
        src: heroImage2,
        alt: 'Банкет на свадьбе Александра и Елизаветы',
      },
      {
        id: 'ae-4',
        src: heroImage4,
        alt: 'Вечерняя часть свадьбы Александра и Елизаветы',
      },
    ],
  },
];

const weddingsMap: Record<string, WeddingConfig> = WEDDINGS.reduce(
  (acc, wedding) => {
    acc[wedding.id] = wedding;
    return acc;
  },
  {} as Record<string, WeddingConfig>
);

export function getWeddingById(id: string): WeddingConfig | undefined {
  return weddingsMap[id];
}
