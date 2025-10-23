import './ContactsPage.scss';

export function ContactsPage() {
  return (
    <section className="page">
      <h1 className="page__title">Контакты</h1>
      <address className="contacts">
        <div>Казань, ул. Пушкина, 10</div>
        <div>+7 843 000-00-00</div>
        <div>hello@schastie.wedding</div>
      </address>
    </section>
  );
}
