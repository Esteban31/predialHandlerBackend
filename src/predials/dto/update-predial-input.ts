/* eslint-disable prettier/prettier */
import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class updatePredialInput {
  @Field({ nullable: true })
  id?: number;

  @Field({ nullable: true })
  idOwner: number;

  @Field({ nullable: true })
  idTerrain: number;

  @Field({ nullable: true })
  idConstruction: number;
}
