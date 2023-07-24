import { Injectable } from '@nestjs/common';
import { Predial } from './predials.entity';

import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { createPredialInput } from './dto/create-predial-input';
import { updatePredialInput } from './dto/update-predial-input';

@Injectable()
export class PredialsService {
  constructor(
    @InjectRepository(Predial)
    private predialRepository: Repository<Predial>,
  ) {}

  async findAll(): Promise<Predial[]> {
    return await this.predialRepository.find();
  }

  async createOne(predial: createPredialInput): Promise<Predial> {
    const newPredial = this.predialRepository.create(predial);
    return this.predialRepository.save(newPredial);
  }

  async editOne(id: number, data: updatePredialInput) {
    const result = await this.predialRepository.findOneBy({ id: id });
    const updatedElement = Object.assign(result.id, data);
    return await this.predialRepository.save(updatedElement);
  }
}
