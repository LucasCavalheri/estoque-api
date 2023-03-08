import { Router } from 'express';
import { isAuthenticated } from '../middlewares/isAuthenticated';
import multer from 'multer';
import uploadConfig from '../config/multer';
import { CreateProductController } from '../controllers/Product/CreateProductController';
import { EditProductController } from '../controllers/Product/EditProductController';
import { ListProductByCategoryIdController } from '../controllers/Product/ListProductByCategoryIdController';
import { ListProductsController } from '../controllers/Product/ListProductsController';
import { RemoveProductController } from '../controllers/Product/RemoveProductController';

const router = Router();

const upload = multer(uploadConfig.upload('./tmp'));

// http://localhost:3000/product

router.get('/all', isAuthenticated, new ListProductsController().handle);
router.get('/', isAuthenticated, new ListProductByCategoryIdController().handle);
router.post('/', isAuthenticated, upload.single('file'), new CreateProductController().handle);
router.put('/edit', isAuthenticated, upload.single('file'), new EditProductController().handle);
router.delete('/remove', isAuthenticated, new RemoveProductController().handle);

export default router;
