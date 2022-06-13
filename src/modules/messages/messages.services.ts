import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Message } from './messages.entity';

@Injectable()
export class MessagesService {
  constructor(
    @InjectRepository(Message)
    private messageRepository: Repository<Message>,
  ) {}

  async create(message: Message): Promise<Message> {
    console.log({ message });
    return await this.messageRepository.save(message);
  }

  async findAll(): Promise<Message[]> {
    const values = this.messageRepository.find({
      relations: ['fromUser', 'toUser'],
    });
    return values;
  }

  async removeById(id: Message['id']): Promise<void> {
    await this.messageRepository.delete(id);
  }

  async update(id: Message['id'], message: Message): Promise<Message> {
    await this.messageRepository.update(id, message);
    return await this.messageRepository.findOne(id);
  }
}
