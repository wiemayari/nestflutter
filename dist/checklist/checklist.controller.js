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
exports.ChecklistController = void 0;
const common_1 = require("@nestjs/common");
const checklist_service_1 = require("./checklist.service");
const checklist_model_1 = require("./checklist.model");
let ChecklistController = class ChecklistController {
    constructor(checklistService) {
        this.checklistService = checklistService;
    }
    getAllChecklists() {
        return this.checklistService.getAllChecklists();
    }
    createChecklist(title, tasks) {
        return this.checklistService.createChecklist(title, tasks);
    }
    updateTaskStatus(checklistId, taskId, completed) {
        return this.checklistService.updateTaskStatus(checklistId, taskId, completed);
    }
};
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Array)
], ChecklistController.prototype, "getAllChecklists", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)('title')),
    __param(1, (0, common_1.Body)('tasks')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Array]),
    __metadata("design:returntype", checklist_model_1.Checklist)
], ChecklistController.prototype, "createChecklist", null);
__decorate([
    (0, common_1.Put)(':checklistId/:taskId'),
    __param(0, (0, common_1.Param)('checklistId')),
    __param(1, (0, common_1.Param)('taskId')),
    __param(2, (0, common_1.Body)('completed')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, Boolean]),
    __metadata("design:returntype", checklist_model_1.Checklist)
], ChecklistController.prototype, "updateTaskStatus", null);
ChecklistController = __decorate([
    (0, common_1.Controller)('checklists'),
    __metadata("design:paramtypes", [checklist_service_1.ChecklistService])
], ChecklistController);
exports.ChecklistController = ChecklistController;
//# sourceMappingURL=checklist.controller.js.map