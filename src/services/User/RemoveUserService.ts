import prismaClient from '../../prisma';
import { RemoveUserRequest } from '../../models/User/interfaces/RemoveUserRequest';

export class RemoveUserService {
  async execute({ user_id }: RemoveUserRequest) {
    const removeUser = await prismaClient.user.delete({
      where: { id: user_id },
    });
    
    return removeUser;
  }
}
