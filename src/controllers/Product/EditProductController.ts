import { Request, Response } from 'express';
import { EditProductService } from '../../services/Product/EditProductService';
import { EditProductRequest } from '../../models/interfaces/Product/EditProductRequest';

export class EditProductController {
  async handle(req: Request, res: Response) {
    const {
      amount,
      banner,
      description,
      name,
      price,
      product_id,
    }: EditProductRequest = req.body;

    const editProductService = new EditProductService();

    const productEdited = await editProductService.execute({
      name,
      amount,
      banner,
      description,
      price,
      product_id,
    });

    return res.status(201).json(productEdited);
  }
}
