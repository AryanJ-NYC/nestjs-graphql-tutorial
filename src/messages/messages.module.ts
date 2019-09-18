import { Module } from '@nestjs/common';
import { MessagesResolver } from './messages.resolver';

@Module({
  providers: [MessagesResolver],
  exports: [MessagesResolver],
})
export class MessagesModule {}
