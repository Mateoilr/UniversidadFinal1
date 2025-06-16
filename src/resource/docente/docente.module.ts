import { Module } from '@nestjs/common';
import { DocenteService } from './docente.service';
import { DocenteController } from './docente.controller';
import { PrismaClient } from 'generated/prisma';

@Module({

  controllers: [DocenteController],
  providers: [DocenteService, PrismaClient],
})
export class DocenteModule {}
