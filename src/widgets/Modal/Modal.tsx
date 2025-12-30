import {
  useCallback,
  useEffect,
  useRef,
  useState,
  type FC,
  type FormEventHandler,
} from "react";
import cn from "classnames";
import "./Modal.scss";
import { Button, Text, TextField } from "@shared/ui";
import type { TextFieldProps } from "@shared/ui/TextField/TextField";
import { useNotify } from "@context/hooks";
import { sendToTelegram } from "@app/api/telegramApi";
import { PolicyTitle } from "@shared/ui/PolicyTitle/PolicyTitle";

interface ModalProps {
  isVisible: boolean;
  hideModal(): void;
}

interface ValidationItemState {
  error: string;
  isValid: boolean;
  isTouched?: boolean;
}

interface ValidationState {
  name: ValidationItemState;
  phone: ValidationItemState;
}

interface Form {
  name: string;
  phone: string;
}

const initialValidationState: ValidationState = {
  name: { error: "", isValid: false, isTouched: false },
  phone: { error: "", isValid: false, isTouched: false },
};

const initialFormState: Form = {
  name: "",
  phone: "",
};

const PHONE_REGEX = /^(?:\+7|8)\d{10}$/;

const cleanPhoneNumber = (phone: string) => {
  const cleanedPhone = phone.replace(/[^0-9+]/g, "");
  if (cleanedPhone.startsWith("+") && cleanedPhone.length > 1) {
    return cleanedPhone;
  } else {
    return cleanedPhone.replace(/^(\+)?(7|8)/, "8");
  }
};

const getTextFieldStatus = (
  item: ValidationItemState
): TextFieldProps["status"] => {
  if (!item.isTouched) return "default";
  return item.isValid ? "success" : "error";
};
export const Modal: FC<ModalProps> = ({ isVisible, hideModal }) => {
  const modalRef = useRef<HTMLDivElement>(null);
  const bodyOverflowRef = useRef<string>("");

  const [validation, setValidation] = useState<ValidationState>(
    initialValidationState
  );
  const [form, setForm] = useState<Form>(initialFormState);
  const { showNotify } = useNotify();

  const handleSubmit: FormEventHandler<HTMLFormElement> = useCallback(
    async (e) => {
      e.preventDefault();

      const isNameValid = form.name.trim().length > 0;
      const isPhoneValid = PHONE_REGEX.test(form.phone.trim());

      setValidation(() => ({
        name: {
          isValid: isNameValid,
          error: isNameValid ? "" : "Введите имя",
          isTouched: true,
        },
        phone: {
          isValid: isPhoneValid,
          error: isPhoneValid ? "" : "Введите корректный номер телефона",
          isTouched: true,
        },
      }));

      if (!isNameValid || !isPhoneValid) {
        showNotify("Пожалуйста, заполните форму корректно.", "error");
        return;
      }

      try {
        await sendToTelegram(form.name, form.phone);
        showNotify("Ваша заявка успешно отправлена!", "success");
        setForm(initialFormState);
        hideModal();
      } catch {
        showNotify(
          "Произошла ошибка при отправке заявки. Пожалуйста, попробуйте еще раз.",
          "error"
        );
      }
    },
    [form, showNotify, hideModal]
  );

  const validate = useCallback(() => {
    setValidation((prev) => {
      const nameIsValid = form.name.trim().length > 0;
      const phoneIsValid = PHONE_REGEX.test(form.phone.trim());

      return {
        name: {
          isValid: prev.name.isTouched ? nameIsValid : true,
          error: nameIsValid || !prev.name.isTouched ? "" : "Введите имя",
        },
        phone: {
          isValid: prev.phone.isTouched ? phoneIsValid : true,
          error: prev.phone.isTouched
            ? phoneIsValid
              ? ""
              : "Введите корректный номер телефона"
            : "",
        },
      };
    });
  }, [form]);

  useEffect(() => {
    validate();
  }, [validate]);

  useEffect(() => {
    const handleEscKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        hideModal();
      }
    };

    const body = document.body;

    if (isVisible) {
      bodyOverflowRef.current = body.style.overflow;
      const scrollBarWidth =
        window.innerWidth - document.documentElement.clientWidth;
      body.style.overflow = "hidden";
      if (scrollBarWidth > 0) {
        body.style.paddingRight = `${scrollBarWidth}px`;
      }

      document.addEventListener("keydown", handleEscKey);
    } else {
      setTimeout(() => {
        body.style.overflow = bodyOverflowRef.current;
        body.style.paddingRight = "0";
      }, 300);
    }

    return () => {
      document.removeEventListener("keydown", handleEscKey);
    };
  }, [isVisible, hideModal]);

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (
        modalRef.current &&
        !modalRef.current.contains(event.target as Node)
      ) {
        hideModal();
      }
    };

    if (isVisible) {
      document.addEventListener("mousedown", handleOutsideClick);
    }

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [isVisible, hideModal]);

  useEffect(() => {
    if (!isVisible) {
      setForm(initialFormState);
      setValidation(initialValidationState);
    }
  }, [isVisible]);

  return (
    <div className={cn("Modal", isVisible && "Modal--visible")}>
      <div
        ref={modalRef}
        className={cn("Modal__container")}
        role="dialog"
        aria-modal="true"
        aria-labelledby="Modal__title"
      >
        <div className="Modal__close">
          <div onClick={hideModal}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M18.5558 18.5628C17.9899 19.1287 17.0744 19.1287 16.5168 18.5711L11.9896 14.0439L7.47063 18.5628C6.90472 19.1287 5.98928 19.1287 5.4317 18.5711C4.87411 18.0135 4.87411 17.0981 5.44002 16.5322L9.96728 12.0049L5.42338 7.46102C4.85747 6.89511 4.86579 5.98799 5.4317 5.42208C5.99761 4.85617 6.91305 4.85617 7.47063 5.41376L11.9979 9.94102L16.5252 5.41376C17.0911 4.84785 18.0065 4.84785 18.5641 5.40544C19.1217 5.96302 19.1217 6.87846 18.5558 7.44437L14.0285 11.9716L18.5558 16.4989C19.1217 17.0648 19.1134 17.9719 18.5475 18.5378L18.5558 18.5628Z"
                fill="black"
              />
            </svg>
          </div>
        </div>
        <div className="Modal__content">
          <Text
            variant="subtitle"
            weight="semibold"
            align="center"
            textTransform="uppercase"
          >
            Записаться на консультацию
          </Text>
          <form
            className="home-banner__form"
            onSubmit={handleSubmit}
            noValidate
            style={{
              marginTop: "12px",
            }}
          >
            <TextField
              label="Имя"
              placeholder="Как вас зовут?"
              type="text"
              name="name"
              value={form.name}
              onChange={(e) =>
                setForm((prev) => ({
                  ...prev,
                  name: e.target.value,
                }))
              }
              autoComplete="name"
              required
              status={getTextFieldStatus(validation.name)}
              statusMessage={validation.name.error}
            />

            <TextField
              label="Телефон"
              placeholder="Введите номер телефона"
              type="tel"
              name="phone"
              value={form.phone}
              onChange={(e) => {
                const cleanedPhone = cleanPhoneNumber(e.target.value);
                setForm((prev) => ({
                  ...prev,
                  phone: cleanedPhone,
                }));
              }}
              autoComplete="tel"
              required
              status={getTextFieldStatus(validation.phone)}
              statusMessage={validation.phone.error}
            />

            <Button variant="primary" type="submit" size="lg">
              ОТПРАВИТЬ
            </Button>

            <PolicyTitle />
          </form>
        </div>
      </div>
    </div>
  );
};
