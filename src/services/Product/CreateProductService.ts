import prismaClient from '../../prisma';
import { ProductRequest } from '../../models/interfaces/Product/ProductRequest';

export class CreateProductService {
  async execute({
    name,
    price,
    description,
    banner,
    category_id,
    amount,
  }: ProductRequest) {
    const product = await prismaClient.product.create({
      data: {
        name,
        price,
        description,
        banner,
        category_id,
        amount: +amount,
      },
    });

    return product;
  }
}
