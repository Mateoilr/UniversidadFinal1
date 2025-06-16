import { Module } from '@nestjs/common';
import { UsuarioService } from './usuario.service';
import { UsuarioController } from './usuario.controller';
import { PrismaClient } from 'generated/prisma';


@Module({
  controllers: [UsuarioController],
  providers: [UsuarioService, PrismaClient],
})
export class UsuarioModule {}
