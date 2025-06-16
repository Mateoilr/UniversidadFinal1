import { Module } from '@nestjs/common';
import { UniversidadService } from './universidad.service';
import { UniversidadController } from './universidad.controller';
import { PrismaClient } from 'generated/prisma';

@Module({
  controllers: [UniversidadController],
  providers: [UniversidadService, PrismaClient],
})
export class UniversidadModule {}
