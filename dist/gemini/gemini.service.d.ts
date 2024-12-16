import { HttpService } from '@nestjs/axios';
export declare class GeminiService {
    private readonly httpService;
    private readonly GEMINI_API_URL;
    private readonly API_KEY;
    constructor(httpService: HttpService);
    getAIResponse(question: string): Promise<string>;
}
