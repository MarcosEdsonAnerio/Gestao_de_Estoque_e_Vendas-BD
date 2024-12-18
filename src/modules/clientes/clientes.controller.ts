// src/modules/clientes/clientes.controller.ts
import { Controller, Get, Render } from '@nestjs/common';
import { ClientesService } from './clientes.service';

@Controller('clientes')
export class ClientesController {
  constructor(private readonly clientesService: ClientesService) {}

  @Get()
  @Render('clientes/index')  // O template que será renderizado
  async getClientes() {
    const clientes = await this.clientesService.findAll();
    return { clientes };  // Passando os dados para o template
  }
}