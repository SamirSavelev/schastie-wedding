import { NavLink } from 'react-router-dom';
import { Container } from '@shared/ui/Container/Container';
import '@widgets/Header/Header.scss';

export function Header() {
  return (
    <header className="site-header" role="banner">
      <Container>
        <div
          className="site-header__inner"
          role="navigation"
          aria-label="Главная навигация"
        >
          <div className="site-header__brand">
            <a
              href="/"
              className="site-header__logo"
              aria-label="Свадебное агентство «Счастье»"
            >
              Счастье
            </a>
          </div>
          <nav className="site-header__nav">
            <NavLink
              to="/"
              end
              className={({ isActive }) =>
                isActive ? 'nav-link is-active' : 'nav-link'
              }
            >
              Главная
            </NavLink>
            <NavLink
              to="/services"
              className={({ isActive }) =>
                isActive ? 'nav-link is-active' : 'nav-link'
              }
            >
              Услуги
            </NavLink>
            <NavLink
              to="/portfolio"
              className={({ isActive }) =>
                isActive ? 'nav-link is-active' : 'nav-link'
              }
            >
              Портфолио
            </NavLink>
            <NavLink
              to="/blog"
              className={({ isActive }) =>
                isActive ? 'nav-link is-active' : 'nav-link'
              }
            >
              Блог
            </NavLink>
            <NavLink
              to="/book"
              className={({ isActive }) =>
                isActive ? 'nav-link is-active' : 'nav-link'
              }
            >
              Книга
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive ? 'nav-link is-active' : 'nav-link'
              }
            >
              О&nbsp;нас
            </NavLink>
            <NavLink
              to="/contacts"
              className={({ isActive }) =>
                isActive ? 'nav-link is-active' : 'nav-link'
              }
            >
              Контакты
            </NavLink>
          </nav>
        </div>
      </Container>
    </header>
  );
}
