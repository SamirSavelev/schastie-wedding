import type { FC } from "react";
import { Text } from "../Text";

export const PolicyTitle: FC = () => {
  return (
    <Text variant="caption">
      Нажимая на кнопку, вы соглашаетесь с{" "}
      <a
        href="/privacy"
        rel="noopener noreferrer"
        target="_blank"
        style={{
          textDecoration: "underline",
        }}
      >
        политикой в отношении обработки персональных данных.{" "}
      </a>
    </Text>
  );
};
