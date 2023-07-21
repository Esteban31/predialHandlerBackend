/* eslint-disable prettier/prettier */
import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class createConstructionInput {
    
      @Field()
      numberFloors: number

      @Field()
      area: number

      @Field()
      type: string
}
