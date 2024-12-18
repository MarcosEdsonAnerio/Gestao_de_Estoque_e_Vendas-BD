import { Module } from '@nestjs/common';
import { AuthModule } from './modules/auth/auth.module';
import { ClientesModule } from './modules/clientes/clientes.module'; // Alterado para ClientesModule
import { AppController } from './app.controller';

@Module({
  imports: [AuthModule, ClientesModule], // Alterado para ClientesModule
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
