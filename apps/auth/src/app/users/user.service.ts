import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { hash } from 'bcryptjs';
import { Prisma } from '@prisma/client';

@Injectable()
export class UserService {
  constructor(private readonly prisma: PrismaService) {}

  async createUser(input: Prisma.UserCreateInput) { 
    const user = await this.prisma.user.create({
      data: {
        ...input,
        password: await hash(input.password, 10),
      },
    });

    return user;
  }
  
  async getUsers() {
    return this.prisma.user.findMany();
  }
}
