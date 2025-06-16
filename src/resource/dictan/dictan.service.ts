import { Injectable } from '@nestjs/common';
import { CreateDictanDto } from './dto/create-dictan.dto';
import { UpdateDictanDto } from './dto/update-dictan.dto';
import { PrismaClient } from 'generated/prisma';

@Injectable()
export class DictanService {
  constructor(private prisma: PrismaClient) {}

  async create(dto: CreateDictanDto) {
    return this.prisma.dicta.create({
      data: {
        docente: { connect: { id: dto.docenteId } },
        materia: { connect: { id: dto.materiaId } },
      },
    });
  }

  async findAll() {
    // Consulta todas las relaciones 'dicta', incluyendo los datos del docente y la materia correspondiente
    const dictados = await this.prisma.dicta.findMany({
      include: {
        docente: true,
        materia: true, 
      },
    });
  
    // Creamos un objeto para agrupar los docentes por materia
    const resultado = {};
  
    // Recorremos cada entrada de la relación 'dicta'
    for (const { materia, docente } of dictados) {
      // Si la materia aún no está registrada en el resultado, la inicializamos
      if (!resultado[materia.id]) {
        resultado[materia.id] = {
          id: materia.id,           
          nombre: materia.nombre,   
          docentes: [],             
        };
      }
  
      // Agregamos al docente actual a la lista de la materia correspondiente
      resultado[materia.id].docentes.push({
        id: docente.id,           
        nombre: docente.nombre,   
      });
    }
  
    // Convertimos el objeto resultado en un array que será una materia con su lista de docentes que la dictan
    return Object.values(resultado);
  }
}  