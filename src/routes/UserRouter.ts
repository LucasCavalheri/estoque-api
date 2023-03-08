import { Router } from 'express';
import { CreateUserController } from '../controllers/User/CreateUserController';

const router = Router();

router.post('/', new CreateUserController().handle)

export default router;
