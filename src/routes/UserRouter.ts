import { Router } from 'express';
import { AuthUserController } from '../controllers/User/AuthUserController';
import { CreateUserController } from '../controllers/User/CreateUserController';
import { DetailUserController } from '../controllers/User/DetailUserController';
import { RemoveUserController } from '../controllers/User/RemoveUserController';
import { isAuthenticated } from '../middlewares/isAuthenticated';

const router = Router();

// http://localhost:3000/user

router.get('/me', isAuthenticated, new DetailUserController().handle);
router.post('/', new CreateUserController().handle)
router.post('/session', new AuthUserController().handle);
router.delete('/remove', new RemoveUserController().handle);

export default router;
