import { Router } from 'express';
import UserRouter from './UserRouter';
import CategoryRouter from './CategoryRouter';

const router = Router();

router.use('/user', UserRouter);
router.use('/category', CategoryRouter);

export default router;
