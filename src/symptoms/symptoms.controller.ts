import { Body, Controller, Post } from '@nestjs/common';
import { SymptomsService } from './symptoms.service';

@Controller('symptoms')
export class SymptomsController {
  constructor(private readonly symptomsService: SymptomsService) {}

  @Post('save')
async saveSymptoms(@Body() symptomsData: { userId: string; symptoms: string[] }) {
  console.log('Request received:', symptomsData);
  const savedSymptoms = await this.symptomsService.saveSymptoms(
    symptomsData.userId,
    symptomsData.symptoms,
  );
  console.log('Saved symptoms:', savedSymptoms);
  return savedSymptoms;
}

}
