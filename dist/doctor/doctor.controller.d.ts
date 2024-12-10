import { DoctorService } from './doctor.service';
import { Doctor } from './doctor.model';
export declare class DoctorController {
    private readonly doctorService;
    constructor(doctorService: DoctorService);
    getAllDoctors(): Doctor[];
    addDoctor(body: {
        name: string;
        specialty: string;
        experience: string;
        contact: string;
        location: string;
        imageUrl: string;
        rating: number;
    }): Doctor;
}
