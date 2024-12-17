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
exports.ResponseController = void 0;
const common_1 = require("@nestjs/common");
const gemini_service_1 = require("../gemini/gemini.service");
const responsee_service_1 = require("./responsee.service");
let ResponseController = class ResponseController {
    constructor(geminiService, responseeService) {
        this.geminiService = geminiService;
        this.responseeService = responseeService;
    }
    async getResponse(query, userId) {
        if (!userId) {
            throw new Error('userId is required');
        }
        const aiResponse = await this.geminiService.getAIResponse(query);
        const category = this.categorizeQuestion(query);
        const responseDto = {
            query,
            response: aiResponse,
            category,
            userId,
        };
        const savedResponse = await this.responseeService.create(responseDto);
        return savedResponse;
    }
    categorizeQuestion(query) {
        const pregnancyKeywords = ['enceinte', 'grossesse', 'symptômes', 'accouchement'];
        const babyKeywords = ['bébé', 'nourrisson', 'allaitement', 'enfant'];
        if (pregnancyKeywords.some(keyword => query.toLowerCase().includes(keyword))) {
            return 'pregnancy';
        }
        else if (babyKeywords.some(keyword => query.toLowerCase().includes(keyword))) {
            return 'baby';
        }
        return 'general';
    }
    async getAllResponses(userId) {
        if (userId) {
            return this.responseeService.findAllByUser(userId);
        }
        return this.responseeService.findAllByUser(userId);
    }
};
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)('query')),
    __param(1, (0, common_1.Body)('userId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Promise)
], ResponseController.prototype, "getResponse", null);
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)('userId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ResponseController.prototype, "getAllResponses", null);
ResponseController = __decorate([
    (0, common_1.Controller)('response'),
    __metadata("design:paramtypes", [gemini_service_1.GeminiService,
        responsee_service_1.ResponseeService])
], ResponseController);
exports.ResponseController = ResponseController;
//# sourceMappingURL=responsee.controller.js.map