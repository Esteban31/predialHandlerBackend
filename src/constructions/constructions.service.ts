import { Injectable } from '@nestjs/common';
import { Construction } from './constructions.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { createConstructionInput } from './dto/create-construction-input';

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
}
