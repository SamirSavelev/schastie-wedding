const HERO_SIZES_PREVIEW = "(max-width: 980px) 100vw, 55vw";

export interface WeddingImageResponsive {
  id: string;
  alt?: string;
  preview: {
    src: string;
    srcSet?: string;
    sizes?: string;
    alt?: string;
  };
  full: {
    src: string;
    srcSet?: string;
    sizes?: string;
    alt?: string;
  };
}

export interface WeddingConfig {
  id: string;
  couple: string;
  date: string;
  heroImage: string;

  heroImageWebp?: {
    src: string;
    srcSet: string;
    sizes?: string;
  };

  images: WeddingImageResponsive[];
  concept: string;
  placeSubtitle?: string;
  guests: string;
  team: string;
  budget: string;
  placeTitle: string;
}

const portfolioModules = import.meta.glob(
  "../../assets/portfolio/**/*.{webp,jpg,jpeg,png}",
  { eager: true, import: "default" },
) as Record<string, string>;

const portfolioAssets = Object.fromEntries(
  Object.entries(portfolioModules).map(([path, url]) => {
    const normalized = path.split("/assets/portfolio/")[1];
    return [normalized, url];
  }),
) as Record<string, string>;

const asset = (path: string) => {
  const url = portfolioAssets[path];
  if (!url) {
    throw new Error(`Portfolio asset not found: ${path}`);
  }
  return url;
};

const GRID_SIZES = "(max-width: 520px) 100vw, (max-width: 980px) 50vw, 33vw";
const VIEWER_SIZES = "100vw";

const galleryImage = (
  folder: string,
  idPrefix: string,
  num: number,
): WeddingImageResponsive => {
  const alt = String(num);

  const thumb360 = asset(`${folder}/${num}-360.webp`);
  const thumb720 = asset(`${folder}/${num}-720.webp`);
  const full720 = asset(`${folder}/${num}-720.webp`);
  const full1600 = asset(`${folder}/${num}-1600.webp`);

  return {
    id: `${idPrefix}-${num}`,
    alt,
    preview: {
      src: thumb360,
      srcSet: `${thumb360} 360w, ${thumb720} 720w`,
      sizes: GRID_SIZES,
      alt,
    },
    full: {
      src: full1600,
      srcSet: `${full720} 720w, ${full1600} 1600w`,
      sizes: VIEWER_SIZES,
      alt,
    },
  };
};

const gallery = (folder: string, idPrefix: string, order: number[]) =>
  order.map((n) => galleryImage(folder, idPrefix, n));

export const WEDDINGS: WeddingConfig[] = [
  {
    id: "emil-i-alina",
    couple: "Эмиль и Алина",
    date: "25 января 2025",
    concept: "В воздухе царит любовь",
    placeTitle: "Ресторна Sky 8",
    guests: "50 человек",
    team: "18 специалистов",
    budget: "> 2 млн. руб.",
    heroImage: asset("emil-alina/main.jpg"),
    heroImageWebp: {
      src: asset("emil-alina/main-1600.webp"),
      srcSet: `${asset("emil-alina/main-720.webp")} 720w, ${asset(
        "emil-alina/main-1600.webp",
      )} 1600w`,
      sizes: HERO_SIZES_PREVIEW,
    },
    images: gallery(
      "emil-alina",
      "ea",
      [4, 5, 6, 7, 8, 10, 11, 12, 13, 14, 3, 15, 9, 1, 2, 16, 17, 18],
    ),
  },
  {
    id: "marat-i-maria",
    couple: "Марат и Мария",
    date: "18 июля 2025",
    concept: "Магия любви – начало легенды",
    placeTitle: "Загородный комплекс Тишина",
    guests: "20 гостей",
    team: "14 специалистов",
    budget: "> 2 млн.",
    heroImage: asset("marat-maria/Nur_002.jpg"),
    heroImageWebp: {
      src: asset("marat-maria/1-1600.webp"),
      srcSet: `${asset("marat-maria/1-360.webp")} 360w, ${asset(
        "marat-maria/1-720.webp",
      )} 720w, ${asset("marat-maria/1-1600.webp")} 1600w`,
      sizes: HERO_SIZES_PREVIEW,
    },
    images: gallery(
      "marat-maria",
      "mm",
      [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18],
    ),
  },
  {
    id: "rinat-i-adelya",
    couple: "Ринат и Аделя",
    date: "",
    concept: "Слушая ветер, говоря о любви",
    placeTitle: "Загородный комплекс Свияжские холмы",
    guests: "50 гостей",
    team: "21 специалист",
    budget: "> 3 млн.",
    heroImage: asset("rinat-adelya/hero.jpg"),
    heroImageWebp: {
      src: asset("rinat-adelya/hero-2400.webp"),
      srcSet: `${asset("rinat-adelya/hero-1280.webp")} 1280w, ${asset(
        "rinat-adelya/hero-2400.webp",
      )} 2400w`,
      sizes: HERO_SIZES_PREVIEW,
    },
    images: gallery(
      "rinat-adelya",
      "ra",
      [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18],
    ),
  },
  {
    id: "aidar-i-sabina",
    couple: "Айдар и Сабина",
    date: "",
    concept: "Моя первая любовь",
    placeTitle: "Банкетный зал Затлы",
    guests: "60 гостей",
    team: "15 специалистов",
    budget: "> 1 млн.",
    heroImage: asset("aidar-sabina/hero.jpg"),
    heroImageWebp: {
      src: asset("aidar-sabina/hero-2400.webp"),
      srcSet: `${asset("aidar-sabina/hero-1280.webp")} 1280w, ${asset(
        "aidar-sabina/hero-2400.webp",
      )} 2400w`,
      sizes: HERO_SIZES_PREVIEW,
    },
    images: gallery(
      "aidar-sabina",
      "as",
      [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18],
    ),
  },
  {
    id: "artur-i-dasha",
    couple: "Артур и Даша",
    date: "29 июля 2023",
    concept: "На одной волне",
    placeTitle: "Ресторан Бахча",
    guests: "40 гостей",
    team: "15 специалистов",
    budget: "> 2 млн.",
    heroImage: asset("artur-i-dasha/hero.jpg"),
    heroImageWebp: {
      src: asset("artur-i-dasha/hero-2400.webp"),
      srcSet: `${asset("artur-i-dasha/hero-1280.webp")} 1280w, ${asset(
        "artur-i-dasha/hero-2400.webp",
      )} 2400w`,
      sizes: HERO_SIZES_PREVIEW,
    },
    images: gallery(
      "artur-i-dasha",
      "ad",
      [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18],
    ),
  },
  {
    id: "polina-i-arslan",
    couple: "Полина и Арслан",
    date: "",
    concept: "Наш главный рабочий проект",
    placeTitle: "Веранда САФ",
    guests: "40 гостей",
    team: "10 специалистов",
    budget: "> 1 млн.",
    heroImage: asset("polina-i-arslan/hero.jpg"),
    heroImageWebp: {
      src: asset("polina-i-arslan/hero-2400.webp"),
      srcSet: `${asset("polina-i-arslan/hero-1280.webp")} 1280w, ${asset(
        "polina-i-arslan/hero-2400.webp",
      )} 2400w`,
      sizes: HERO_SIZES_PREVIEW,
    },
    images: gallery(
      "polina-i-arslan",
      "pa",
      [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18],
    ),
  },
  {
    id: "roma-i-mariya",
    couple: "Рома и Мария",
    date: "8 сентября 2023",
    concept: "Нежность в каждом лепестке",
    placeTitle: "Банкетный зал Затлы",
    guests: "50 гостей",
    team: "12 специалистов",
    budget: "> 1 млн.",
    heroImage: asset("roma-i-mariya/hero.jpg"),
    heroImageWebp: {
      src: asset("roma-i-mariya/hero-2400.webp"),
      srcSet: `${asset("roma-i-mariya/hero-1280.webp")} 1280w, ${asset(
        "roma-i-mariya/hero-2400.webp",
      )} 2400w`,
      sizes: HERO_SIZES_PREVIEW,
    },
    images: gallery(
      "roma-i-mariya",
      "rm",
      [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18],
    ),
  },
  {
    id: "ilnur-i-aliya",
    couple: "Ильнур и Алия",
    date: "",
    concept: "Любовь в большом городе",
    placeTitle: "Ресторан Сласти",
    guests: "25 гостей",
    team: "13 специалистов",
    budget: "> 1 млн.",
    heroImage: asset("ilnur-i-aliya/hero.jpg"),
    heroImageWebp: {
      src: asset("ilnur-i-aliya/hero-2400.webp"),
      srcSet: `${asset("ilnur-i-aliya/hero-1280.webp")} 1280w, ${asset(
        "ilnur-i-aliya/hero-2400.webp",
      )} 2400w`,
      sizes: HERO_SIZES_PREVIEW,
    },
    images: gallery(
      "ilnur-i-aliya",
      "ia",
      [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17],
    ),
  },
];

const weddingsMap: Record<string, WeddingConfig> = WEDDINGS.reduce(
  (acc, wedding) => {
    acc[wedding.id] = wedding;
    return acc;
  },
  {} as Record<string, WeddingConfig>,
);

export function getWeddingById(id: string): WeddingConfig | undefined {
  return weddingsMap[id];
}
