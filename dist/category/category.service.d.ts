import { Category } from './category.model';
export declare class CategoryService {
    private categories;
    getAllCategories(): Category[];
    addCategory(name: string, description: string): Category;
}
