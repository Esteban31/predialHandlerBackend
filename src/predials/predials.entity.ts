/* eslint-disable prettier/prettier */
import { Field, ObjectType } from '@nestjs/graphql';
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
@Entity()
@ObjectType()
export class Predial {
  
  @PrimaryGeneratedColumn('increment')
  @Field()
  id?: number;

  @Column()
  @Field()
  idOwner?: number;

  @Column()
  @Field()
  idTerrain?: number;

  @Column()
  @Field()
  idConstruction?: number;
}
