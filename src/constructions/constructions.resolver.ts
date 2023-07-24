import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { ConstructionsService } from './constructions.service';
import { Construction } from './constructions.entity';
import { createConstructionInput } from './dto/create-construction-input';
import { updateConstructionInput } from './dto/update-construction-input';

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

  @Mutation(() => Construction)
  editConstruction(
    id: number,
    @Args('constructionInput') constructionInput: updateConstructionInput,
  ) {
    return this.constructionService.editOne(id, constructionInput);
  }

  @Mutation(() => Construction)
  deleteConstruction(@Args('deleteItem') deleteItem: number): Promise<any> {
    return this.constructionService.deleteConstruction(deleteItem);
  }
}
