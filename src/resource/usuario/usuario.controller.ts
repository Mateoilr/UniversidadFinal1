// src/usuario/usuario.controller.ts
import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UsuarioService } from './usuario.service';
import { AuthGuard } from '@nestjs/passport';
import { UseGuards } from '@nestjs/common';
import { RolesGuard } from 'src/auth/roleguard/roles.guard';
import { Roles } from 'src/auth/roleguard/roles.decorator';


@UseGuards(AuthGuard('jwt'), RolesGuard)
@Controller('usuario')
export class UsuarioController {
  constructor(private readonly usuarioService: UsuarioService) {}

  @Post('registrar')
  @Roles('admin')
  async registrar(@Body() body: { email: string; password: string; rol?: string }) {
    return this.usuarioService.crear(body);
  }

  @Get()
  @Roles('admin')
  async obtenerUsuarios() {
    return this.usuarioService.buscarTodos();
  }

  @Post('asignar-rol')
async asignarRol(@Body() body: { usuarioId: number; rolId: number }) {
  
  return this.usuarioService.assignRoleToUser(body.usuarioId, body.rolId);
}

  @Post('asignar-permiso')
  async asignarPermiso(@Body() body: { roleId: number; permissionId: number }) {
    return this.usuarioService.assignPermissionToRole(body.roleId, body.permissionId);
  }

  @Get(':id/roles')
async obtenerRoles(@Param('id') id: number) {
  return this.usuarioService.obtenerRolesDeUsuario(Number(id));
}
}
