import { Injectable } from '@nestjs/common';
import { CreateCarreraDocenteDto } from './dto/create-carrera-docente.dto';
import { UpdateCarreraDocenteDto } from './dto/update-carrera-docente.dto';
import { PrismaClient } from 'generated/prisma';

@Injectable()



export class CarreraDocentesService {
  
  constructor(private prisma: PrismaClient) {}

  create(createCarreraDocenteDto: CreateCarreraDocenteDto) {
    return this.prisma.carreradocente.create({
      data: {
        carrera: { connect: { id: createCarreraDocenteDto.carreraId } },
        docente: { connect: { id: createCarreraDocenteDto.docenteId } },
    }
    });
  }

  async findAll() {
    const data = await this.prisma.carreradocente.findMany({
      include: {
        carrera: true,
        docente: true,
      },
    });

    return data.map(({ id, carrera, docente }) => ({
      id,
      carrera,
      docente,
    }));
    }
  }
