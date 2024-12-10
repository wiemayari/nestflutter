import { ChecklistService } from './checklist.service';
import { Checklist } from './checklist.model';
export declare class ChecklistController {
    private readonly checklistService;
    constructor(checklistService: ChecklistService);
    getAllChecklists(): Checklist[];
    createChecklist(title: string, tasks: string[]): Checklist;
    updateTaskStatus(checklistId: string, taskId: string, completed: boolean): Checklist;
}
