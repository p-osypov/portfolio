// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.setHeader('Content-Type', 'text/html; charset=utf-8');
  res.status(200).send('<h1>Yeah, it works!!! 😜</h1>');
}
