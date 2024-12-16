import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ResponseController } from './responsee.controller';
import { ResponseeService } from './responsee.service';
import { Responsee, ResponseeSchema } from './responsee.schema';
import { GeminiModule } from 'src/gemini/gemini.module'; // Importer GeminiModule

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Responsee.name, schema: ResponseeSchema }]),
    GeminiModule, // Assurez-vous d'importer GeminiModule
  ],
  controllers: [ResponseController],
  providers: [ResponseeService],
})
export class ResponseeModule {}
