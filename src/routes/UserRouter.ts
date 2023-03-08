import { Router } from 'express';
import { AuthUserController } from '../controllers/User/AuthUserController';
import { CreateUserController } from '../controllers/User/CreateUserController';

const router = Router();

// http://localhost:3000/user

router.post('/', new CreateUserController().handle)
router.post('/session', new AuthUserController().handle);

export default router;
