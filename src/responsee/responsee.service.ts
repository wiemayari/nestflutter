import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Responsee, ResponseeDocument } from './responsee.schema';
import { CreateResponseeDto } from './create-responsee.dto';

@Injectable()
export class ResponseeService {
  constructor(@InjectModel(Responsee.name) private responseeModel: Model<ResponseeDocument>) {}

  // Enregistrer une nouvelle réponse
  async create(createResponseeDto: CreateResponseeDto): Promise<Responsee> {
    const newResponse = new this.responseeModel(createResponseeDto);
    return newResponse.save();
  }
}
