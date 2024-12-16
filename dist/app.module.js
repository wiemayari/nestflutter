"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const User_module_1 = require("./User/User.module");
const mongoose_1 = require("@nestjs/mongoose");
const jwt_1 = require("@nestjs/jwt");
const config_1 = require("@nestjs/config");
const roles_module_1 = require("./roles/roles.module");
const todo_module_1 = require("./todo/todo.module");
const consultation_schedule_module_1 = require("./consultation-schedule/consultation-schedule.module");
const consultation_schedule_controller_1 = require("./consultation-schedule/consultation-schedule.controller");
const category_service_1 = require("./category/category.service");
const category_controller_1 = require("./category/category.controller");
const category_module_1 = require("./category/category.module");
const consultation_schedule_service_1 = require("./consultation-schedule/consultation-schedule.service");
const symptoms_module_1 = require("./symptoms/symptoms.module");
const config_2 = require("./config/config");
const checkin_module_1 = require("./checkin/checkin.module");
const gemini_module_1 = require("./gemini/gemini.module");
const responsee_module_1 = require("./responsee/responsee.module");
let AppModule = class AppModule {
};
AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot({
                isGlobal: true,
                cache: true,
                load: [config_2.default],
            }),
            jwt_1.JwtModule.registerAsync({
                imports: [config_1.ConfigModule],
                useFactory: async (config) => ({
                    secret: config.get('jwt.secret'),
                }),
                global: true,
                inject: [config_1.ConfigService],
            }),
            mongoose_1.MongooseModule.forRootAsync({
                imports: [config_1.ConfigModule],
                useFactory: async (config) => ({
                    uri: config.get('database.connectionString'),
                }),
                inject: [config_1.ConfigService],
            }),
            checkin_module_1.CheckInModule,
            User_module_1.AuthModule,
            roles_module_1.RolesModule,
            todo_module_1.ToDoModule,
            category_module_1.CategoryModule,
            consultation_schedule_module_1.ConsultationScheduleModule,
            symptoms_module_1.SymptomsModule,
            gemini_module_1.GeminiModule,
            responsee_module_1.ResponseeModule,
        ],
        controllers: [app_controller_1.AppController, category_controller_1.CategoryController, consultation_schedule_controller_1.ConsultationScheduleController],
        providers: [app_service_1.AppService, category_service_1.CategoryService, consultation_schedule_service_1.ConsultationScheduleService],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map