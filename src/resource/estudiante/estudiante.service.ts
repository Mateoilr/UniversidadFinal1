import { Injectable } from '@nestjs/common';
import { CreateEstudianteDto } from './dto/create-estudiante.dto';
import { UpdateEstudianteDto } from './dto/update-estudiante.dto';
import { PrismaClient } from 'generated/prisma';

@Injectable()
export class EstudianteService {
  constructor(private prisma: PrismaClient) {}

  async create(dto: CreateEstudianteDto) {
    return this.prisma.estudiante.create({ data: dto });
  }

  async findAll() {
    return this.prisma.estudiante.findMany({
      
    });
  }
}
