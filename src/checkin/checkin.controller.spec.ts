import { Test, TestingModule } from '@nestjs/testing';
import { CheckInController } from './checkin.controller';
import { CheckInService } from './checkin.service';

describe('CheckinController', () => {
  let controller: CheckInController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CheckInController],
      providers: [CheckInService],
    }).compile();

    controller = module.get<CheckInController>(CheckInController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
