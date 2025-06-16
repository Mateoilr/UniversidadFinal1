import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { InscripcionService } from './inscripcion.service';
import { CreateInscripcionDto } from './dto/create-inscripcion.dto';
import { UpdateInscripcionDto } from './dto/update-inscripcion.dto';
import { ApiTags } from '@nestjs/swagger';



@ApiTags('Materias y Alumnos')

@Controller('inscripciones')
export class InscripcionController {
  constructor(private readonly inscripcionService: InscripcionService) {}

  @Post()
  create(@Body() dto: CreateInscripcionDto) {
    return this.inscripcionService.create(dto);
  }

  @Get()
  findAll() {
    return this.inscripcionService.findAll();
  }
}
