import type { FC } from 'react';
import { CtaButton, Text } from '@shared/ui';

import './PageHeader.scss';

interface Props {
  backgroundImage: string;
  title: string;
  bottomText: string;
}

export const PageHeader: FC<Props> = ({
  backgroundImage,
  title,
  bottomText,
}) => (
  <div
    className="page-header"
    role="banner"
    style={{ backgroundImage: `url(${backgroundImage})` }}
  >
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
