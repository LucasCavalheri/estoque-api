import prismaClient from '../../prisma/index';
import { hash } from 'bcryptjs';
import { UserRequest } from '../../models/interfaces/User/interfaces/UserRequest';

class CreateUserService {
  async execute({ name, email, password }: UserRequest) {
    if (!email) throw new Error('Email is not provided');

    const userAlreadyExists = await prismaClient.user.findFirst({
      where: {
        email,
      },
    });

    if (userAlreadyExists) throw new Error('Email already exists');

    const passwordHash = await hash(password, 8);

    const user = await prismaClient.user.create({
      data: {
        name,
        email,
        password: passwordHash,
      },
      select: {
        id: true,
        name: true,
        email: true,
      },
    });

    return user;
  }
}

export { CreateUserService };
