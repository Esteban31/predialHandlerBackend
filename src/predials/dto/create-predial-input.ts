/* eslint-disable prettier/prettier */
import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class createPredialInput {

  @Field()
  idOwner: number;

  @Field()
  idTerrain: number;

  @Field()
  idConstruction: number;
}
