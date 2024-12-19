import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { ServidorDTO } from './servidorDTO';
import { Servidor } from './servidor.model';

@Injectable()
export class ServidorService {
  constructor(
    @InjectModel(Servidor)
    private servidorModel: typeof Servidor,
  ) {}

  async findAll(): Promise<ServidorDTO[]> {
    return this.servidorModel.findAll({
      include: ['campus'], // Relacionando com a tabela campus
    });
  }

  async create(servidor: ServidorDTO): Promise<ServidorDTO> {
    return this.servidorModel.create(servidor);
  }
}
