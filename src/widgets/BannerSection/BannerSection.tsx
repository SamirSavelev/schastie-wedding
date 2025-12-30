import { useCallback, useEffect, useState, type FormEventHandler } from "react";
import InstagramIcon from "@assets/icons/instagram.svg";
import TelegramIcon from "@assets/icons/telegram.svg";
import VkIcon from "@assets/icons/vk.svg";
import WhatsappIcon from "@assets/icons/whatsapp.svg";

import {
  HOME_BANNER_EMAIL,
  HOME_BANNER_EMAIL_LINK,
  HOME_BANNER_FORM_TITLE,
  HOME_BANNER_PHONE,
  PHONE_LINK,
  HOME_BANNER_POLICY_TEXT,
  HOME_BANNER_TITLE_LINES,
  HOME_BANNER_TYPED_PHRASES,
  NETWORKS,
} from "@shared/constants";

import { Button, Container, Text, TextField, TypedLine } from "@shared/ui";

import "./BannerSection.scss";
import type { TextFieldProps } from "@shared/ui/TextField/TextField";
import { useNotify } from "@context/hooks";
import { sendToTelegram } from "@app/api/telegramApi";

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

export const BannerSection = () => {
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
      } catch {
        showNotify(
          "Произошла ошибка при отправке заявки. Пожалуйста, попробуйте еще раз.",
          "error"
        );
      }
    },
    [form, showNotify]
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

  return (
    <section className="home-banner" aria-labelledby="home-banner-title">
      <Container>
        <div className="home-banner__grid">
          <div className="home-banner__left">
            <Text
              variant="h3"
              className="home-banner__title"
              color="black"
              weight="regular"
              textTransform="uppercase"
            >
              {HOME_BANNER_TITLE_LINES.map((line) => (
                <span key={line}>{line}</span>
              ))}
            </Text>

            <TypedLine phrases={HOME_BANNER_TYPED_PHRASES} />

            <a href={PHONE_LINK}>
              <Text variant="h3" weight="light" font="helvetica">
                {HOME_BANNER_PHONE}
              </Text>
            </a>

            <a href={HOME_BANNER_EMAIL_LINK}>
              <Text variant="subtitle" weight="light" font="helvetica">
                {HOME_BANNER_EMAIL}
              </Text>
            </a>

            <div className="home-banner__socials" aria-label="Социальные сети">
              {NETWORKS.map(({ key, label, Icon, onClick }) => (
                <button
                  key={key}
                  type="button"
                  className={`home-banner__social`}
                  aria-label={label}
                  onClick={onClick}
                >
                  <span className="socials-floating__item-icon">
                    <img src={Icon} alt={label} />
                  </span>
                  <span className="socials-floating__item-tooltip">
                    {label}
                  </span>
                </button>
              ))}
            </div>
          </div>

          <div className="home-banner__right">
            <Text variant="subtitle">{HOME_BANNER_FORM_TITLE}</Text>
            <form
              className="home-banner__form"
              onSubmit={handleSubmit}
              noValidate
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

              <Text variant="caption">{HOME_BANNER_POLICY_TEXT}</Text>
            </form>
          </div>
        </div>
      </Container>
    </section>
  );
};
