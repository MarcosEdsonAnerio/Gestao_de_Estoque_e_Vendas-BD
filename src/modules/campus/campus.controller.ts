import { Controller, Get, Post, Body } from '@nestjs/common';
import { CampusService } from './campus.service';
import { CampusDTO } from './campusDTO';

@Controller('campus')
export class CampusController {
  constructor(private readonly campusService: CampusService) {}

  @Get()
  async getAll() {
    return this.campusService.findAll();
  }

  @Post()
  async create(@Body() campusDto: CampusDTO) {
    return this.campusService.create(campusDto);
  }
}