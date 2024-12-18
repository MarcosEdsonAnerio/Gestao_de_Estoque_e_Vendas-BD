import { Injectable } from '@nestjs/common';
import { ClientesService } from '../clientes/clientes.service';

@Injectable()
export class AuthService {
  constructor(private readonly clientesService: ClientesService) {}

  async validateUser(username, pass): Promise<any> {
    const cliente = await this.clientesService.findOne(username);

    if (cliente && cliente.password === pass) {
      const { password, ...result } = cliente;
      return result;
    }

    return null;
  }
}
