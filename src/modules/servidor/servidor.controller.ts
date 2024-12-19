import { Controller, Get, Post, Body } from '@nestjs/common';
import { ServidorService } from './servidor.service';
import { ServidorDTO } from './servidorDTO';

@Controller('servidores')
export class ServidorController {
  constructor(private readonly servidorService: ServidorService) {}

  @Get()
  async getAll() {
    return this.servidorService.findAll();
  }

  @Post()
  async create(@Body() servidorDto: ServidorDTO) {
    return this.servidorService.create(servidorDto);
  }
}