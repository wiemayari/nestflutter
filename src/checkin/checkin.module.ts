import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CheckInController } from './checkin.controller';
import { CheckInService } from './checkin.service';
import { CheckIn, CheckInSchema } from './checkin.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: CheckIn.name, schema: CheckInSchema }]), // Lier le modèle
  ],
  controllers: [CheckInController],
  providers: [CheckInService],
  exports: [CheckInService], // Si nécessaire pour d'autres modules
})
export class CheckInModule {}
