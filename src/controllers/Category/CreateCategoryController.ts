import { Request, Response } from 'express';
import { CategoryRequest } from '../../models/Category/CategoryRequest';
import { CreateCategoryService } from '../../services/Category/CreateCategoryService';

export class CreateCategoryController {
  async handle(req: Request, res: Response) {
    const { name }: CategoryRequest = req.body;

    const createCategoryService = new CreateCategoryService();

    const category = await createCategoryService.execute({ name });

    return res.status(201).json(category);
  }
}

