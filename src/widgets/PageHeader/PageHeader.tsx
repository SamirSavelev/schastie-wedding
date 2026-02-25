import type { FC } from "react";
import { CtaButton, Text } from "@shared/ui";
import "./PageHeader.scss";

interface Props {
  title: string;
  bottomText: string;
  backgroundDesktop: string;
  backgroundMobile?: string;
  backgroundAlt?: string;
}

export const PageHeader: FC<Props> = ({
  title,
  bottomText,
  backgroundDesktop,
  backgroundMobile,
  backgroundAlt = "",
}) => (
  <div className="page-header" role="banner">
    <picture className="page-header__bg" aria-hidden="true">
      {backgroundMobile && (
        <source media="(max-width: 720px)" srcSet={backgroundMobile} />
      )}
      <img
        className="page-header__bg-img"
        src={backgroundDesktop}
        alt={backgroundAlt}
        decoding="async"
        fetchPriority="high"
      />
    </picture>

    <div className="page-header__overlay" />

    <div className="page-header__content">
      <Text variant="h1" color="white" textTransform="uppercase">
        {title}
      </Text>
      <CtaButton />
    </div>

    <div className="page-header__circle">
      <Text
        variant="body1"
        color="black"
        textTransform="uppercase"
        align="center"
      >
        {bottomText}
      </Text>
    </div>
  </div>
);
