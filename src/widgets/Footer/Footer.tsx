import { Container } from "@shared/ui/Container/Container";

import "@widgets/Footer/Footer.scss";

export const Footer = () => (
  <footer className="site-footer" role="contentinfo">
    <Container>
      <div className="site-footer__inner">
        <div>© {new Date().getFullYear()} Свадебное агентство «Счастье»</div>
        <div>Казань • Пн-Вс 10:00–20:00 • +7 937 289-90-55</div>
      </div>
    </Container>
  </footer>
);
