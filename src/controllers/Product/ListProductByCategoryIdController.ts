import { Request, Response } from 'express';
import { ListProductByCategoryIdService } from '../../services/Product/ListProductByCategoryService';

export class ListProductByCategoryIdController {
  async handle(req: Request, res: Response) {
    const category_id = req.query.category_id as string;

    const listProductByCategoryIdService = new ListProductByCategoryIdService();

    const products = await listProductByCategoryIdService.execute({ category_id });

    return res.status(200).json(products);
  }
}
