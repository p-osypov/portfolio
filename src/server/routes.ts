import { Router, Request, Response } from 'express';
import { sendMessageToChatGPT } from './chatGPT';
const router = Router();

router.post('/api/conversation', async (req: Request, res: Response) => {
  try {
    const response = await sendMessageToChatGPT(req.body.conversation);
    res.status(200).send(response);
  } catch (error: any) {
    res.status(error.status).send(error);
  }
});

export default router;
