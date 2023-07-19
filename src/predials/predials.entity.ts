/* eslint-disable prettier/prettier */
import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Predial {
  @Field()
  id?: number;
  @Field({ nullable: true })
  idOwner?: number;
  @Field({ nullable: true })
  idTerrain?: number;
  @Field({ nullable: true })
  idContruction?: number;
}
