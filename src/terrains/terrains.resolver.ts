import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { Terrain } from './terrains.entity';
import { TerrainsService } from './terrains.service';
import { createTerrainInput } from './dto/create-terrain-input';
import { updateTerrainInput } from './dto/update-terrain-input';

@Resolver()
export class TerrainsResolver {
  constructor(private terrainService: TerrainsService) {}

  @Query(() => [Terrain])
  terrains() {
    return this.terrainService.findAll();
  }

  @Mutation(() => Terrain)
  createTerrain(@Args('terrainInput') terrainInput: createTerrainInput) {
    return this.terrainService.createOne(terrainInput);
  }

  @Mutation(() => Terrain)
  editConstruction(
    id: number,
    @Args('terrainInput') terrainInput: updateTerrainInput,
  ) {
    return this.terrainService.editOne(id, terrainInput);
  }
}
