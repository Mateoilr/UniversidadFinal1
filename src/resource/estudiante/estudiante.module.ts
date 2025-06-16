import { Module } from '@nestjs/common';
import { EstudianteService } from './estudiante.service';
import { EstudianteController } from './estudiante.controller';
import { PrismaClient } from 'generated/prisma';// Replace with the correct path to PrismaModule



@Module({
  
  controllers: [EstudianteController],
  providers: [EstudianteService, PrismaClient],
  exports: [EstudianteService],
})
export class EstudianteModule {}
