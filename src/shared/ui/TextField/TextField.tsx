import type { InputHTMLAttributes, ReactNode } from "react";
import classNames from "classnames";

import "./TextField.scss";
import { Text } from "../Text/Text";

export interface TextFieldProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, "className"> {
  label?: ReactNode;
  wrapperClassName?: string;
  inputClassName?: string;
  status?: "default" | "error" | "success";
  statusMessage?: string;
}

export const TextField = ({
  label,
  wrapperClassName,
  inputClassName,
  statusMessage,
  ...inputProps
}: TextFieldProps) => (
  <label className={classNames("text-field", wrapperClassName)}>
    {!!label && <span className="text-field__label">{label}</span>}

    <input
      {...inputProps}
      className={classNames("text-field__input", inputClassName, {
        "text-field__input--error": inputProps.status === "error",
        "text-field__input--success": inputProps.status === "success",
      })}
    />
    {!!statusMessage && (
      <Text variant="body3" color="red" font="helvetica">
        {statusMessage}
      </Text>
    )}
  </label>
);
