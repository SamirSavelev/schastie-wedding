import type { ButtonHTMLAttributes, ComponentProps, ReactNode } from 'react';
import { Link } from 'react-router-dom';
import cn from 'classnames';

import './Button.scss';

export type ButtonVariant = 'primary' | 'outline' | 'ghost';
export type ButtonSize = 'sm' | 'md' | 'lg';

interface ButtonBaseProps {
  children: ReactNode;
  className?: string;
  variant?: ButtonVariant;
  size?: ButtonSize;
  fullWidth?: boolean;
}

/**
 * Вариант как <button>
 */
type ButtonAsButtonProps = ButtonBaseProps &
  ButtonHTMLAttributes<HTMLButtonElement> & {
    as?: 'button';
    to?: never;
  };

/**
 * Вариант как <Link>
 */
type ButtonAsLinkProps = ButtonBaseProps &
  Omit<ComponentProps<typeof Link>, 'to'> & {
    as: 'link';
    to: string;
    type?: never;
  };

export type ButtonProps = ButtonAsButtonProps | ButtonAsLinkProps;

export const Button = (props: ButtonProps) => {
  const {
    children,
    className,
    variant = 'primary',
    size = 'md',
    fullWidth = false,
    as = 'button',
    ...rest
  } = props as ButtonProps & { as: 'button' | 'link' };

  const rootClassName = cn(
    'btn',
    `btn--${variant}`,
    `btn--size-${size}`,
    {
      'btn--full-width': fullWidth,
    },
    className
  );

  if (as === 'link') {
    const { to, ...linkProps } = rest as ButtonAsLinkProps;

    return (
      <Link to={to} className={rootClassName} {...linkProps}>
        {children}
      </Link>
    );
  }

  const buttonProps = rest as ButtonAsButtonProps;

  return (
    <button type="button" className={rootClassName} {...buttonProps}>
      {children}
    </button>
  );
};
