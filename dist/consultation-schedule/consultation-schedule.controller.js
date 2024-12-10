"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConsultationScheduleController = void 0;
const common_1 = require("@nestjs/common");
const consultation_schedule_service_1 = require("./consultation-schedule.service");
const consultation_schedule_model_1 = require("./consultation-schedule.model");
let ConsultationScheduleController = class ConsultationScheduleController {
    constructor(consultationScheduleService) {
        this.consultationScheduleService = consultationScheduleService;
    }
    getScheduleByDoctorId(doctorId) {
        return this.consultationScheduleService.getScheduleByDoctorId(doctorId);
    }
    addSchedule(body) {
        return this.consultationScheduleService.addSchedule(body.doctorId, body.day, body.morningTimes, body.eveningTimes);
    }
};
__decorate([
    (0, common_1.Get)(':doctorId'),
    __param(0, (0, common_1.Body)('doctorId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Array)
], ConsultationScheduleController.prototype, "getScheduleByDoctorId", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", consultation_schedule_model_1.consultationScheduleModel)
], ConsultationScheduleController.prototype, "addSchedule", null);
ConsultationScheduleController = __decorate([
    (0, common_1.Controller)('schedules'),
    __metadata("design:paramtypes", [consultation_schedule_service_1.ConsultationScheduleService])
], ConsultationScheduleController);
exports.ConsultationScheduleController = ConsultationScheduleController;
//# sourceMappingURL=consultation-schedule.controller.js.map