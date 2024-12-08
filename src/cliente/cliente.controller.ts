import { Controller, Get, Post, Body, Render } from '@nestjs/common';
import { ClienteService } from './cliente.service';

@Controller('cliente')
export class ClienteController {
  constructor(private readonly clienteService: ClienteService) {}

  @Get()
  @Render('index')
  getAllClientes() {
    const clientes = this.clienteService.getAllClientes();
    return { clientes };
  }

  @Post()
  createCliente(@Body() body: { nome: string }) {
    this.clienteService.createCliente(body.nome);
    return { redirect: '/cliente' };
  }
}
