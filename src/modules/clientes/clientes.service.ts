// src/clientes/clientes.service.ts
import { Injectable } from '@nestjs/common';

@Injectable()
export class ClientesService {
  private clientes = [
    { id: 1, nome: 'Cliente 1', password: 'senha1' },  // Adicionando a senha
    { id: 2, nome: 'Cliente 2', password: 'senha2' },  // Adicionando a senha
    // Outros clientes...
  ];

  findAll() {
    return this.clientes;
  }

  findOne(id: number) {
    return this.clientes.find(cliente => cliente.id === id);
  }
}
