import { ConsultationScheduleService } from './consultation-schedule.service';
import { consultationScheduleModel } from './consultation-schedule.model';
export declare class ConsultationScheduleController {
    private readonly consultationScheduleService;
    constructor(consultationScheduleService: ConsultationScheduleService);
    getScheduleByDoctorId(doctorId: string): consultationScheduleModel[];
    addSchedule(body: {
        doctorId: string;
        day: string;
        morningTimes: string[];
        eveningTimes: string[];
    }): consultationScheduleModel;
}
