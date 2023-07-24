/* eslint-disable prettier/prettier */
import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class createTerrainInput {
  @Field()
  area?: number;

  @Field()
  amount?: number;

  @Field()
  nearWater?: boolean;

  @Field()
  type?: string;

  @Field()
  haveContructions?: boolean;
}
