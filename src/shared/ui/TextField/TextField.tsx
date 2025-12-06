import type { InputHTMLAttributes, ReactNode } from 'react';
import classNames from 'classnames';

import './TextField.scss';

export interface TextFieldProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, 'className'> {
  label?: ReactNode;
  wrapperClassName?: string;
  inputClassName?: string;
}

export const TextField = ({
  label,
  wrapperClassName,
  inputClassName,
  ...inputProps
}: TextFieldProps) => (
  <label className={classNames('text-field', wrapperClassName)}>
    {!!label && <span className="text-field__label">{label}</span>}

    <input
      {...inputProps}
      className={classNames('text-field__input', inputClassName)}
    />
  </label>
);
