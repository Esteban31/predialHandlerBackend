import { Injectable } from '@nestjs/common';
import { Construction } from './constructions.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { createConstructionInput } from './dto/create-construction-input';
import { updateConstructionInput } from './dto/update-construction-input';

@Injectable()
export class ConstructionsService {
  constructor(
    @InjectRepository(Construction)
    private constructionRepository: Repository<Construction>,
  ) {}

  async findAll(): Promise<Construction[]> {
    return await this.constructionRepository.find();
  }

  async createOne(owner: createConstructionInput): Promise<Construction> {
    const newOwner = this.constructionRepository.create(owner);
    return this.constructionRepository.save(newOwner);
  }

  async editOne(id: number, data: updateConstructionInput) {
    const result = await this.constructionRepository.findOneBy({ id: id });
    const updatedElement = Object.assign(result.id, data);
    return await this.constructionRepository.save(updatedElement);
  }

  async deleteConstruction(id: number) {
    // const result = await this.constructionRepository.findOneBy({ id: id });
    return this.constructionRepository.delete({ id });
  }
}
