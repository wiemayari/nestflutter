import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type CheckInDocument = CheckIn & Document;

@Schema()
export class CheckIn {
  @Prop({ required: true }) userId: string;
  @Prop({ required: true }) date: string;
  @Prop({ required: true }) mood: number;
  @Prop({ type: [String], default: [] }) discomforts: string[];
  @Prop() elaboration: string;
}

export const CheckInSchema = SchemaFactory.createForClass(CheckIn);
