/// <reference types="mongoose/types/aggregate" />
/// <reference types="mongoose/types/callback" />
/// <reference types="mongoose/types/collection" />
/// <reference types="mongoose/types/connection" />
/// <reference types="mongoose/types/cursor" />
/// <reference types="mongoose/types/document" />
/// <reference types="mongoose/types/error" />
/// <reference types="mongoose/types/expressions" />
/// <reference types="mongoose/types/helpers" />
/// <reference types="mongoose/types/middlewares" />
/// <reference types="mongoose/types/indexes" />
/// <reference types="mongoose/types/models" />
/// <reference types="mongoose/types/mongooseoptions" />
/// <reference types="mongoose/types/pipelinestage" />
/// <reference types="mongoose/types/populate" />
/// <reference types="mongoose/types/query" />
/// <reference types="mongoose/types/schemaoptions" />
/// <reference types="mongoose/types/schematypes" />
/// <reference types="mongoose/types/session" />
/// <reference types="mongoose/types/types" />
/// <reference types="mongoose/types/utility" />
/// <reference types="mongoose/types/validation" />
/// <reference types="mongoose/types/virtuals" />
/// <reference types="mongoose/types/inferschematype" />
/// <reference types="mongoose/types/inferrawdoctype" />
import { Document } from 'mongoose';
export type PredictionDocument = Prediction & Document;
export declare class Prediction {
    age: number;
    systolicBP: number;
    diastolicBP: number;
    bs: number;
    bodyTemp: number;
    heartRate: number;
    riskLevel: string;
    createdAt: Date;
}
export declare const PredictionSchema: import("mongoose").Schema<Prediction, import("mongoose").Model<Prediction, any, any, any, Document<unknown, any, Prediction> & Prediction & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Prediction, Document<unknown, {}, import("mongoose").FlatRecord<Prediction>> & import("mongoose").FlatRecord<Prediction> & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}>;
