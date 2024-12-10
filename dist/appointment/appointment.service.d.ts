import { Appointment } from './appointment.model';
export declare class AppointmentService {
    private appointments;
    getAppointmentsByDoctorId(doctorId: string): Appointment[];
    bookAppointment(doctorId: string, userId: string, date: string, time: string): Appointment;
}
