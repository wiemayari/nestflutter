import { Controller, Post, Body } from '@nestjs/common';
import { GeminiService } from './gemini.service';

@Controller('gemini')
export class GeminiController {
  constructor(private readonly geminiService: GeminiService) {}

  @Post('ask')
  async askQuestion(@Body('question') question: string) {
    const response = await this.geminiService.getAIResponse(question);
    return { question, response };
  }
}
