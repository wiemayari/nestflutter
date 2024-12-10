import { AppointmentService } from './appointment.service';
import { Appointment } from './appointment.model';
export declare class AppointmentController {
    private readonly appointmentService;
    constructor(appointmentService: AppointmentService);
    getAppointmentsByDoctorId(doctorId: string): Appointment[];
    bookAppointment(body: {
        doctorId: string;
        userId: string;
        date: string;
        time: string;
    }): Appointment;
}
