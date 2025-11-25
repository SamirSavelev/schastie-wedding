import { Container } from '@shared/ui/Container/Container';
import elena from '@assets/team/elena.png';
import lyudmila from '@assets/team/lyudmila.png';
import './AboutPage.scss';

export const AboutPage = () => (
  <section className="about">
    <Container>
      <h1 className="about__title">О нас</h1>
      <p className="about__lead">
        Команда «Счастья» — опытные организаторы, дизайнеры и координаторы.
      </p>

      <div className="about__mission">
        Каждый человек приходит в этот мир со своей миссией. Высшее и
        нескончаемое счастье – это понять, зачем ты был рожден.
      </div>

      <div className="about__team">
        {/* Елена */}
        <article className="person">
          <div className="person__media">
            <div className="person__photo">
              <img
                src={elena}
                alt="Тихонова Елена — Организатор"
                loading="lazy"
              />
            </div>
          </div>
          <div className="person__content">
            <h3 className="person__name">Тихонова Елена</h3>
            <p className="person__role">Организатор</p>
            <blockquote className="person__quote">
              «Что для меня «Счастье»? Это не просто любимая работа — это
              удовольствие делать людей вокруг чуточку счастливее, радовать и
              удивлять. Ежедневно нас окружает красота и любовь, настоящие и
              искренние чувства двух сердец, которые бьются в унисон. Команда
              профессионалов, с которой не первый год работает «Счастье» — это
              люди, горящие идеей, вдохновленные творчеством. И для меня большая
              удача — быть в этом мире, создавать сказку для вас!»
            </blockquote>
          </div>
        </article>

        {/* Людмила (зеркально) */}
        <article className="person person--reverse">
          <div className="person__media">
            <div className="person__photo">
              <img
                src={lyudmila}
                alt="Соснова Людмила — Организатор"
                loading="lazy"
              />
            </div>
          </div>
          <div className="person__content">
            <h3 className="person__name">Соснова Людмила</h3>
            <p className="person__role">Организатор</p>
            <blockquote className="person__quote">
              «Много ли нужно человеку для полного счастья? Одна лишь любовь
              может сделать человека безмерно счастливым — это точно. С самого
              детства я верила в это волшебное чувство и, повзрослев, убедилась,
              что нет прекраснее влюбленных глаз. Занимаясь любимым делом, я
              каждый день не только чувствую любовь, я её вижу, прикасаюсь к
              ней, и самым счастливым для меня всегда остаётся знакомство с
              новой историей любви, воплощение которой доверяют нашей команде.
              Профессионализм, красота и любовь — залог моего счастья.»
            </blockquote>
          </div>
        </article>
      </div>
    </Container>
  </section>
);
