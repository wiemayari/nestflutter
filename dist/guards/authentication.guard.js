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
exports.AuthenticationGuard = void 0;
const common_1 = require("@nestjs/common");
const jwt_1 = require("@nestjs/jwt");
let AuthenticationGuard = class AuthenticationGuard {
    constructor(jwtService) {
        this.jwtService = jwtService;
    }
    canActivate(context) {
        const request = context.switchToHttp().getRequest();
        const token = this.extractTokenFromHeader(request);
        if (!token) {
            throw new common_1.UnauthorizedException('Token is missing');
        }
        try {
            const payload = this.jwtService.verify(token);
            request['userId'] = payload.userId;
            return true;
        }
        catch (e) {
            common_1.Logger.error(`Authentication failed: ${e.message}`);
            throw new common_1.UnauthorizedException('Invalid Token');
        }
    }
    extractTokenFromHeader(request) {
        var _a;
        return (_a = request.headers.authorization) === null || _a === void 0 ? void 0 : _a.split(' ')[1];
    }
};
AuthenticationGuard = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [jwt_1.JwtService])
], AuthenticationGuard);
exports.AuthenticationGuard = AuthenticationGuard;
//# sourceMappingURL=authentication.guard.js.map