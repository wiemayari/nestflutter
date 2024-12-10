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
exports.DailyCheckInController = void 0;
const common_1 = require("@nestjs/common");
const daily_checkin_service_1 = require("./daily-checkin.service");
const daily_checkin_module_1 = require("./daily-checkin.module");
let DailyCheckInController = class DailyCheckInController {
    constructor(dailyCheckInService) {
        this.dailyCheckInService = dailyCheckInService;
    }
    addDailyCheckIn(dailyCheckIn) {
        return this.dailyCheckInService.addDailyCheckIn(dailyCheckIn);
    }
    getAllDailyCheckIns() {
        return this.dailyCheckInService.getAllDailyCheckIns();
    }
};
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [daily_checkin_module_1.DailyCheckinModule]),
    __metadata("design:returntype", daily_checkin_module_1.DailyCheckinModule)
], DailyCheckInController.prototype, "addDailyCheckIn", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Array)
], DailyCheckInController.prototype, "getAllDailyCheckIns", null);
DailyCheckInController = __decorate([
    (0, common_1.Controller)('daily-checkin'),
    __metadata("design:paramtypes", [daily_checkin_service_1.DailyCheckinService])
], DailyCheckInController);
exports.DailyCheckInController = DailyCheckInController;
//# sourceMappingURL=daily-checkin.controller.js.map