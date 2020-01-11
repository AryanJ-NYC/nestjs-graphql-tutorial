import { Resolver, Mutation, Args } from '@nestjs/graphql';
import { UsersService } from './users.service';

@Resolver('Users')
export class UsersResolver {
  constructor(private readonly users: UsersService) {}

  @Mutation()
  async createUser(@Args('data') data: { email: string; password: string }) {
    const user = await this.users.createUser(data.email, data.password);
    return user;
  }
}
