import { Request, Response } from 'express';
import { RemoveUserService } from '../../services/User/RemoveUserService';

export class RemoveUserController {
  async handle(req: Request, res: Response)  {
    const user_id = req?.query.user_id as string;

    const removeUserService = new RemoveUserService();

    const removeUser = await removeUserService.execute({ user_id });

    return res.status(204).json(removeUser);
  }
}
