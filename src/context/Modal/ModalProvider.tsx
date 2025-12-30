import { useCallback, useState, type FC, type PropsWithChildren } from "react";
import { ModalContext } from "./ModalContext";
import { Modal } from "@widgets";

const { Provider } = ModalContext;

export const ModalProvider: FC<PropsWithChildren> = ({ children }) => {
  const [isVisible, setIsVisible] = useState(false);

  const showModal = useCallback(() => {
    setIsVisible(true);
  }, []);

  const hideModal = useCallback(() => {
    setIsVisible(false);
  }, []);

  return (
    <Provider value={{ showModal, hideModal }}>
      {children}
      <Modal isVisible={isVisible} hideModal={hideModal} />
    </Provider>
  );
};
