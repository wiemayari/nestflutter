"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChecklistService = void 0;
const common_1 = require("@nestjs/common");
const uuid_1 = require("uuid");
let ChecklistService = class ChecklistService {
    constructor() {
        this.checklists = [];
    }
    getAllChecklists() {
        return this.checklists;
    }
    createChecklist(title, tasks) {
        const newChecklist = {
            id: (0, uuid_1.v4)(),
            title,
            tasks: tasks.map((taskName) => ({ id: (0, uuid_1.v4)(), name: taskName, completed: false })),
            totalTasks: tasks.length,
            completedTasks: 0,
        };
        this.checklists.push(newChecklist);
        return newChecklist;
    }
    updateTaskStatus(checklistId, taskId, completed) {
        const checklist = this.checklists.find((cl) => cl.id === checklistId);
        if (checklist) {
            const task = checklist.tasks.find((t) => t.id === taskId);
            if (task) {
                task.completed = completed;
                checklist.completedTasks = checklist.tasks.filter((t) => t.completed).length;
            }
        }
        return checklist;
    }
};
ChecklistService = __decorate([
    (0, common_1.Injectable)()
], ChecklistService);
exports.ChecklistService = ChecklistService;
//# sourceMappingURL=checklist.service.js.map