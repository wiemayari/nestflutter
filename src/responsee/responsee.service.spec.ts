import { Test, TestingModule } from '@nestjs/testing';
import { ResponseeService } from './responsee.service';

describe('ResponseeService', () => {
  let service: ResponseeService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ResponseeService],
    }).compile();

    service = module.get<ResponseeService>(ResponseeService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
