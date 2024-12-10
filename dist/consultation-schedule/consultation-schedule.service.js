"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConsultationScheduleService = void 0;
const common_1 = require("@nestjs/common");
const uuid_1 = require("uuid");
let ConsultationScheduleService = class ConsultationScheduleService {
    constructor() {
        this.schedules = [];
    }
    getScheduleByDoctorId(doctorId) {
        return this.schedules.filter(schedule => schedule.doctorId === doctorId);
    }
    addSchedule(doctorId, day, morningTimes, eveningTimes) {
        const newSchedule = {
            id: (0, uuid_1.v4)(),
            doctorId,
            day,
            morningTimes,
            eveningTimes,
        };
        this.schedules.push(newSchedule);
        return newSchedule;
    }
};
ConsultationScheduleService = __decorate([
    (0, common_1.Injectable)()
], ConsultationScheduleService);
exports.ConsultationScheduleService = ConsultationScheduleService;
//# sourceMappingURL=consultation-schedule.service.js.map