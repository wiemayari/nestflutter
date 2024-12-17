"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PredictionService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("mongoose");
const mongoose_2 = require("@nestjs/mongoose");
const axios_1 = require("@nestjs/axios");
const rxjs_1 = require("rxjs");
let PredictionService = class PredictionService {
    constructor(httpService, predictionModel) {
        this.httpService = httpService;
        this.predictionModel = predictionModel;
        this.fastApiUrl = 'http://127.0.0.1:8000/predict';
    }
    async makePrediction(data) {
        var _a;
        try {
            const formattedData = {
                Age: data.age,
                SystolicBP: data.systolicBP,
                DiastolicBP: data.diastolicBP,
                BS: data.bs,
                BodyTemp: data.bodyTemp,
                HeartRate: data.heartRate,
            };
            console.log('Données formatées pour FastAPI :', formattedData);
            const response = await (0, rxjs_1.firstValueFrom)(this.httpService.post(this.fastApiUrl, formattedData));
            console.log('Réponse de FastAPI :', response.data);
            const riskLevel = response.data.RiskLevel;
            const prediction = new this.predictionModel(Object.assign(Object.assign({}, data), { riskLevel, createdAt: new Date() }));
            const savedPrediction = await prediction.save();
            console.log('Prédiction sauvegardée dans MongoDB :', savedPrediction);
            return savedPrediction;
        }
        catch (error) {
            console.error('Erreur lors de la prédiction :', ((_a = error.response) === null || _a === void 0 ? void 0 : _a.data) || error.message);
            throw new common_1.HttpException(`Erreur lors de la prédiction : ${error.message}`, common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    async getAllPredictions() {
        try {
            const predictions = await this.predictionModel.find().exec();
            console.log('Toutes les prédictions récupérées :', predictions);
            return predictions;
        }
        catch (error) {
            console.error('Erreur lors de la récupération des prédictions :', error.message);
            throw new common_1.HttpException(`Erreur lors de la récupération des prédictions : ${error.message}`, common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
};
PredictionService = __decorate([
    (0, common_1.Injectable)(),
    __param(1, (0, mongoose_2.InjectModel)('Prediction')),
    __metadata("design:paramtypes", [axios_1.HttpService,
        mongoose_1.Model])
], PredictionService);
exports.PredictionService = PredictionService;
//# sourceMappingURL=prediction.service.js.map