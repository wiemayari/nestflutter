import { Model } from 'mongoose';
import { Responsee, ResponseeDocument } from './responsee.schema';
import { CreateResponseeDto } from './create-responsee.dto';
export declare class ResponseeService {
    private responseeModel;
    constructor(responseeModel: Model<ResponseeDocument>);
    create(createResponseeDto: CreateResponseeDto): Promise<Responsee>;
    findAllByUser(userId: string): Promise<Responsee[]>;
}
