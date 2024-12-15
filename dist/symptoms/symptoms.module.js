"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SymptomsModule = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const symptoms_controller_1 = require("./symptoms.controller");
const symptoms_service_1 = require("./symptoms.service");
const symptoms_dto_1 = require("./symptoms.dto");
let SymptomsModule = class SymptomsModule {
};
SymptomsModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forFeature([{ name: symptoms_dto_1.Symptom.name, schema: symptoms_dto_1.SymptomSchema }]),
        ],
        controllers: [symptoms_controller_1.SymptomsController],
        providers: [symptoms_service_1.SymptomsService],
        exports: [symptoms_service_1.SymptomsService],
    })
], SymptomsModule);
exports.SymptomsModule = SymptomsModule;
//# sourceMappingURL=symptoms.module.js.map