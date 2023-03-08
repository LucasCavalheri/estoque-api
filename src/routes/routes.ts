import { Router } from 'express';
import UserRouter from './UserRouter';
import CategoryRouter from './CategoryRouter';
import ProductRouter from './ProductRouter';

const router = Router();

router.use('/user', UserRouter);
router.use('/category', CategoryRouter);
router.use('/product', ProductRouter);

export default router;
