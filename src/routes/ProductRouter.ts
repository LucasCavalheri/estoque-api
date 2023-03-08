import { Router } from 'express';
import { isAuthenticated } from '../middlewares/isAuthenticated';
import multer from 'multer';
import uploadConfig from '../config/multer';
import { CreateProductController } from '../controllers/Product/CreateProductController';
import { EditProductController } from '../controllers/Product/EditProductController';

const router = Router();

const upload = multer(uploadConfig.upload('./tmp'));

// http://localhost:3000/product

router.post('/', isAuthenticated, upload.single('file'), new CreateProductController().handle);
router.put('/edit', isAuthenticated, upload.single('file'), new EditProductController().handle);

export default router;
