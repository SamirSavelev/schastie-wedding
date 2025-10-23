import { createBrowserRouter } from 'react-router-dom';
import { AppLayout } from '@app/layouts/AppLayout';
import { HomePage } from '@pages/Home/HomePage';
import { ServicesPage } from '@pages/Services/ServicesPage';
import { PortfolioPage } from '@pages/Portfolio/PortfolioPage';
import { BlogPage } from '@pages/Blog/BlogPage';
import { BookPage } from '@pages/Book/BookPage';
import { AboutPage } from '@pages/About/AboutPage';
import { ContactsPage } from '@pages/Contacts/ContactsPage';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: 'services', element: <ServicesPage /> },
      { path: 'portfolio', element: <PortfolioPage /> },
      { path: 'blog', element: <BlogPage /> },
      { path: 'book', element: <BookPage /> }, // «Книга»
      { path: 'about', element: <AboutPage /> },
      { path: 'contacts', element: <ContactsPage /> },
    ],
  },
]);
