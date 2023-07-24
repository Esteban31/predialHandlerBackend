/* eslint-disable prettier/prettier */
import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class updateTerrainInput {
  @Field({nullable: true})
  id?: number;

  @Field({nullable: true})
  area?: number;

  @Field({nullable: true})
  amount?: number;

  @Field({nullable: true})
  nearWater?: boolean;

  @Field({nullable: true})
  type?: string;

  @Field({nullable: true})
  haveContructions?: boolean;
}
