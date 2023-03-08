import { Request, Response } from 'express';
import { AuthUserService } from '../../services/User/AuthUserService';
import { AuthRequest } from '../../auth/interfaces/AuthRequest';

class AuthUserController {
  async handle(req: Request, res: Response) {
    const { email, password }: AuthRequest = req.body;

    const authUserService = new AuthUserService();

    const auth = await authUserService.execute({ email, password });

    return res.status(200).json(auth);
  }
}

export { AuthUserController };

