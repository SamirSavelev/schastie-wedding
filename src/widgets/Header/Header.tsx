import { useEffect, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Container } from '@shared/ui/Container/Container';
import logo from '@assets/logo.png';

import { darkHeaderPages } from '@shared/constants/darkHeaderPages';
import '@widgets/Header/Header.scss';
import { navigationLinks } from '@shared/constants/navigationLinks';

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const { pathname } = useLocation();
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    if (darkHeaderPages.includes(pathname)) {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  }, [pathname]);

  return (
    <header
      className={`header${
        isScrolled ? ' header--scrolled' : ''
      } header__${theme}`}
      role="banner"
    >
      <Container>
        <div className="header__inner">
          <a
            href="/"
            className="topbar__logo"
            aria-label="Свадебное агентство «Счастье»"
          >
            <img
              src={logo}
              className="topbar__logo-image"
              alt="Свадебное агентство «Счастье»"
            />
          </a>

          <div className="navbar__inner">
            {navigationLinks.map(({ to, label, end }) => (
              <NavLink
                key={to}
                to={to}
                end={end}
                className={({ isActive }) =>
                  `nav-link${isActive ? ' is-active' : ''}`
                }
              >
                {label}
              </NavLink>
            ))}
          </div>

          <div className="topbar__contacts">
            <a className="contact-link" href="tel:+79372899055">
              +7&nbsp;(937)&nbsp;289-90-55
            </a>
            <span className="contact-text">Свадебное агентство г.Казань</span>
          </div>
        </div>
      </Container>
    </header>
  );
};
