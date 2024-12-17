import { PredictionDocument } from './prediction.schema';
import { Model } from 'mongoose';
import { HttpService } from '@nestjs/axios';
export declare class PredictionService {
    private readonly httpService;
    private predictionModel;
    private readonly fastApiUrl;
    constructor(httpService: HttpService, predictionModel: Model<PredictionDocument>);
    makePrediction(data: any): Promise<PredictionDocument>;
}
