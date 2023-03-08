import { Router } from 'express';
import { CreateCategoryController } from '../controllers/Category/CreateCategoryController';
import { EditCategoryController } from '../controllers/Category/EditCategoryController';
import { ListCategoryController } from '../controllers/Category/ListCategoryController';
import { RemoveCategoryController } from '../controllers/Category/RemoveCategoryController';
import { isAuthenticated } from '../middlewares/isAuthenticated';

const router = Router();

// http://localhost:3000/category

router.get('/all', isAuthenticated, new ListCategoryController().handle);
router.post('/', isAuthenticated, new CreateCategoryController().handle);
router.put('/edit', isAuthenticated, new EditCategoryController().handle);
router.delete('/remove', isAuthenticated, new RemoveCategoryController().handle);

export default router;
