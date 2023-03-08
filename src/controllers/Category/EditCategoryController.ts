import { Request, Response } from 'express';
import { EditCategoryService } from '../../services/Category/EditCategoryService';

export class EditCategoryController {
  async handle(req: Request, res: Response) {
    const category_id = req.query.category_id as string;
    const { name } = req.body;

    const editCategoryService = new EditCategoryService();

    const categoryEdited = await editCategoryService.execute({ name, category_id });

    return res.status(200).json(categoryEdited);
  }
}
