import { Test, TestingModule } from '@nestjs/testing';
import { ResponseeController } from './responsee.controller';
import { ResponseeService } from './responsee.service';

describe('ResponseeController', () => {
  let controller: ResponseeController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ResponseeController],
      providers: [ResponseeService],
    }).compile();

    controller = module.get<ResponseeController>(ResponseeController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
