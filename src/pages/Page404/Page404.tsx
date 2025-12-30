import { Text } from "@shared/ui";
import "@app/layouts/AppLayout.scss";
import "./Page404.scss";
import { Helmet } from "react-helmet-async";

export const Page404 = () => (
  <main id="main" className="app__content page-404">
    <Helmet>
      <title>
        Страница не найдена | Счастье — планирование свадеб в Казани
      </title>
    </Helmet>
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
