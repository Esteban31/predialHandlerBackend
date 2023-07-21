import { Module } from '@nestjs/common';
import { PredialsService } from './predials.service';
import { PredialsResolver } from './predials.resolver';

import { Predial } from './predials.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Predial])],
  providers: [PredialsService, PredialsResolver],
})
export class PredialsModule {}
