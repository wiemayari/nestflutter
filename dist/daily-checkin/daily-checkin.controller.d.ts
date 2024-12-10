import { DailyCheckinService } from './daily-checkin.service';
import { DailyCheckinModule } from './daily-checkin.module';
export declare class DailyCheckInController {
    private readonly dailyCheckInService;
    constructor(dailyCheckInService: DailyCheckinService);
    addDailyCheckIn(dailyCheckIn: DailyCheckinModule): DailyCheckinModule;
    getAllDailyCheckIns(): DailyCheckinModule[];
}
