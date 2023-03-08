import { Request, Response } from 'express';
import { ProductRequest } from '../../models/interfaces/Product/ProductRequest';
import { CreateProductService } from '../../services/Product/CreateProductService';

export class CreateProductController {
  async handle(req: Request, res: Response) {
    const {
      name,
      price,
      description,
      category_id,
      amount,
    }: ProductRequest = req.body;

    const createProductService = new CreateProductService();

    if (!req.file) throw new Error('File not provided');
    if (req.file) {
      const { filename: banner } = req.file;
      const product = await createProductService.execute({
        name,
        price,
        description,
        banner,
        category_id,
        amount,
      });
      return res.status(201).json(product);
    }
  }
}
