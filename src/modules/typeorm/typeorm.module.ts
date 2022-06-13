import { TypeOrmModule as Module } from '@nestjs/typeorm';
import { constants } from 'helpers/constants';

// entities
import { Message } from 'modules/messages/messages.entity';
import { User } from 'modules/users/users.entity';

export const TypeOrmModule = Module.forRoot({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: constants.POSTGRES_USER,
  password: constants.POSTGRES_PASSWORD,
  database: constants.POSTGRES_DB,
  entities: [User, Message],
  synchronize: true,
});
