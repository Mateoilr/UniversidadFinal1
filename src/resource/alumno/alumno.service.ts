
import { Injectable } from '@nestjs/common';
import { PrismaClient } from 'generated/prisma'; 
import { CreateAlumnoDto } from './dto/create-alumno.dto';

@Injectable()
export class AlumnoService {
  
  constructor(private prisma: PrismaClient) {};

  async create(dto: CreateAlumnoDto) {
    const { estudianteId, materiaId, carreraId } = dto;
    return this.prisma.alumno.create({
    data: { estudianteId, materiaId, carreraId
    },
    include: {
      estudiante: true,
      materia: true,
      carrera: true,
    },
  });
  }


  async findAll() {
    const alumnos = await this.prisma.alumno.findMany({
      include: {
        estudiante: true,
        materia: true,
        carrera: true,
        },
      });
    return alumnos.map((alumno) => ({
      id: alumno.id,
      estudiante: {
        id: alumno.estudiante.id,
        nombre: alumno.estudiante.nombre,
      },
      carrera: {
        id: alumno.carrera.id,
        nombre: alumno.carrera.nombre,
      },
      materias: {
        id: alumno.materia.id,
        nombre: alumno.materia.nombre,
      },    
    }
));}}

