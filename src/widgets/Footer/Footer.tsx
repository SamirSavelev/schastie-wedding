import { Container } from '@shared/ui/Container/Container';
import '@widgets/Footer/Footer.scss';

export function Footer() {
  return (
    <footer className="site-footer" role="contentinfo">
      <Container>
        <div className="site-footer__inner">
          <div>© {new Date().getFullYear()} Свадебное агентство «Счастье»</div>
          <div>Казань • Пн-Вс 10:00–20:00 • +7 843 000-00-00</div>
        </div>
      </Container>
    </footer>
  );
}
