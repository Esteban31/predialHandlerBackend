import { Module } from '@nestjs/common';
import { ConstructionsService } from './constructions.service';
import { ConstructionsResolver } from './constructions.resolver';
import { Construction } from './constructions.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Construction])],
  providers: [ConstructionsService, ConstructionsResolver],
})
export class ConstructionsModule {}
