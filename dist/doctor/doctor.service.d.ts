import { Doctor } from './doctor.model';
export declare class DoctorService {
    private doctors;
    getAllDoctors(): Doctor[];
    addDoctor(name: string, specialty: string, experience: string, contact: string, location: string, imageUrl: string, rating: number): Doctor;
}
