import prismaClient from '../../prisma';
import { RemoveCategoryRequest } from '../../models/Category/RemoveCategoryRequest';

export class RemoveCategoryService {
  async execute({ category_id }: RemoveCategoryRequest) {
    if (!category_id) throw new Error('Category doesnt exists');

    const category = await prismaClient.category.delete({
      where: { id: category_id },
    });

    return category;
  }
}
