import { GeminiService } from './gemini.service';
export declare class GeminiController {
    private readonly geminiService;
    constructor(geminiService: GeminiService);
    askQuestion(question: string): Promise<{
        question: string;
        response: string;
    }>;
}
