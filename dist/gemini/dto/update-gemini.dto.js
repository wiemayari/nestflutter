"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateGeminiDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_gemini_dto_1 = require("./create-gemini.dto");
class UpdateGeminiDto extends (0, mapped_types_1.PartialType)(create_gemini_dto_1.CreateGeminiDto) {
}
exports.UpdateGeminiDto = UpdateGeminiDto;
//# sourceMappingURL=update-gemini.dto.js.map