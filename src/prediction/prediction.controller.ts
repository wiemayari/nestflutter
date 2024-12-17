import { Controller, Post, Body,Get } from '@nestjs/common';
import { PredictionService } from './prediction.service';

@Controller('predictions')
export class PredictionController {
  constructor(private readonly predictionService: PredictionService) {}

  @Post()
  async createPrediction(@Body() data: any) {
    return this.predictionService.makePrediction(data);
  }

  @Get()
  async getAllPredictions() {
    return this.predictionService.getAllPredictions();
  }
}
