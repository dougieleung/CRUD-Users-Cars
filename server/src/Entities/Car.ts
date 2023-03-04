import {
  BaseEntity,
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";

import { User } from "./User";

@Entity()
export class Car extends BaseEntity {
  @PrimaryGeneratedColumn("uuid")
  id!: string;

  @Column()
  make!: string;

  @Column()
  model!: string;

  @Column("int")
  year!: number;

  @Column("float")
  price!: number;

  @Column({ type: "uuid" })
  userId!: string;

  @ManyToOne(() => User, (user: User) => user.cars)
  @JoinColumn({ name: "userId" })
  user!: User;
}
