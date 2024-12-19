import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { ServidorController } from './servidor.controller';
import { ServidorService } from './servidor.service';
import { Servidor } from './servidor.model';
import { Campus } from '../campus/campus.model';

@Module({
  imports: [SequelizeModule.forFeature([Servidor, Campus])],
  controllers: [ServidorController],
  providers: [ServidorService],
})
export class ServidorModule {}