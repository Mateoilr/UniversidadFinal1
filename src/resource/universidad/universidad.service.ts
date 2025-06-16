import { Injectable } from '@nestjs/common';
import { CreateUniversidadDto } from './dto/create-universidad.dto';
import { UpdateUniversidadDto } from './dto/update-universidad.dto';
import { PrismaClient } from 'generated/prisma';

@Injectable()
export class UniversidadService {
  constructor(private prisma: PrismaClient) {}
  async findAll() {
    const carreras = await this.prisma.carrera.findMany();
  const estudiantes = await this.prisma.estudiante.findMany();
  const materias = await this.prisma.materia.findMany();
  const docentes = await this.prisma.docente.findMany();

return{
  carreras,
  estudiantes, 
  materias, 
  docentes
}
  }}
