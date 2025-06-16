import { Injectable } from '@nestjs/common';
import { CreateRolDto } from './dto/create-rol.dto';
import { UpdateRolDto } from './dto/update-rol.dto';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class RolService {
  private prisma = new PrismaClient();

  async crearRol(nombre: string) {
    return this.prisma.rol.create({
      data: { nombre }
    });
  }
  async obtenerTodosLosRoles() {
    return this.prisma.rol.findMany();
  }
}

