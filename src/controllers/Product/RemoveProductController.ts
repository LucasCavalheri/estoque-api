import { Request, Response } from 'express';
import { RemoveProductService } from '../../services/Product/RemoveProductService';

export class RemoveProductController {
  async handle(req: Request, res: Response) {
    const product_id = req.query.product_id as string;

    const removeProductService = new RemoveProductService();

    const removeProduct = await removeProductService.execute({ product_id });

    return res.status(204).end();
  }
}
