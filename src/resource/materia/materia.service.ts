import { Injectable } from '@nestjs/common';
import { CreateMateriaDto } from './dto/create-materia.dto';
import { UpdateMateriaDto } from './dto/update-materia.dto';
import { PrismaClient } from 'generated/prisma';

@Injectable()
export class MateriaService {
  constructor(private prisma: PrismaClient) {}

  async create(dto: CreateMateriaDto) {
    return this.prisma.materia.create({
      data: {
        nombre: dto.nombre,
        carrera: { connect: { id: dto.carreraId } },
      },
    });
  }

  async findAll() {
    return this.prisma.materia.findMany({
      
    });
  }
}
