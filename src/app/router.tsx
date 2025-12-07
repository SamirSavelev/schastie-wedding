import { createBrowserRouter } from 'react-router-dom';
import { AppLayout } from '@app/layouts/AppLayout';
import {
  Article,
  HomePage,
  Page404,
  ServicesPage,
  PortfolioPage,
  BlogPage,
  AboutPage,
  ContactsPage,
  PortfolioWedding,
  ReviewsPage,
} from '@pages';

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
      { path: 'reviews', element: <ReviewsPage /> },
      { path: 'blog/:id', element: <Article /> },
      { path: 'portfolio/:id', element: <PortfolioWedding /> },
      { path: '*', element: <Page404 /> },
    ],
  },
]);
