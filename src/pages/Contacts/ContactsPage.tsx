import { useCallback, useEffect, useState, type FormEventHandler } from "react";
import { Container } from "@shared/ui/Container/Container";

import "./ContactsPage.scss";
import { NETWORKS } from "@shared/constants";
import { Button, Text, TextField } from "@shared/ui";
import type { TextFieldProps } from "@shared/ui/TextField/TextField";
import { useNotify } from "@context/hooks";
import { sendToTelegram } from "@app/api/telegramApi";
import { Helmet } from "react-helmet-async";
import { PolicyTitle } from "@shared/ui/PolicyTitle/PolicyTitle";

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
export const ContactsPage = () => {
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
    <section className="contacts" aria-labelledby="contacts-title">
      <Helmet>
        <title>Контакты | Счастье — планирование свадеб в Казани</title>
      </Helmet>
      <Container>
        <h1 id="contacts-title" className="contacts__title">
          Контакты
        </h1>

        <p className="contacts__lead">
          Мы всегда открыты для общения и готовы помочь вам организовать
          праздник вашей мечты.
        </p>

        <div className="contacts__grid">
          <div className="contacts__card">
            <Text weight="bold">Напишите нам</Text>

            <form
              className="home-banner__form"
              onSubmit={handleSubmit}
              noValidate
              style={{ marginTop: "12px" }}
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

          {/* Контакты */}
          <div className="contacts__card contacts__info">
            <Text weight="bold">Наши контакты</Text>
            <ul className="contacts__list">
              <li>
                <span className="contacts__item-title">Тел.:</span>
                <a href="tel:+79372899055" className="contacts__link">
                  8 (937) 289-90-55
                </a>
                <span className="contacts__dot"> • </span>

                <a href="tel:+79376260255" className="contacts__link">
                  8 (937) 626-02-55
                </a>
              </li>
              <li>
                <span className="contacts__item-title">Город:</span>
                <span className="contacts__text">г. Казань</span>
              </li>
              <li>
                <span className="contacts__item-title">Время работы:</span>
                <span className="contacts__text">24 часа</span>
              </li>
              <li>
                <span className="contacts__item-title">Почта:</span>
                <a
                  href="mailto:schastie.kazan@gmail.com"
                  className="contacts__link"
                >
                  schastie.kazan@gmail.com
                </a>
              </li>
            </ul>

            <div className="contacts__socials" aria-label="Социальные сети">
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
        </div>
        <div className="contacts__work-with-us">
          <Text align="center" font="helvetica">
            Хотите работать с нами? Мы всегда открыты для талантливых и надёжных
            профессионалов. Если вы разделяете наш подход к качеству, вниманию к
            деталям и любви к празднику,{" "}
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSfZyzb7ZYTBet2-du6HiajqhWywRhXOB-InWCxIMLzgkS4pKg/viewform?usp=publish-editor"
              target="_blank"
              rel="noreferrer"
              style={{
                textDecoration: "underline",
              }}
            >
              {" "}
              заполните форму
            </a>{" "}
            — мы свяжемся с вами и обсудим возможное сотрудничество.
          </Text>
        </div>
      </Container>
    </section>
  );
};
