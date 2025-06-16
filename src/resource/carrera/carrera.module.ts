import { Module } from '@nestjs/common';
import { CarreraService } from './carrera.service';
import { CarreraController } from './carrera.controller';
import { PrismaClient } from 'generated/prisma';



@Module({

  controllers: [CarreraController],
  providers: [CarreraService, PrismaClient],
})
export class CarreraModule {}
