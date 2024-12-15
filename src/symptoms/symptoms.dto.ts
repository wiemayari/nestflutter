import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Symptom extends Document {
  @Prop({ required: true })
  userId: string;

  @Prop({ type: [String], required: true })
  symptoms: string[];
}

export const SymptomSchema = SchemaFactory.createForClass(Symptom);
