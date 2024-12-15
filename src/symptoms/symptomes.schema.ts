import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type SymptomDocument = Symptom & Document;

@Schema()
export class Symptom {
  @Prop({ required: true })
  userId: string;

  @Prop({ required: true })
  symptoms: string[];
}

export const SymptomSchema = SchemaFactory.createForClass(Symptom);
