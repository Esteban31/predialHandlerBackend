import { Resolver, Query } from '@nestjs/graphql';
import { PredialsService } from './predials.service';
import { Predial } from './predials.entity';

@Resolver()
export class PredialsResolver {
  constructor(private predialService: PredialsService) {}

  @Query((returns) => [Predial])
  predials() {
    return this.predialService.findAll();
  }
}
