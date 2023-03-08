import { Router } from 'express';
import { CreateCategoryController } from '../controllers/Category/CreateCategoryController';
import { isAuthenticated } from '../middlewares/isAuthenticated';

const router = Router();

// http://localhost:3000/category

router.post('/', isAuthenticated, new CreateCategoryController().handle);

export default router;
