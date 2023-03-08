import prismaClient from '../../prisma';
import { EditCategoryRequest } from '../../models/Category/EditCategoryRequest';

export class EditCategoryService {
  async execute({ name, category_id }: EditCategoryRequest) {
    if (!name || !category_id) throw new Error('Invalid name or category_id');

    const productEdited = await prismaClient.category.update({
      where: { id: category_id },
      data: {
        name,
      },
    });

    return productEdited;
  }
}
