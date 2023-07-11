import axios from 'axios';
import { TConversation } from '@/server/types';
import { errorHandler } from '@/utils/error-handler';

export async function sendMessageToChatGPT(
  messages: TConversation,
): Promise<string> {
  const API_URL = 'https://api.openai.com/v1/chat/completions';
  const headers = {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${process.env.OPEN_AI_API_KEY}`,
  };

  const payload = {
    max_tokens: 500,
    model: 'gpt-3.5-turbo',
    temperature: 0,
    messages,
  };

  try {
    const response = await axios.post(API_URL, payload, { headers });
    return response.data.choices[0].message;
  } catch (error: any) {
    return Promise.reject(errorHandler(error));
  }
}
