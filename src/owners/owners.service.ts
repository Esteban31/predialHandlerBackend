import { Injectable } from '@nestjs/common';
import { Owner } from './owners.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { createOwnerInput } from './dto/create-owner-input';

@Injectable()
export class OwnersService {
  constructor(
    @InjectRepository(Owner)
    private ownerRepository: Repository<Owner>,
  ) {}

  async findAll(): Promise<Owner[]> {
    return await this.ownerRepository.find();
  }

  async createOne(owner: createOwnerInput): Promise<Owner> {
    const newOwner = this.ownerRepository.create(owner);
    return this.ownerRepository.save(newOwner);
  }
}
