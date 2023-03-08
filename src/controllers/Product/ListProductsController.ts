import { Request, Response } from 'express';
import { ListProductsService } from '../../services/Product/ListProductsServices';

export class ListProductsController {
  async handle(_req: Request, res: Response) {
    const listProductsService = new ListProductsService();

    const products = await listProductsService.execute();

    return res.status(200).json(products);
  }
}
