import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { Message } from './messages.entity';
import { MessagesService } from './messages.services';

@Controller('messages')
export class MessagesController {
  constructor(private messagesService: MessagesService) {}

  @Get()
  async findAll(): Promise<Message[]> {
    return await this.messagesService.findAll();
  }

  @Post()
  async create(@Body() message: Message): Promise<Message> {
    return await this.messagesService.create(message);
  }

  @Delete()
  async remove(@Body() messageId: Message['id']): Promise<void> {
    await this.messagesService.removeById(messageId);
  }

  @Put(':id')
  async update(
    @Param('id') id: Message['id'],
    @Body() message: Message,
  ): Promise<Message> {
    return await this.messagesService.update(id, message);
  }
}
