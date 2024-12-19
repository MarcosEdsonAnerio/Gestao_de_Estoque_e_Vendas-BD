import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { CampusController } from './campus.controller';
import { CampusService } from './campus.service';
import { Campus } from './campus.model';

@Module({
  imports: [SequelizeModule.forFeature([Campus])],
  controllers: [CampusController],
  providers: [CampusService],
})
export class CampusModule {}