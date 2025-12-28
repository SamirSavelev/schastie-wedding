export type NotifyType = "success" | "error";

export interface NotifyContextProps {
  showNotify(message: string, type: NotifyType): void;
}
