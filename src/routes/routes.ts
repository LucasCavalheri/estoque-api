import { Router } from 'express';
import multer from 'multer';
import uploadConfig from '../config/multer';
import UserRouter from './UserRouter';
import CategoryRouter from './CategoryRouter';

const router = Router();

const upload = multer(uploadConfig.upload('./tmp'));

router.use('/user', UserRouter);
router.use('/category', CategoryRouter);

export default router;
