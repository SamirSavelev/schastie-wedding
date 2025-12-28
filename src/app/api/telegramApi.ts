import {
  TELEGRAM_BOT_TOKEN,
  TELEGRAM_CHAT_ID,
} from "@shared/constants/telegram-token";
import axios from "axios";

export const sendToTelegram = async (name: string, phone: string) => {
  const message = `
    📝 **Новая заявка**:
    👤 Имя: ${name}
    📱 Телефон: ${phone}
  `;
  const url = `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`;

  try {
    const response = await axios.post(url, {
      chat_id: TELEGRAM_CHAT_ID,
      text: message,
      parse_mode: "Markdown",
    });

    console.log("response", response.data);
    return Promise.resolve(response.data);
  } catch (error) {
    console.error("Ошибка при отправке сообщения в Telegram:", error);
    return Promise.reject(error);
  }
};
