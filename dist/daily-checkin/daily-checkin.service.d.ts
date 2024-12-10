import { DailyCheckinModule } from './daily-checkin.module';
export declare class DailyCheckinService {
    private dailyCheckIns;
    addDailyCheckIn(dailyCheckIn: DailyCheckinModule): DailyCheckinModule;
    getAllDailyCheckIns(): DailyCheckinModule[];
}
