import { Module } from '@nestjs/common';
import { CarreraDocentesService } from './carrera-docentes.service';
import { CarreraDocentesController } from './carrera-docentes.controller';
import { PrismaClient } from 'generated/prisma';

@Module({
  controllers: [CarreraDocentesController],
  providers: [CarreraDocentesService, PrismaClient],
})
export class CarreraDocentesModule {}
