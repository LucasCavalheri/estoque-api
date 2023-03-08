import { Request, Response } from 'express';
import { ListCategoryService } from '../../services/Category/ListCategoryService';

export class ListCategoryController {
  async handle(_req: Request, res: Response) {
    const listCategoryService = new ListCategoryService();

    const categories = await listCategoryService.execute();

    return res.status(200).json(categories);
  }
}
