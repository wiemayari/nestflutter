import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Role extends Document {
  @Prop({ required: true, unique: true })
  name: string;

  @Prop({ default: [] }) // Ex : "read", "write", "delete"
  permissions: string[];
}

export const RoleSchema = SchemaFactory.createForClass(Role);
