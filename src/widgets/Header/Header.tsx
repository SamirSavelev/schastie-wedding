import { useEffect, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Container, Text } from '@shared/ui';
import logo from '@assets/logo.png';
import { slide as Menu } from 'react-burger-menu';
import { whiteHeaderPages } from '@shared/constants/darkHeaderPages';
import { navigationLinks } from '@shared/constants/navigationLinks';
import cn from 'classnames';
import PhoneIcon from '@assets/icons/phone.svg';
import '@widgets/Header/Header.scss';

export const Header = () => {
  const [isOpenBurgerMenu, setIsOpenBurgerMenu] = useState(false);
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
    if (!whiteHeaderPages.includes(pathname)) {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  }, [pathname]);

  useEffect(() => {
    if (isOpenBurgerMenu) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [isOpenBurgerMenu]);

  return (
    <header
      className={cn('header', `header--${theme}`, {
        'header--scrolled': isScrolled,
      })}
      role="banner"
    >
      <Container>
        <div className="header__inner">
          <a
            href="/"
            className="header__logo"
            aria-label="Свадебное агентство «Счастье»"
          >
            <img
              src={logo}
              className="header__logo-image"
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
                  cn('navbar__link', { 'navbar__link--active': isActive })
                }
              >
                {label}
              </NavLink>
            ))}
          </div>
          <Text
            variant="body1"
            color="pink"
            textTransform="uppercase"
            weight="bold"
            className="header__slogan"
          >
            Свадебное агентство «Счастье»
          </Text>

          <Menu
            right
            className="navbar__burger-menu"
            isOpen={isOpenBurgerMenu}
            onStateChange={({ isOpen }) => setIsOpenBurgerMenu(isOpen)}
          >
            {navigationLinks.map(({ to, label, end }) => (
              <NavLink
                key={to}
                to={to}
                end={end}
                className="navbar__burger-menu__item"
                onClick={() => setIsOpenBurgerMenu(false)}
              >
                {label}
              </NavLink>
            ))}
          </Menu>

          <div className="header__contacts">
            <a href="tel:+79372899055">
              <span className="contact-link">+7&nbsp;(937)&nbsp;289-90-55</span>
              <img src={PhoneIcon} alt="Телефон" className="contact-icon" />
            </a>
            <span className="contact-text">Свадебное агентство г.Казань</span>
          </div>
        </div>
      </Container>
    </header>
  );
};
