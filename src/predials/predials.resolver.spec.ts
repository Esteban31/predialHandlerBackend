import { Test, TestingModule } from '@nestjs/testing';
import { PredialsResolver } from './predials.resolver';

describe('PredialsResolver', () => {
  let resolver: PredialsResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PredialsResolver],
    }).compile();

    resolver = module.get<PredialsResolver>(PredialsResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
