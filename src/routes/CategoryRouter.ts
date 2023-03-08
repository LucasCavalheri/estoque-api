import { Router } from 'express';
import { CreateCategoryController } from '../controllers/Category/CreateCategoryController';
import { EditCategoryController } from '../controllers/Category/EditCategoryController';
import { isAuthenticated } from '../middlewares/isAuthenticated';

const router = Router();

// http://localhost:3000/category

router.post('/', isAuthenticated, new CreateCategoryController().handle);
router.put('/edit', isAuthenticated, new EditCategoryController().handle);

export default router;
