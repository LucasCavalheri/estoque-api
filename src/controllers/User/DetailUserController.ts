import { Request, Response } from 'express';
import { DetailUserService } from '../../services/User/DetailUserService';

export class DetailUserController {
  async handle(req: Request, res: Response) {
    const user_id = req?.user_id;

    const detailUserService = new DetailUserService();

    const user = await detailUserService.execute(user_id);

    if (!user) return res.status(404).json({ message: 'User not found' });

    return res.status(200).json(user);
  }
}
