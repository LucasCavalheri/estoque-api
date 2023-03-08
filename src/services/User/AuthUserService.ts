import prismaClient from '../../prisma';
import { compare } from 'bcryptjs';
import { sign } from 'jsonwebtoken';
import { AuthRequest } from '../../auth/interfaces/AuthRequest';

class AuthUserService {
  async execute({ email, password }: AuthRequest) {
    if (!email) throw new Error('Email is not provided');
    if (!password) throw new Error('Password is not provided');

    const user = await prismaClient.user.findFirst({
      where: {
        email,
      },
    });

    if (!user) throw new Error('Wrong email or password');

    const passwordMatch = await compare(password, user?.password);

    if (!passwordMatch) throw new Error('Wrong email or password');

    const token = sign(
      { name: user?.name, email: user?.email },
      process.env.JWT_SECRET as string,
      { subject: user?.id, expiresIn: '30d' },
    );

    return {
      id: user?.id,
      name: user?.name,
      email: user?.email,
      token,
    };
  }
}

export { AuthUserService };
