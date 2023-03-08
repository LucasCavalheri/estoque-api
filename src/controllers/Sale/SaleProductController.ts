import { Request, Response } from 'express';
import { SaleProductService } from '../../services/Sale/SaleProductService';
import { SaleProductRequest } from '../../models/interfaces/Sale/SaleProductRequest';

export class SaleProductController {
  async handle(req: Request, res: Response) {
    const product_id = req.query.product_id as string;
    const { amount }: SaleProductRequest = req.body;

    const saleProductService = new SaleProductService();

    const saleProduct = await saleProductService.execute({ product_id, amount });

    return res.status(200).json(saleProduct);
  }
}
