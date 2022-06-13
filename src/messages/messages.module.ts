import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MessagesController } from './messages.controller';
import { Message } from './messages.entity';
import { MessagesService } from './messages.services';

@Module({
  imports: [TypeOrmModule.forFeature([Message])],
  providers: [MessagesService],
  controllers: [MessagesController],
})
export class MessagesModule {}
