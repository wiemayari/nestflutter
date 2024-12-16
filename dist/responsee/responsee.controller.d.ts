import { GeminiService } from 'src/gemini/gemini.service';
import { ResponseeService } from './responsee.service';
export declare class ResponseController {
    private readonly geminiService;
    private readonly responseeService;
    constructor(geminiService: GeminiService, responseeService: ResponseeService);
    getResponse(query: string): Promise<import("./responsee.schema").Responsee>;
    private categorizeQuestion;
}
