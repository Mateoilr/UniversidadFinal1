import { Injectable } from '@nestjs/common';
import { CreateCarreraDto } from './dto/create-carrera.dto';
import { UpdateCarreraDto } from './dto/update-carrera.dto';
import { PrismaClient } from 'generated/prisma';
@Injectable()
export class CarreraService {
  constructor(private prisma: PrismaClient) {}

  async create(dto: CreateCarreraDto) {
    return this.prisma.carrera.create({ data: dto });
  }

  async findAll() {
    return this.prisma.carrera.findMany({
      
    });
  }
}