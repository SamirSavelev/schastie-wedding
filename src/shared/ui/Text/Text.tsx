import type { ReactNode } from 'react';
import classNames from 'classnames';
import './Text.scss';

type TextTag = 'p' | 'span' | 'div' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

export type TextVariant =
  | 'h1'
  | 'h2'
  | 'h3'
  | 'subtitle'
  | 'body1'
  | 'body2'
  | 'body3'
  | 'caption';

export type TextFont = 'body' | 'helvetica';

export type TextColor = 'white' | 'black';

export type TextWeight = 'light' | 'regular' | 'medium' | 'semibold' | 'bold';

export type TextAlign = 'left' | 'center' | 'right';

export interface TextProps {
  children: ReactNode;
  as?: TextTag;
  variant?: TextVariant;
  font?: TextFont;
  color?: TextColor;
  weight?: TextWeight;
  align?: TextAlign;
  className?: string;
  textTransform?: 'uppercase' | 'lowercase' | 'capitalize' | 'none';
}

const defaultTagByVariant: Record<TextVariant, TextTag> = {
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
  subtitle: 'p',
  body1: 'p',
  body2: 'p',
  body3: 'p',
  caption: 'span',
};

export const Text = ({
  children,
  as,
  variant = 'body1',
  font = 'body',
  color = 'black',
  weight = 'regular',
  align = 'left',
  textTransform = 'none',
  className,
}: TextProps) => {
  const Tag: TextTag = as ?? defaultTagByVariant[variant];

  const classes = classNames(
    'text',
    `text--variant-${variant}`,
    `text--font-${font}`,
    `text--color-${color}`,
    `text--weight-${weight}`,
    `text--align-${align}`,
    `text--transform-${textTransform}`,
    className
  );

  return <Tag className={classes}>{children}</Tag>;
};
