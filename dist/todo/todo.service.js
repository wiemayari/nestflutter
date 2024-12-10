"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ToDoService = void 0;
const common_1 = require("@nestjs/common");
let ToDoService = class ToDoService {
    constructor() {
        this.todos = [
            { id: 1, title: 'My pregnancy test is positive! What do I do now?', subtitle: '0 of 8 completed', completed: 0, total: 8 },
            { id: 2, title: 'Preparing for childbirth', subtitle: '0 of 6 completed', completed: 0, total: 6 },
            { id: 3, title: 'Baby clothes', subtitle: '0 of 10 completed', completed: 0, total: 10 },
            { id: 4, title: 'The hospital bag for the baby', subtitle: '0 of 9 completed', completed: 0, total: 9 },
            { id: 5, title: 'The hospital bag for mom', subtitle: '0 of 12 completed', completed: 0, total: 12 },
        ];
    }
    getAllToDos() {
        return this.todos;
    }
    updateTaskCompletion(id, completed) {
        const task = this.todos.find(todo => todo.id === id);
        if (task) {
            task.completed = completed;
            task.subtitle = `${completed} of ${task.total} completed`;
        }
        return task;
    }
};
ToDoService = __decorate([
    (0, common_1.Injectable)()
], ToDoService);
exports.ToDoService = ToDoService;
//# sourceMappingURL=todo.service.js.map