import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { PredialsService } from './predials.service';
import { Predial } from './predials.entity';
import { createPredialInput } from './dto/create-predial-input';
import { updatePredialInput } from './dto/update-predial-input';

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

  @Mutation(() => Predial)
  editPredial(
    id: number,
    @Args('predialInput') predialInput: updatePredialInput,
  ) {
    return this.predialService.editOne(id, predialInput);
  }
}
