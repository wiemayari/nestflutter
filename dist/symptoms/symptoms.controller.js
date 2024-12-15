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
exports.SymptomsController = void 0;
const common_1 = require("@nestjs/common");
const symptoms_service_1 = require("./symptoms.service");
let SymptomsController = class SymptomsController {
    constructor(symptomsService) {
        this.symptomsService = symptomsService;
    }
    async saveSymptoms(symptomsData) {
        console.log('Request received:', symptomsData);
        const savedSymptoms = await this.symptomsService.saveSymptoms(symptomsData.userId, symptomsData.symptoms);
        console.log('Saved symptoms:', savedSymptoms);
        return savedSymptoms;
    }
};
__decorate([
    (0, common_1.Post)('save'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], SymptomsController.prototype, "saveSymptoms", null);
SymptomsController = __decorate([
    (0, common_1.Controller)('symptoms'),
    __metadata("design:paramtypes", [symptoms_service_1.SymptomsService])
], SymptomsController);
exports.SymptomsController = SymptomsController;
//# sourceMappingURL=symptoms.controller.js.map