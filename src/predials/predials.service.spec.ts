import { Test, TestingModule } from '@nestjs/testing';
import { PredialsService } from './predials.service';

describe('PredialsService', () => {
  let service: PredialsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PredialsService],
    }).compile();

    service = module.get<PredialsService>(PredialsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
