import { useModal } from "@context/hooks";
import "./CtaButton.scss";

export const CtaButton = () => {
  const { showModal } = useModal();
  return (
    <button type="button" className="cta-button" onClick={showModal}>
      Записаться на встречу
    </button>
  );
};
