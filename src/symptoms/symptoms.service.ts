import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Symptom } from './symptoms.dto';

@Injectable()
export class SymptomsService {
  constructor(@InjectModel(Symptom.name) private symptomModel: Model<Symptom>) {}

  async saveSymptoms(userId: string, symptoms: string[]) {
    console.log('Saving symptoms to DB:', { userId, symptoms });
    const newRecord = new this.symptomModel({ userId, symptoms });
    const result = await newRecord.save();
    console.log('Save successful:', result);
    return result;
  }
  
  
}
