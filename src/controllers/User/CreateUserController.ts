import { Request, Response } from 'express';
import { CreateUserService } from '../../services/User/CreateUserService';
import { UserRequest } from '../../models/interfaces/User/interfaces/UserRequest';

class CreateUserController {
  async handle(req: Request, res: Response) {
    const { name, email, password }: UserRequest = req.body;
    const createUserService = new CreateUserService();

    const user = await createUserService.execute({ name, email, password });

    return res.status(201).json(user);
  }
}

export { CreateUserController };
