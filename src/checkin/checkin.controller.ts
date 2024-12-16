import { Body, Controller, Post } from '@nestjs/common';
import { CheckInService } from './checkin.service';
import { CheckIn } from './checkin.schema';

@Controller('checkin') // <-- La route de base est ici
export class CheckInController {
  constructor(private readonly checkInService: CheckInService) {}

  @Post()
  async createCheckIn(@Body() data: Partial<CheckIn>): Promise<CheckIn> {
    return this.checkInService.createCheckIn(data);
  }
}
