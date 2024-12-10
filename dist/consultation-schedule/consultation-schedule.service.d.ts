import { consultationScheduleModel } from './consultation-schedule.model';
export declare class ConsultationScheduleService {
    private schedules;
    getScheduleByDoctorId(doctorId: string): consultationScheduleModel[];
    addSchedule(doctorId: string, day: string, morningTimes: string[], eveningTimes: string[]): consultationScheduleModel;
}
