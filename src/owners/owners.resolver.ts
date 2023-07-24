import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { Owner } from './owners.entity';
import { OwnersService } from './owners.service';
import { createOwnerInput } from './dto/create-owner-input';
import { updateOwnerInput } from './dto/update-owner-input';

@Resolver()
export class OwnersResolver {
  constructor(private onwerService: OwnersService) {}

  @Query(() => [Owner])
  owners() {
    return this.onwerService.findAll();
  }

  @Mutation(() => Owner)
  createOwner(@Args('ownerInput') ownerInput: createOwnerInput) {
    return this.onwerService.createOne(ownerInput);
  }

  @Mutation(() => Owner)
  editOwner(id: number, @Args('ownerInput') ownerInput: updateOwnerInput) {
    return this.onwerService.editOne(id, ownerInput);
  }
}
