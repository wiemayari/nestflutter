import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { GeminiService } from './gemini.service';
import { GeminiController } from './gemini.controller';

@Module({
  imports: [HttpModule], // Importation du HttpModule
  providers: [GeminiService],
  exports: [GeminiService], // Exporte le service pour l'utiliser ailleurs

})
export class GeminiModule {}
