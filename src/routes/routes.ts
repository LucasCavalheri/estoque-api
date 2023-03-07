import { Router, Request, Response } from 'express';

const router = Router();

router.get('/test', (_req: Request, res: Response) => {
  return res.json({ working: true });
});

export { router };