import { Router, Request, Response } from 'express';
import { sendMessageToChatGPT } from './chatGPT';
const router = Router();

router.post('/api/gpt', async (req: Request, res: Response) => {
  try {
    const response = await sendMessageToChatGPT(req.body.conversation);
    res.status(200).send(response);
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).send({
        message: error.message,
        status: 500,
      });
    }
  }
});

export default router;
