import prismaClient from '../../prisma';

interface ListProductByCategoryIdRequest {
  category_id: string;
}

export class ListProductByCategoryIdService {
  async execute({ category_id }: ListProductByCategoryIdRequest) {
    const findProductByCategoryId = await prismaClient.product.findMany({
      where: { category_id },
    });
    
    return findProductByCategoryId;
  }
}
