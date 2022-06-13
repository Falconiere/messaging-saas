import { User } from 'modules/users/users.entity';
import {
  Column,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Message {
  @PrimaryGeneratedColumn({ type: 'bigint' })
  id: number;

  @OneToOne(() => User)
  @JoinColumn()
  fromUser: User;

  @OneToOne(() => User)
  @JoinColumn()
  toUser: User;

  @Column()
  text: string;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  createAt: Date;
}
