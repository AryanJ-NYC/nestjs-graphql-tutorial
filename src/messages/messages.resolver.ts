import { Mutation, Resolver, Query, Args } from '@nestjs/graphql';

@Resolver()
export class MessagesResolver {
  // this is just for demonstration purposes
  // do NOT do this in real-life
  // this is meant as a substitute for a database
  messagesThatReallyShouldBeInADb = [
    { id: 0, description: 'The seed message' },
  ];

  @Query()
  messages() {
    return this.messagesThatReallyShouldBeInADb;
  }

  @Mutation()
  createMessage(@Args('description') description: string) {
    const id = this.messagesThatReallyShouldBeInADb.length;
    const newMessage = { id, description };
    this.messagesThatReallyShouldBeInADb.push(newMessage);
    return newMessage;
  }
}
