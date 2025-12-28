import { createContext } from "react";
import type { NotifyContextProps } from "./types";

export const NotifyContext = createContext<NotifyContextProps | undefined>(
  undefined
);
