import { Injectable } from '@nestjs/common';

@Injectable()
export class ClienteService {
  private clientes = [
    { id: 1, nome: 'Cliente 1' },
    { id: 2, nome: 'Cliente 2' },
  ];

  getAllClientes() {
    return this.clientes;
  }

  createCliente(nome: string) {
    const newCliente = {
      id: this.clientes.length + 1,
      nome,
    };
    this.clientes.push(newCliente);
    return newCliente;
  }
}
