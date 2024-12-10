"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DoctorService = void 0;
const common_1 = require("@nestjs/common");
const uuid_1 = require("uuid");
let DoctorService = class DoctorService {
    constructor() {
        this.doctors = [];
    }
    getAllDoctors() {
        return this.doctors;
    }
    addDoctor(name, specialty, experience, contact, location, imageUrl, rating) {
        const newDoctor = {
            id: (0, uuid_1.v4)(),
            name,
            specialty,
            experience,
            contact,
            location,
            imageUrl,
            rating,
        };
        this.doctors.push(newDoctor);
        return newDoctor;
    }
};
DoctorService = __decorate([
    (0, common_1.Injectable)()
], DoctorService);
exports.DoctorService = DoctorService;
//# sourceMappingURL=doctor.service.js.map