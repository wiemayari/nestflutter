import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { PredictionController } from './prediction.controller';
import { PredictionService } from './prediction.service';
import { PredictionSchema } from './prediction.schema';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [
    HttpModule, // Permet d'appeler des API externes
    MongooseModule.forFeature([{ name: 'Prediction', schema: PredictionSchema }]),
  ],
  controllers: [PredictionController],
  providers: [PredictionService],
})
export class PredictionModule {}
