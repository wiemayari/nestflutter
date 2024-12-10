import { CategoryService } from './category.service';
import { Category } from './category.model';
export declare class CategoryController {
    private readonly categoryService;
    constructor(categoryService: CategoryService);
    getAllCategories(): Category[];
    addCategory(body: {
        name: string;
        description: string;
    }): Category;
}
