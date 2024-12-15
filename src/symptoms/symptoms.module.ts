import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { SymptomsController } from './symptoms.controller';
import { SymptomsService } from './symptoms.service';
import { Symptom, SymptomSchema } from './symptoms.dto';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Symptom.name, schema: SymptomSchema }]),
  ],
  controllers: [SymptomsController],
  providers: [SymptomsService],
  exports: [SymptomsService],

})
export class SymptomsModule {}
