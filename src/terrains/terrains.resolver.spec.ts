import { Test, TestingModule } from '@nestjs/testing';
import { TerrainsResolver } from './terrains.resolver';

describe('TerrainsResolver', () => {
  let resolver: TerrainsResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TerrainsResolver],
    }).compile();

    resolver = module.get<TerrainsResolver>(TerrainsResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
