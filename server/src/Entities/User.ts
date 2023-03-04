import { BaseEntity, Column, Entity, PrimaryGeneratedColumn, OneToMany } from "typeorm";

import { Car } from "./Car";

@Entity()
export class User extends BaseEntity {
  @PrimaryGeneratedColumn("uuid")
  id!: string;

  @Column()
  name!: string;
  
  @Column()
  username!: string;
  
  @Column({type: "varchar", length: 10})
  password!: string;

  @OneToMany(() => Car, (car: Car) => car.user, {eager: true})
  cars!: Car[]
 
}
