// src/pages/Services/components/PricesSection/ServicesPricesSection.tsx
import { Container } from '@shared/ui/Container/Container';
import {
  SERVICES_PRICES_TITLE,
  SERVICES_PRICES_LEAD,
  SERVICES_PRICES_ITEMS,
} from '@shared/constants';

import './ServicesPricesSection.scss';

export const ServicesPricesSection = () => {
  return (
    <section
      className="services-prices"
      aria-labelledby="services-prices-title"
    >
      <Container>
        <header className="services-prices__header">
          <h2 id="services-prices-title" className="services-prices__title">
            {SERVICES_PRICES_TITLE}
          </h2>
          <p className="services-prices__lead">{SERVICES_PRICES_LEAD}</p>
        </header>

        <div className="services-prices__table-wrapper">
          <table className="services-prices__table">
            <thead>
              <tr className="services-prices__row services-prices__row--head">
                <th className="services-prices__cell services-prices__cell--name">
                  Услуга
                </th>
                <th className="services-prices__cell services-prices__cell--tier">
                  Medium
                </th>
                <th className="services-prices__cell services-prices__cell--tier">
                  Pro
                </th>
                <th className="services-prices__cell services-prices__cell--tier">
                  Vip
                </th>
                <th className="services-prices__cell services-prices__cell--comment">
                  Комментарий
                </th>
              </tr>
            </thead>
            <tbody>
              {SERVICES_PRICES_ITEMS.map((item, index) => (
                <tr
                  key={item.id}
                  className={
                    'services-prices__row' +
                    (index === 10 || index === 21
                      ? ' services-prices__row--section-start'
                      : '')
                  }
                >
                  <td className="services-prices__cell services-prices__cell--name">
                    {item.name}
                  </td>
                  <td className="services-prices__cell services-prices__cell--tier">
                    {item.medium}
                  </td>
                  <td className="services-prices__cell services-prices__cell--tier">
                    {item.pro}
                  </td>
                  <td className="services-prices__cell services-prices__cell--tier">
                    {item.vip}
                  </td>
                  <td className="services-prices__cell services-prices__cell--comment">
                    {item.comment}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <p className="services-prices__note">
            Все указанные суммы являются ориентировочными и помогают
            сформировать общее представление о бюджете. Точные стоимости
            рассчитываются индивидуально после первой встречи и согласования
            концепции свадьбы.
          </p>
        </div>
      </Container>
    </section>
  );
};
