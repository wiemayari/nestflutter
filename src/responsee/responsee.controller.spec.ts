import { Test, TestingModule } from '@nestjs/testing';
import { ResponseController } from './responsee.controller';
import { ResponseeService } from './responsee.service';

describe('ResponseeController', () => {
  let controller: ResponseController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ResponseController],
      providers: [ResponseeService],
    }).compile();

    controller = module.get<ResponseController>(ResponseController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
