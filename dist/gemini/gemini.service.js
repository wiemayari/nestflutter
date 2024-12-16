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
Object.defineProperty(exports, "__esModule", { value: true });
exports.GeminiService = void 0;
const axios_1 = require("@nestjs/axios");
const common_1 = require("@nestjs/common");
const rxjs_1 = require("rxjs");
let GeminiService = class GeminiService {
    constructor(httpService) {
        this.httpService = httpService;
        this.GEMINI_API_URL = 'https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent';
        this.API_KEY = 'AIzaSyBKs8Yrr1IVA2mPRuvr042cG4_09dyhssg';
    }
    async getAIResponse(question) {
        var _a, _b, _c, _d, _e;
        const body = {
            contents: [
                {
                    parts: [
                        { text: question }
                    ]
                }
            ]
        };
        try {
            const response = await (0, rxjs_1.firstValueFrom)(this.httpService.post(`${this.GEMINI_API_URL}?key=${this.API_KEY}`, body));
            console.log('Réponse de Gemini :', response.data);
            return ((_d = (_c = (_b = (_a = response.data) === null || _a === void 0 ? void 0 : _a.candidates[0]) === null || _b === void 0 ? void 0 : _b.content) === null || _c === void 0 ? void 0 : _c.parts[0]) === null || _d === void 0 ? void 0 : _d.text) || 'Réponse non disponible.';
        }
        catch (error) {
            console.error('Erreur API Gemini :', ((_e = error.response) === null || _e === void 0 ? void 0 : _e.data) || error.message);
            throw new Error('Impossible de générer la réponse avec l\'API Gemini');
        }
    }
};
GeminiService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [axios_1.HttpService])
], GeminiService);
exports.GeminiService = GeminiService;
//# sourceMappingURL=gemini.service.js.map