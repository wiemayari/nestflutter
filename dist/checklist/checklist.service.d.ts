import { Checklist } from './checklist.model';
export declare class ChecklistService {
    private checklists;
    getAllChecklists(): Checklist[];
    createChecklist(title: string, tasks: string[]): Checklist;
    updateTaskStatus(checklistId: string, taskId: string, completed: boolean): Checklist;
}
