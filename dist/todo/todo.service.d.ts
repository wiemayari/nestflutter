import { ToDo } from './todo.model';
export declare class ToDoService {
    private todos;
    getAllToDos(): ToDo[];
    updateTaskCompletion(id: number, completed: number): ToDo;
}
