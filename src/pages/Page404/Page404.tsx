import { Text } from '@shared/ui';
import '@app/layouts/AppLayout.scss';
import './Page404.scss';

export const Page404 = () => (
  <main id="main" className="app__content page-404">
    <Text
      variant="h1"
      align="center"
      font="helvetica"
      weight="bold"
      className="page-404__code"
      color="pink"
    >
      404
    </Text>
    <Text
      variant="h1"
      align="center"
      font="helvetica"
      weight="bold"
      color="pink"
    >
      Страница не найдена
    </Text>
  </main>
);
