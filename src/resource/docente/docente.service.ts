import { Injectable } from '@nestjs/common';
import { CreateDocenteDto } from './dto/create-docente.dto';
import { UpdateDocenteDto } from './dto/update-docente.dto';
import { PrismaClient } from 'generated/prisma';

@Injectable()
export class DocenteService {
  constructor(private prisma: PrismaClient) {}

  async create(dto: CreateDocenteDto) {
    return this.prisma.docente.create({ data: dto });
  }

  async findAll() {
    return this.prisma.docente.findMany({
      
    });
  }
}
