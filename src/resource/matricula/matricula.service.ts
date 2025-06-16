import { Injectable } from '@nestjs/common';
import { CreateMatriculaDto } from './dto/create-matricula.dto';
import { UpdateMatriculaDto } from './dto/update-matricula.dto';
import { PrismaClient } from 'generated/prisma';

@Injectable()
export class MatriculaService {
  constructor(private prisma: PrismaClient) {
    
  }

  async create(dto: CreateMatriculaDto) {
    return this.prisma.matricula.create({
      data: {
        estudiante: { connect: { id: dto.estudianteId } },
        carrera: { connect: { id: dto.carreraId } },
      },
    });
  }

  async findAll() {
    // Consulta todas las matrículas, incluyendo los datos del estudiante y la carrera asociada
    const matriculas = await this.prisma.matricula.findMany({
      include: { estudiante: true, carrera: true },
    });
  
    // Creamos un objeto vacío para agrupar los estudiantes por carrera
    const resultado = {};
  
    // Recorremos cada matrícula obtenida
    for (const { carrera, estudiante } of matriculas) {
      // Si la carrera aún no está en el resultado, la inicializamos
      if (!resultado[carrera.id]) {
        resultado[carrera.id] = {
          id: carrera.id,            
          nombre: carrera.nombre,    
          estudiantes: [],           
        };
      }
  
      // Añadimos el estudiante actual a la lista de la carrera correspondiente
      resultado[carrera.id].estudiantes.push({
        id: estudiante.id,           
        nombre: estudiante.nombre,   
      });
    }
  
    // Convertimos el objeto resultado a un array de carreras con sus estudiantes
    return Object.values(resultado);
  }
}  