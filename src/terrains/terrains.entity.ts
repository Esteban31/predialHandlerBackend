/* eslint-disable prettier/prettier */
import { Field, ObjectType } from '@nestjs/graphql';
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
@Entity()
@ObjectType()
export class Terrain {
  @PrimaryGeneratedColumn('increment')
  @Field()
  id?: number;

  @Column()
  @Field()
  area?: number;

  @Column()
  @Field()
  amount?: number;

  @Column()
  @Field()
  nearWater?: boolean;

  @Column()
  @Field()
  type?: string;

  @Column()
  @Field()
  haveContructions?: boolean;
}
