import { Module } from '@nestjs/common';
import { ClientesController } from './clientes.controller';
import { ClientesService } from './clientes.service'; // Alterado para ClientesService

@Module({
  controllers: [ClientesController],
  providers: [ClientesService], // Alterado para ClientesService
  exports: [ClientesService], // Alterado para ClientesService
})
export class ClientesModule {} // Alterado para ClientesModule
