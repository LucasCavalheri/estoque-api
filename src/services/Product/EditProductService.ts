import prismaClient from '../../prisma';
import { EditProductRequest } from '../../models/interfaces/Product/EditProductRequest';

export class EditProductService {
  async execute({
    name,
    amount,
    banner,
    description,
    price,
    product_id,
  }: EditProductRequest) {
    const productEdited = await prismaClient.product.update({
      where: { id: product_id },
      data: {
        name,
        amount: +amount,
        banner,
        description,
        price,
      },
    });

    return productEdited;
  }
}
