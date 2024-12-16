import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CheckIn, CheckInDocument } from './checkin.schema';

@Injectable()
export class CheckInService {
  constructor(
    @InjectModel(CheckIn.name) private checkInModel: Model<CheckInDocument>, // Injection correcte
  ) {}

  async createCheckIn(data: Partial<CheckIn>): Promise<CheckIn> {
    const checkIn = new this.checkInModel(data);
    return checkIn.save();
  }
}
