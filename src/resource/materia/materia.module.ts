import { Module } from '@nestjs/common';
import { MateriaService } from './materia.service';
import { MateriaController } from './materia.controller';
import { PrismaClient } from 'generated/prisma';

@Module({

  controllers: [MateriaController],
  providers: [MateriaService, PrismaClient],
})
export class MateriaModule {}
