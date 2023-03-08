import prismaClient from '../../prisma';
import { SaleProductRequest } from '../../models/interfaces/Sale/SaleProductRequest';

export class SaleProductService {
  async execute({ product_id, amount }: SaleProductRequest) {
    if (!product_id || !amount) throw new Error('Invalid provided data');

    const queryProduct = await prismaClient.product.findFirst({
      where: {
        id: product_id,
      },
    });

    if (queryProduct?.amount > amount && amount > 0) {
      const newAmount = queryProduct?.amount - amount;
      const savaSale = await prismaClient.product.update({
        where: { id: product_id },
        data: { amount: newAmount },
        select: { id: true, name: true, amount: true },
      });

      return savaSale;
    }
    throw new Error('Venda não efetuada');
  }
}
