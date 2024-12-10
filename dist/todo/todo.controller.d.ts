import { ToDoService } from './todo.service';
import { ToDo } from './todo.model';
export declare class ToDoController {
    private readonly todoService;
    constructor(todoService: ToDoService);
    getAllToDos(): ToDo[];
    updateToDoCompletion(id: number, body: {
        completed: number;
    }): ToDo;
}
