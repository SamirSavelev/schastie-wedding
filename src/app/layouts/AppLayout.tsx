import { Header } from "@widgets/Header/Header";
import { Footer } from "@widgets/Footer/Footer";
import { SocialFloating } from "@widgets/SocialFloating/SocialFloating";
import { useEffect, type FC, type PropsWithChildren } from "react";
import { useLocation, useNavigationType } from "react-router-dom";
import "@app/layouts/AppLayout.scss";

export const ScrollToTop = () => {
  const location = useLocation();
  const navigationType = useNavigationType();

  useEffect(() => {
    if (navigationType === "PUSH" || navigationType === "REPLACE") {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "auto",
      });
    }
  }, [location.pathname, navigationType]);

  return null;
};

export const AppLayout: FC<
  PropsWithChildren & {
    theme?: "light" | "dark";
  }
> = ({ children, theme }) => (
  <div className="app">
    <ScrollToTop />
    <Header theme={theme} />
    <main id="main" className="app__content">
      {children}
      <SocialFloating />
    </main>
    <Footer />
  </div>
);
