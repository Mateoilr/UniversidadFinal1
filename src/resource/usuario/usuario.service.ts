// src/usuario/usuario.service.ts
import { Injectable } from '@nestjs/common';
import {  Usuario } from '@prisma/client';
import * as bcrypt from 'bcrypt';
import { PrismaClient } from '@prisma/client';


@Injectable()
export class UsuarioService {
  private prisma = new PrismaClient();

  async crear(data: { email: string; password: string; rol?: string }): Promise<Usuario> {
    const hashedPassword = await bcrypt.hash(data.password, 10);
    return this.prisma.usuario.create({
      data: {
        email: data.email,
        password: hashedPassword,
      },
    });
  }

  async buscarPorEmail(email: string): Promise<Usuario | null> {
    return this.prisma.usuario.findUnique({
      where: { email },
    });
  }

  async buscarTodos(): Promise<Usuario[]> {
    return this.prisma.usuario.findMany();
  }


async assignRoleToUser(usuarioId: number, rolId: number) {
  // Validar que el usuario existe
  console.log('Buscando usuario con id:', usuarioId);
const usuarioExistente = await this.prisma.usuario.findUnique({ where: { id: usuarioId } });
console.log('Resultado usuario:', usuarioExistente);if (!usuarioExistente) {
    throw new Error('Usuario no existe');
  }

  // Validar que el rol existe
  const rolExistente = await this.prisma.rol.findUnique({ where: { id: rolId } });
  if (!rolExistente) {
    throw new Error('Rol no existe');
  }

  // Verificar si la relación ya existe para evitar duplicados
  const relacionExistente = await this.prisma.usuarioRol.findFirst({
    where: { usuarioId, rolId }
  });
  if (relacionExistente) {
    throw new Error('El usuario ya tiene este rol asignado.');
  }

  // Crear la relación usuario-rol
  return this.prisma.usuarioRol.create({
    data: {
      usuarioId,
      rolId,
    },
  });
}


async assignPermissionToRole(roleId: number, permissionId: number) {
  const existe = await this.prisma.rolPermiso.findFirst({
    where: {
      rolId: roleId,
      permisoId: permissionId,
    },
  });

  if (existe) {
    throw new Error('El rol ya tiene este permiso asignado.');
  }

  return this.prisma.rolPermiso.create({
    data: {
      rolId: roleId,
      permisoId: permissionId,
    },
  });
}
async obtenerRolesDeUsuario(usuarioId: number) {
  return this.prisma.usuarioRol.findMany({
    where: { usuarioId },
    include: { rol: true },
  });
  };
}

