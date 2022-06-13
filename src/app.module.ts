import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Connection } from 'typeorm';

import { AppController } from './app.controller';
import { AppService } from './app.service';

// Entities
import { User } from './users/users.entity';
import { Message } from './messages/messages.entity';

// modules
import { UsersModule } from './users/users.module';
import { MessagesModule } from './messages/messages.module';

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
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  constructor(private connection: Connection) {}
}
