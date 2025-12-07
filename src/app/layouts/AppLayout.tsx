import { Outlet } from 'react-router-dom';
import { Header } from '@widgets/Header/Header';
import { Footer } from '@widgets/Footer/Footer';
import { SocialFloating } from '@widgets/SocialFloating/SocialFloating';
import '@app/layouts/AppLayout.scss';
import { useEffect } from 'react';
import { useLocation, useNavigationType } from 'react-router-dom';

export const ScrollToTop = () => {
  const location = useLocation();
  const navigationType = useNavigationType();

  useEffect(() => {
    if (navigationType === 'PUSH' || navigationType === 'REPLACE') {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'auto',
      });
    }
  }, [location.pathname, navigationType]);

  return null;
};

export const AppLayout = () => (
  <div className="app">
    <ScrollToTop />
    <Header />
    <main id="main" className="app__content">
      <Outlet />
      <SocialFloating />
    </main>
    <Footer />
  </div>
);
