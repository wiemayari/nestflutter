import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, SchemaTypes, Types } from 'mongoose';
@Schema()
export class User extends Document {
  @Prop({ required: true })
  username: string;

  @Prop({ required: true, unique: true })
  email: string;

  @Prop({ required: true })
  password: string;

  @Prop({ required: true })
  bio: string;

  @Prop({ required: true })
  imageUri: string;

  @Prop({ required: false, type: SchemaTypes.ObjectId })
  roleId?: Types.ObjectId;

  @Prop({ type: [{ doctorName: String, category: String }], default: [] })
  selectedDoctors: { doctorName: string; category: string }[];
}

export const UserSchema = SchemaFactory.createForClass(User);
