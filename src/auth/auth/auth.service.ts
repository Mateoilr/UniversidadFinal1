// src/auth/auth.service.ts
import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

@Injectable()
export class AuthService {
  constructor(private jwtService: JwtService) {}

  async register(email: string, password: string, rol: string) {
    const hashed = await bcrypt.hash(password, 10);
    return prisma.usuario.create({
      data: { email, password: hashed, },
    });
  }

  async validateUser(email: string, password: string) {
    const user = await prisma.usuario.findUnique({ where: { email } });
    if (!user) return null;
    const match = await bcrypt.compare(password, user.password);
    if (!match) return null;
    const { password: _, ...rest } = user;
    return rest;
  }

  
  async login(user: any) {
    const payload = { sub: user.id, email: user.email, rol: user.rol };
    return { access_token: this.jwtService.sign(payload) };
  }
}
