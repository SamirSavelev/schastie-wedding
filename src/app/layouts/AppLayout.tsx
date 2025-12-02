import { Outlet } from 'react-router-dom';
import { Header } from '@widgets/Header/Header';
import { Footer } from '@widgets/Footer/Footer';
import '@app/layouts/AppLayout.scss';
import { SocialFloating } from '@widgets/SocialFloating/SocialFloating';

export const AppLayout = () => (
  <div className="app">
    <Header />
    <main id="main" className="app__content">
      <Outlet />
      <SocialFloating />
    </main>
    <Footer />
  </div>
);
