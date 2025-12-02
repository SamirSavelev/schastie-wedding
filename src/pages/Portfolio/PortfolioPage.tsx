import { Container } from '@shared/ui/Container/Container';
import { WeddingPreview } from '@widgets/WeddingPreview/WeddingPreview';

import coupleMV from '@assets/portfolio/-269.jpg.webp';
import coupleAS from '@assets/portfolio/0209.jpg.webp';
import coupleDN from '@assets/portfolio/123A5147.jpg.webp';
import headerImage from '@assets/portfolio/header.jpg';

import './PortfolioPage.scss';
import { PageHeader } from '@widgets/PageHeader/PageHeader';

const weddings = [
  {
    id: 'mikhail-vera',
    imageUrl: coupleMV,
    coupleName: 'Михаил и Вера',
    concept: 'Концепция «Я тебя найду везде»',
    placeTitle: 'Загородная площадка',
    placeSubtitle: 'Hide',
    guests: '101 человек',
    team: '63 специалиста',
    budget: '> 4 млн. руб.',
    to: '/portfolio/mikhail-i-vera',
  },
  {
    id: 'alexey-sofiya',
    imageUrl: coupleAS,
    coupleName: 'Алексей и Софья',
    concept: 'Концепция «Город в огнях»',
    placeTitle: 'Панорамный ресторан',
    placeSubtitle: 'Терраса на крыше',
    guests: '80 человек',
    team: '48 специалистов',
    budget: '≈ 3 млн. руб.',
    to: '/portfolio/alexey-i-sofya',
  },
  {
    id: 'dmitry-natalia',
    imageUrl: coupleDN,
    coupleName: 'Дмитрий и Наталья',
    concept: 'Концепция «Сад мечты»',
    placeTitle: 'Усадьба за городом',
    placeSubtitle: 'Теплая оранжерея',
    guests: '65 человек',
    team: '37 специалистов',
    budget: '≈ 2,5 млн. руб.',
    to: '/portfolio/dmitry-i-natalya',
  },
];

export function PortfolioPage() {
  return (
    <section className="page page--portfolio">
      <PageHeader
        backgroundImage={headerImage}
        title="Блог"
        bottomText="Полезные статьи о свадьбах и подготовке"
        onCtaClick={() => console.log('Записаться')}
      />
      <Container>
        <div className="portfolio-head">
          <h1 className="portfolio-head__title">Портфолио</h1>
          <p className="portfolio-head__text">
            Наше портфолио — не просто статичная галерея. Мы рассказываем о
            наших свадьбах в виде подробных кейсов: увлекательные истории любви,
            уникальные концепции, эскизы декора, комментарии от свадебных
            специалистов, фото и видео-экстейджи и многое другое. Приятного
            просмотра!
          </p>
          <p className="portfolio-head__text portfolio-head__text--ps">
            P.S. Рекомендуем смотреть портфолио с компьютерной версии сайта. Но
            если вы всё-таки смотрите с мобильного телефона, наберитесь
            терпения. Посмотреть одну свадьбу — это значит погрузиться в
            12-часовой свадебный день.
          </p>
        </div>

        <div className="portfolio-list">
          {weddings.map((wedding) => (
            <WeddingPreview
              key={wedding.id}
              imageUrl={wedding.imageUrl}
              coupleName={wedding.coupleName}
              concept={wedding.concept}
              placeTitle={wedding.placeTitle}
              placeSubtitle={wedding.placeSubtitle}
              guests={wedding.guests}
              team={wedding.team}
              budget={wedding.budget}
              to={wedding.to}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
