import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './User/User.module';
import { MongooseModule } from '@nestjs/mongoose';
import { JwtModule } from '@nestjs/jwt';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { RolesModule } from './roles/roles.module';
import { ToDoModule } from './todo/todo.module';
import { ConsultationScheduleModule } from './consultation-schedule/consultation-schedule.module';
import { ConsultationScheduleController } from './consultation-schedule/consultation-schedule.controller';
import { CategoryService } from './category/category.service';
import { CategoryController } from './category/category.controller';
import { CategoryModule } from './category/category.module';
import { ConsultationScheduleService } from './consultation-schedule/consultation-schedule.service';
import { SymptomsModule } from './symptoms/symptoms.module';
import config from './config/config';
import { CheckInController } from './checkin/checkin.controller';
import { CheckInModule } from './checkin/checkin.module';
import { CheckInService } from './checkin/checkin.service';
import { GeminiModule } from './gemini/gemini.module';
import { ResponseeModule } from './responsee/responsee.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      cache: true,
      load: [config],
    }),
    JwtModule.registerAsync({
      imports: [ConfigModule],
      useFactory: async (config) => ({
        secret: config.get('jwt.secret'),
      }),
      global: true,
      inject: [ConfigService],
    }),
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: async (config: ConfigService) => ({
        uri: config.get('database.connectionString'),
      }),
      inject: [ConfigService],
    }),
    CheckInModule,
    AuthModule,
    RolesModule,
    ToDoModule,
    CategoryModule,
    ConsultationScheduleModule,
    SymptomsModule,
    GeminiModule,
    ResponseeModule,
  ],
  controllers: [AppController, CategoryController, ConsultationScheduleController],
  providers: [AppService, CategoryService, ConsultationScheduleService],
})
export class AppModule {}
