import { Model } from 'mongoose';
import { CheckIn, CheckInDocument } from './checkin.schema';
export declare class CheckInService {
    private checkInModel;
    constructor(checkInModel: Model<CheckInDocument>);
    createCheckIn(data: Partial<CheckIn>): Promise<CheckIn>;
}
