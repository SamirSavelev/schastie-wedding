import { useEffect, useRef, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Container } from '@shared/ui/Container/Container';
import { navigationLinks } from './constants';
import logo from '@assets/logo.png';
import '@widgets/Header/Header.scss';

export const Header = () => {
  const topbarRef = useRef<HTMLDivElement | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const el = topbarRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => setIsScrolled(!entry.isIntersecting),
      { threshold: 0 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <div className="topbar" role="banner" ref={topbarRef}>
        <Container>
          <div className="topbar__inner">
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
            <div className="topbar__contacts">
              <a className="contact-link" href="tel:+79372899055">
                +7&nbsp;(937)&nbsp;289-90-55
              </a>
              <span className="contact-text">Свадебное агентство г.Казань</span>
            </div>
          </div>
        </Container>
      </div>

      <div
        className={`navbar${isScrolled ? ' navbar--scrolled' : ''}`}
        role="navigation"
        aria-label="Главная навигация"
      >
        <Container>
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
        </Container>
      </div>
    </>
  );
};
