import { Injectable } from '@nestjs/common';
import { Prisma } from './prisma.binding';

@Injectable()
export class PrismaService extends Prisma {
  constructor() {
    super({
      endpoint:
        'https://us1.prisma.sh/aryan-j-e0febe/nestjs-graphql-tutorial/dev',
      debug: false,
    });
  }
}
