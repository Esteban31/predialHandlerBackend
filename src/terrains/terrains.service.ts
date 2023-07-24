import { Injectable } from '@nestjs/common';

import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Terrain } from './terrains.entity';
import { createTerrainInput } from './dto/create-terrain-input';
import { updateTerrainInput } from './dto/update-terrain-input';

@Injectable()
export class TerrainsService {
  constructor(
    @InjectRepository(Terrain)
    private terrainRepository: Repository<Terrain>,
  ) {}

  async findAll(): Promise<Terrain[]> {
    return await this.terrainRepository.find();
  }

  async createOne(predial: createTerrainInput): Promise<Terrain> {
    const newPredial = this.terrainRepository.create(predial);
    return this.terrainRepository.save(newPredial);
  }

  async editOne(id: number, data: updateTerrainInput) {
    const result = await this.terrainRepository.findOneBy({ id: id });
    const updatedElement = Object.assign(result.id, data);
    return await this.terrainRepository.save(updatedElement);
  }
}
