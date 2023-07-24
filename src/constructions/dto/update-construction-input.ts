/* eslint-disable prettier/prettier */
import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class updateConstructionInput {
      
      @Field()
      id?: number

      @Field()
      numberFloors: number

      @Field()
      area: number

      @Field()
      type: string
}
