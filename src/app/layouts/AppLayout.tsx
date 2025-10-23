import { Outlet } from 'react-router-dom';
import { Header } from '@widgets/Header/Header';
import { Footer } from '@widgets/Footer/Footer';
import '@app/layouts/AppLayout.scss';

export function AppLayout() {
  return (
    <div className="app">
      <Header />
      <main id="main" className="app__content">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
