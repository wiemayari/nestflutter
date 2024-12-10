export declare class Task {
    id: string;
    name: string;
    completed: boolean;
}
export declare class Checklist {
    id: string;
    title: string;
    tasks: Task[];
    totalTasks: number;
    completedTasks: number;
}
