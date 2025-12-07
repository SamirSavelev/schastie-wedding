import classNames from 'classnames';
import { Container, Text } from '@shared/ui';
import {
  SERVICES_PRICES_TITLE,
  SERVICES_PRICES_LEAD,
  SERVICES_PRICES_ITEMS,
  SERVICES_PRICES_COLUMNS,
  SERVICE_TABLE_POST_NOTE,
} from '@shared/constants';

import './ServicesPricesSection.scss';

export const ServicesPricesSection = () => (
  <section className="services-prices" aria-labelledby="services-prices-title">
    <Container>
      <header className="services-prices__header">
        <Text
          variant="h3"
          textTransform="uppercase"
          align="center"
          className="services-prices__title"
        >
          {SERVICES_PRICES_TITLE}
        </Text>

        <Text variant="body1" font="helvetica" weight="light" align="center">
          {SERVICES_PRICES_LEAD}
        </Text>
      </header>

      <div className="services-prices__table-wrapper">
        <table className="services-prices__table">
          <thead>
            <tr className="services-prices__row services-prices__row--head">
              {SERVICES_PRICES_COLUMNS.map(({ id, label }) => (
                <th
                  key={id}
                  className={classNames(
                    'services-prices__cell',
                    'services-prices__cell--head'
                  )}
                >
                  <Text variant="body1" weight="bold" textTransform="uppercase">
                    {label}
                  </Text>
                </th>
              ))}
            </tr>
          </thead>

          <tbody>
            {SERVICES_PRICES_ITEMS.map((item, index) => (
              <tr
                key={item.id}
                className={classNames('services-prices__row', {
                  'services-prices__row--section-start':
                    index === 10 || index === 21,
                })}
              >
                {SERVICES_PRICES_COLUMNS.map((column) => (
                  <td
                    key={column.id}
                    className={classNames(
                      'services-prices__cell',
                      'services-prices__cell--body',
                      `services-prices__cell--col-${column.id}`
                    )}
                  >
                    <Text
                      variant="body1"
                      textTransform={
                        column.id === 'comment' ? 'none' : 'uppercase'
                      }
                      font={column.id !== 'name' ? 'helvetica' : 'body'}
                      weight={
                        column.id === 'name'
                          ? 'bold'
                          : column.id === 'comment'
                          ? 'light'
                          : 'medium'
                      }
                    >
                      {item[column.id]}
                    </Text>
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>

        <Text variant="body3" font="helvetica">
          {SERVICE_TABLE_POST_NOTE}
        </Text>
      </div>
    </Container>
  </section>
);
