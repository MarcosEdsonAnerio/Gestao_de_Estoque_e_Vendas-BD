import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CampusDTO } from './campusDTO';
import { Campus } from './campus.model';

@Injectable()
export class CampusService {
  constructor(
    @InjectModel(Campus)
    private campusModel: typeof Campus,
  ) {}

  async findAll(): Promise<CampusDTO[]> {
    return this.campusModel.findAll();
  }

  async create(campus: CampusDTO): Promise<CampusDTO> {
    return this.campusModel.create(campus);
  }
}
