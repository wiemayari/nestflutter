import { CheckInService } from './checkin.service';
import { CheckIn } from './checkin.schema';
export declare class CheckInController {
    private readonly checkInService;
    constructor(checkInService: CheckInService);
    createCheckIn(data: Partial<CheckIn>): Promise<CheckIn>;
}
