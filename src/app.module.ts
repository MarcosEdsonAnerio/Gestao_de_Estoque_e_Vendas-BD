import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AuthModule } from './modules/auth/auth.module';
import { TarefaModule } from './modules/tarefa/tarefa.module';
import { UsersModule } from './modules/users/users.module';
import { CampusModule } from './modules/campus/campus.module';
import { ServidorModule } from './modules/servidor/servidor.module';

@Module({
  imports: [AuthModule, UsersModule, TarefaModule, CampusModule, ServidorModule],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
