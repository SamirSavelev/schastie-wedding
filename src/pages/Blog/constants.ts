import articleImage1 from "@assets/blog/articles/article-1.webp";
import articleImage2 from "@assets/blog/articles/article-2.webp";
import articleImage3 from "@assets/blog/articles/article-3.webp";
import articleImage4 from "@assets/blog/articles/article-4.webp";
import articleImage5 from "@assets/blog/articles/article-5.webp";
import articleImage6 from "@assets/blog/articles/article-6.webp";

export interface ArticlePreviewInterface {
  id: number;
  title: string;
  imageUrl: string;
  to: string;
}

export const ARTICLES_PREVIEWS: Array<ArticlePreviewInterface> = [
  {
    id: 1,
    title: "СВАДЕБНЫЙ ОРГАНИЗАТОР И КООРДИНАТОР. В ЧЕМ ОТЛИЧИЯ?",
    imageUrl: articleImage1,
    to: "/blog/svadebnyy-organizator-i-koordinator",
  },
  {
    id: 2,
    title: "БАНКЕТ ИЛИ ФУРШЕТ. ЧТО ВЫБРАТЬ?",
    imageUrl: articleImage2,
    to: "/blog/banket-ili-furshet",
  },
  {
    id: 3,
    title: "СВАДЬБА В РЕСТОРАНЕ «ВОДА»",
    imageUrl: articleImage3,
    to: "/blog/svadba-v-restorane-voda",
  },
  {
    id: 4,
    title: "БЕЛАЯ СВАДЬБА",
    imageUrl: articleImage4,
    to: "/blog/belaya-svadba",
  },
  {
    id: 5,
    title: "СВАДЬБА НА СВИЯЖСКИХ ХОЛМАХ",
    imageUrl: articleImage5,
    to: "/blog/svadba-na-sviyazhskih-holmah",
  },
  {
    id: 6,
    title: "КАК ВЫБРАТЬ СТИЛЬ СВАДЬБЫ",
    imageUrl: articleImage6,
    to: "/blog/kak-vybrat-stil-svadby",
  },
];
