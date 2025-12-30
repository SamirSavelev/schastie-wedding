import { createBrowserRouter } from "react-router-dom";
import { AppLayout } from "@app/layouts/AppLayout";
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
} from "@pages";
import { PrivacyPage } from "@pages/Privacy";

export const router = createBrowserRouter([
  {
    path: "/",
    children: [
      {
        index: true,
        element: (
          <AppLayout>
            <HomePage />
          </AppLayout>
        ),
      },
      {
        path: "services",
        element: (
          <AppLayout>
            <ServicesPage />
          </AppLayout>
        ),
      },
      {
        path: "portfolio",
        element: (
          <AppLayout>
            <PortfolioPage />
          </AppLayout>
        ),
      },
      {
        path: "blog",
        element: (
          <AppLayout>
            <BlogPage />
          </AppLayout>
        ),
      },
      {
        path: "about",
        element: (
          <AppLayout>
            <AboutPage />
          </AppLayout>
        ),
      },
      {
        path: "contacts",
        element: (
          <AppLayout>
            <ContactsPage />
          </AppLayout>
        ),
      },
      {
        path: "reviews",
        element: (
          <AppLayout>
            <ReviewsPage />
          </AppLayout>
        ),
      },
      {
        path: "blog/:id",
        element: (
          <AppLayout>
            <Article />
          </AppLayout>
        ),
      },
      {
        path: "portfolio/:id",
        element: (
          <AppLayout>
            <PortfolioWedding />
          </AppLayout>
        ),
      },
      {
        path: "*",
        element: (
          <AppLayout theme="light">
            <Page404 />
          </AppLayout>
        ),
      },
      {
        path: "privacy",
        element: <PrivacyPage />,
      },
    ],
  },
]);
