import { Module } from '@nestjs/common';
import { TerrainsService } from './terrains.service';
import { TerrainsResolver } from './terrains.resolver';
import { Terrain } from './terrains.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Terrain])],
  providers: [TerrainsService, TerrainsResolver],
})
export class TerrainsModule {}
