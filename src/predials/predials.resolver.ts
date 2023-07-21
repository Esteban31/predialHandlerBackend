import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { PredialsService } from './predials.service';
import { Predial } from './predials.entity';
import { createPredialInput } from './dto/create-predial-input';

@Resolver()
export class PredialsResolver {
  constructor(private predialService: PredialsService) {}

  @Query((returns) => [Predial])
  predials() {
    return this.predialService.findAll();
  }

  @Mutation((returns) => [Predial])
  createPredial(@Args('predialInput') predialInput: createPredialInput) {
    return this.predialService.createOne(predialInput);
  }
}
