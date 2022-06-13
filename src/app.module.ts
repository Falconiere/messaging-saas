import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { Connection } from 'typeorm';

ConfigModule.forRoot();

// modules
import { TypeOrmModule } from 'modules/typeorm/typeorm.module';
import { UsersModule } from 'modules/users/users.module';
import { MessagesModule } from 'modules/messages/messages.module';

@Module({
  imports: [TypeOrmModule, UsersModule, MessagesModule],
})
export class AppModule {
  constructor(private connection: Connection) {}
}
