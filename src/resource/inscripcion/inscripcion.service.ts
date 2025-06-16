import { Injectable } from '@nestjs/common';
import { CreateInscripcionDto } from './dto/create-inscripcion.dto';
import { UpdateInscripcionDto } from './dto/update-inscripcion.dto';

import { PrismaClient } from 'generated/prisma';

@Injectable()
export class InscripcionService {
  constructor(private prisma: PrismaClient) {}

  async create(dto: CreateInscripcionDto) {
    return this.prisma.inscripcion.create({
      data: {
        estudiante: { connect: { id: dto.estudianteId } },
        materia: { connect: { id: dto.materiaId } },
      },
    });
  }

  async findAll() {
    // Consulta todas las inscripciones, incluyendo los datos del estudiante y la materia relacionada
    const inscripciones = await this.prisma.inscripcion.findMany({
      include: {
        estudiante: true, 
        materia: true,    
      },
    });
  
    // Creamos un objeto para agrupar estudiantes por materia
    const resultado = {};
  
    // Recorremos cada inscripción obtenida
    for (const { materia, estudiante } of inscripciones) {
      // Si la materia aún no ha sido registrada en el resultado, la inicializamos
      if (!resultado[materia.id]) {
        resultado[materia.id] = {
          id: materia.id,            
          nombre: materia.nombre,    
          estudiantes: [],           
        };
      }
  
      // Agregamos el estudiante actual a la lista de la materia correspondiente
      resultado[materia.id].estudiantes.push({
        id: estudiante.id,           
        nombre: estudiante.nombre,   
      });
    }
  
    // Convertimos el objeto resultado en un array que será una materia con su respectiva lista de estudiantes
    return Object.values(resultado);
  }



}  