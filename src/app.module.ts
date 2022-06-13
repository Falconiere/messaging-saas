import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Connection } from 'typeorm';

// Entities
import { User } from './modules/users/users.entity';
import { Message } from './modules/messages/messages.entity';

// modules
import { UsersModule } from './modules/users/users.module';
import { MessagesModule } from './modules/messages/messages.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'root',
      password: 'rootpwd',
      database: 'messaging_db',
      entities: [User, Message],
      synchronize: true,
    }),
    UsersModule,
    MessagesModule,
  ],
})
export class AppModule {
  constructor(private connection: Connection) {}
}
