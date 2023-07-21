/* eslint-disable prettier/prettier */
import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class createOwnerInput {
    
      @Field()
      ownerType?: string;
    
      @Field()
      document?: number;
    
      @Field()
      nit?: string;
    
      @Field()
      socialReason?: string;
    
      @Field()
      adress?: string;
    
      @Field()
      phone?: string;
    
      @Field()
      email?: string;
}
