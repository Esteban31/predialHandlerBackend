/* eslint-disable prettier/prettier */
import { Field, ObjectType } from '@nestjs/graphql';
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
@ObjectType()
export class Owner {
  @PrimaryGeneratedColumn('increment')
  @Field()
  id?: number;

  @Column()
  @Field()
  ownerType?: string;

  @Column()
  @Field()
  document?: number;

  @Column()
  @Field()
  nit?: string;

  @Column()
  @Field()
  socialReason?: string;

  @Column()
  @Field()
  adress?: string;

  @Column()
  @Field()
  phone?: string;

  @Column()
  @Field()
  email?: string;
}
