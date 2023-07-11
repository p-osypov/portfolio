// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import { sendMessageToChatGPT } from '@/server/chatGPT';

export default async function conversation(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  try {
    const response = await sendMessageToChatGPT(req.body.conversation);
    res.status(200).send(response);
  } catch (error: any) {
    res.status(error.status).send(error);
  }
}
