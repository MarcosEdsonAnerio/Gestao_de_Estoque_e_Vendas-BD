import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { ClientesModule } from '../clientes/clientes.module';
import { AuthService } from './auth.service';
import { LocalStrategy } from './local.strategy';
import { SessionSerializer } from './session.serializer';
import { AuthController } from './auth.controller';

@Module({
  imports: [ClientesModule, PassportModule],
  controllers: [AuthController],
  providers: [AuthService, LocalStrategy, SessionSerializer],
})
export class AuthModule {}
