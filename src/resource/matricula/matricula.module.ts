import { Module } from '@nestjs/common';
import { MatriculaService } from './matricula.service';
import { MatriculaController } from './matricula.controller';
import { PrismaClient } from 'generated/prisma';

@Module({

  controllers: [MatriculaController],
  providers: [MatriculaService, PrismaClient],
})
export class MatriculaModule {}
