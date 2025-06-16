//src/auth/auth/roles.guard.ts
import { Injectable, CanActivate, ExecutionContext, ForbiddenException } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { ROLES_KEY } from './roles.decorator';

@Injectable()

export class RolesGuard implements CanActivate {
  constructor(private reflector: Reflector) {}

  canActivate(context: ExecutionContext): boolean {
  const requiredRoles = this.reflector.getAllAndOverride<string[]>(ROLES_KEY, [
    context.getHandler(),
    context.getClass(),
  ]);
  if (!requiredRoles) return true;

  const request = context.switchToHttp().getRequest();
  const user = request.user;

    console.log('👤 Usuario:', user);
    console.log('🔑 Roles requeridos:', requiredRoles);

 if (!user || !user.rol || !requiredRoles.includes(user.rol)) {
      throw new ForbiddenException('No tienes permiso para acceder a esta ruta (se requiere ser admin)');
    }
  // ✅ validación segura
  if (!user || !user.rol) {
    return false;
  }

  return requiredRoles.includes(user.rol);
}

}
