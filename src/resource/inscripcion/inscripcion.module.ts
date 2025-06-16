import { Module } from '@nestjs/common';
import { InscripcionService } from './inscripcion.service';
import { InscripcionController } from './inscripcion.controller';
import { PrismaClient } from 'generated/prisma';

@Module({
  
  controllers: [InscripcionController],
  providers: [InscripcionService, PrismaClient],
})
export class InscripcionModule {}
