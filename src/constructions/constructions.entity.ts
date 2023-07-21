/* eslint-disable prettier/prettier */
import { Field, ObjectType } from '@nestjs/graphql';
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
@ObjectType()
export class Construction {
  @PrimaryGeneratedColumn('increment')
  @Field()
  id?: number;

  @Column()
  @Field()
  numberFloors: number

  @Column()
  @Field()
  area: number

  @Column()
  @Field()
  type: string
}
