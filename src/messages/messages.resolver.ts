import { Mutation, Resolver, Query, Args } from '@nestjs/graphql';
import { PrismaService } from '../prisma/prisma.service';

@Resolver()
export class MessagesResolver {
  // this constructor is how use injection in NestJS
  constructor(private readonly prisma: PrismaService) {}

  @Query()
  messages(@Args() args) {
    return this.prisma.query.messages(args);
  }

  @Mutation()
  createMessage(@Args() args) {
    return this.prisma.mutation.createMessage(args);
  }
}
