import { Module } from '@nestjs/common';
import { PredialsService } from './predials.service';
import { PredialsResolver } from './predials.resolver';

@Module({
  providers: [PredialsService, PredialsResolver]
})
export class PredialsModule {}
