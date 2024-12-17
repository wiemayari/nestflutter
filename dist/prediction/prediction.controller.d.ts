import { PredictionService } from './prediction.service';
export declare class PredictionController {
    private readonly predictionService;
    constructor(predictionService: PredictionService);
    createPrediction(data: any): Promise<import("./prediction.schema").PredictionDocument>;
}
