import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { ConstructionsService } from './constructions.service';
import { Construction } from './constructions.entity';
import { createConstructionInput } from './dto/create-construction-input';

@Resolver()
export class ConstructionsResolver {
  constructor(private constructionService: ConstructionsService) {}

  @Query(() => [Construction])
  constructions() {
    return this.constructionService.findAll();
  }

  @Mutation(() => Construction)
  createConstruction(
    @Args('constructionInput') constructionInput: createConstructionInput,
  ) {
    return this.constructionService.createOne(constructionInput);
  }
}
