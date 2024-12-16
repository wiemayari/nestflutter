import { Controller, Post, Body } from '@nestjs/common';
import { GeminiService } from 'src/gemini/gemini.service';
import { ResponseeService } from './responsee.service';
import { CreateResponseeDto } from './create-responsee.dto';

@Controller('response')
export class ResponseController {
  constructor(
    private readonly geminiService: GeminiService,
    private readonly responseeService: ResponseeService
  ) {}

  @Post()
  async getResponse(@Body('query') query: string) {
    // Appel à l'API Gemini
    const aiResponse = await this.geminiService.getAIResponse(query);
    const category = this.categorizeQuestion(query);

    // Préparation des données pour MongoDB
    const responseDto: CreateResponseeDto = {
      query,
      response: aiResponse,
      category,
    };

    // Enregistrement dans MongoDB
    const savedResponse = await this.responseeService.create(responseDto);

    return savedResponse; // Retourne la réponse sauvegardée
  }

  private categorizeQuestion(query: string): string {
    const pregnancyKeywords = ['enceinte', 'grossesse', 'symptômes', 'accouchement'];
    const babyKeywords = ['bébé', 'nourrisson', 'allaitement', 'enfant'];

    if (pregnancyKeywords.some(keyword => query.toLowerCase().includes(keyword))) {
      return 'pregnancy';
    } else if (babyKeywords.some(keyword => query.toLowerCase().includes(keyword))) {
      return 'baby';
    }
    return 'general';
  }
}
