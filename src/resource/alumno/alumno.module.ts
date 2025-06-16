import { Module } from '@nestjs/common';
import { AlumnoService } from './alumno.service';
import { AlumnoController } from './alumno.controller';
import { PrismaClient } from 'generated/prisma';


@Module({
  controllers: [AlumnoController],
  providers: [AlumnoService, PrismaClient],
})
export class AlumnoModule {}
