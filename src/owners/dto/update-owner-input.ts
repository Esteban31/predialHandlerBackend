/* eslint-disable prettier/prettier */
import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class updateOwnerInput {

      @Field()
      id?: number
    
      @Field({nullable: true})
      ownerType?: string;
    
      @Field({nullable: true})
      document?: number;
    
      @Field({nullable: true})
      nit?: string;
    
      @Field({nullable: true})
      socialReason?: string;
    
      @Field({nullable: true})
      adress?: string;
    
      @Field({nullable: true})
      phone?: string;
    
      @Field({nullable: true})
      email?: string;
}
