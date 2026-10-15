'use server';

import { ContactFormSchema, ContactType } from './contact.schema';

export async function SendTelegramMessage(data: ContactType) {
  const validationResult = ContactFormSchema.safeParse(data);

  if (!validationResult.success) {
    return {
      success: false,
      message: 'Invalid input data. Please check your fields.',
    };
  }
  const { name, email, subject, message } = validationResult.data;
  // 2. Fetch environment variables
  const botToken = process.env.TELEGRAM_BOT_TOKEN;
  const chatId = process.env.TELEGRAM_CHAT_ID;
  if (!botToken || !chatId) {
    console.error('Telegram environment variables missing.');
    return {
      success: false,
      message: 'Server configuration error. Please try again later.',
    };
  }
  const textMessage = `📬 *New Portfolio Message*\n\n👤 *Name:* ${name}\n📧 *Email:* ${email}\n📌 *Subject:* ${subject}\n\n💬 *Message:*\n${message}`;
  try {
    const response = await fetch(
      `https://api.telegram.org/bot${botToken}/sendMessage`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          chat_id: chatId,
          text: textMessage,
          parse_mode: 'Markdown',
        }),
      }
    );
    const resData = await response.json();
    if (!response.ok || !resData.ok) {
      console.error('Telegram API Error:', resData);
      return {
        success: false,
        message: 'Failed to send message via Telegram API.',
      };
    }
    return {
      success: true,
      message: 'Message sent successfully!',
    };
  } catch (error) {
    console.error('SendTelegramMessage Error:', error);
    return {
      success: false,
      message: 'An internal server error occurred. Please try again.',
    };
  }
}