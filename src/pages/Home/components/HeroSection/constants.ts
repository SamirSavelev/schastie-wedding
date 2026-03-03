import { makeBackgroundImagesByOrder } from "@shared/lib/backgrounds";

export const HOME_HERO_SLIDE_CHANGE_INTERVAL = 5000;

export const HOME_HERO_BACKGROUND_ORDER = [
  23, 4, 5, 20, 25, 16, 10, 41, 14, 21, 17, 22, 29, 30, 9,
];

export const HOME_HERO_IMAGES = makeBackgroundImagesByOrder(
  HOME_HERO_BACKGROUND_ORDER,
  {
    sizes: "100vw",
    altPrefix: "Свадьба",
  },
);

export const HOME_HERO_TITLE_LINES: string[] = ["Свадьбы", "нового поколения"];

export const HOME_HERO_PHRASES: string[] = [
  "Девять лет опыта, знаний и заботы",
  "Свадьба под ключ с полным сопровождением",
  "Каждая деталь продумана до мелочей",
  "Сценарий, отражающий вашу историю любви",
];
