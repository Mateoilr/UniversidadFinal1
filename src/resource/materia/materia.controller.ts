import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { MateriaService } from './materia.service';
import { CreateMateriaDto } from './dto/create-materia.dto';
import { UpdateMateriaDto } from './dto/update-materia.dto';
import { ApiTags } from '@nestjs/swagger';



@ApiTags('Materia')

@Controller('materia')
export class MateriaController {
  constructor(private readonly materiaService: MateriaService) {}

  @Post()
  create(@Body() dto: CreateMateriaDto) {
    return this.materiaService.create(dto);
  }

  @Get()
  findAll() {
    return this.materiaService.findAll();
  }
}
