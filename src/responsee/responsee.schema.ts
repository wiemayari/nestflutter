import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type ResponseeDocument = Responsee & Document;

@Schema()
export class Responsee {
  @Prop({ required: true })
  query: string;

  @Prop({ required: true })
  response: string;

  @Prop({ required: true })
  category: string;

  @Prop({ default: Date.now })
  createdAt: Date;
}

export const ResponseeSchema = SchemaFactory.createForClass(Responsee);
