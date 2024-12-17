import { Controller, Post,Get , Body ,Query} from '@nestjs/common';
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
async getResponse(@Body('query') query: string, @Body('userId') userId: string) {
  // Validate userId
  if (!userId) {
    throw new Error('userId is required');
  }

  // Call the Gemini API
  const aiResponse = await this.geminiService.getAIResponse(query);

  // Categorize the question
  const category = this.categorizeQuestion(query);

  // Prepare data for MongoDB
  const responseDto: CreateResponseeDto = {
    query,
    response: aiResponse,
    category,
    userId, // Include userId
  };

  // Save to MongoDB
  const savedResponse = await this.responseeService.create(responseDto);

  return savedResponse; // Return the saved response
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

  @Get()
  async getAllResponses(@Query('userId') userId: string) {
    if (userId) {
      return this.responseeService.findAllByUser(userId);
    }
    return this.responseeService.findAllByUser(userId);
  }
}
