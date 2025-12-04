import { createBrowserRouter } from 'react-router-dom';
import { AppLayout } from '@app/layouts/AppLayout';
import { HomePage } from '@pages';
import { ServicesPage } from '@pages/Services/ServicesPage';
import { PortfolioPage } from '@pages/Portfolio/PortfolioPage';
import { BlogPage } from '@pages/Blog/BlogPage';
import { AboutPage } from '@pages/About/AboutPage';
import { ContactsPage } from '@pages/Contacts/ContactsPage';
import { ArticleOrg } from '@pages/Articles';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: 'services', element: <ServicesPage /> },
      { path: 'portfolio', element: <PortfolioPage /> },
      { path: 'blog', element: <BlogPage /> },
      { path: 'about', element: <AboutPage /> },
      { path: 'contacts', element: <ContactsPage /> },
      {
        path: 'blog/svadebnyy-organizator-i-koordinator',
        element: <ArticleOrg />,
      },
      {
        path: 'blog/svadebnyy-organizator-i-koordinator',
        element: <ArticleOrg />,
      },
      {
        path: '/portfolio/mikhail-i-vera',
        element: <div>Mikhail i Vera Page</div>,
      },
    ],
  },
]);
