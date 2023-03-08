import prismaClient from '../../prisma';
import { CategoryRequest } from '../../models/Category/CategoryRequest';

export class CreateCategoryService {
  async execute({ name }: CategoryRequest) {
    if (!name) throw new Error('Invalid name');

    const category = await prismaClient.category.create({
      data: {
        name,
      },
      select: {
        id: true,
        name: true,
      },
    });

    return category;
  }
}
