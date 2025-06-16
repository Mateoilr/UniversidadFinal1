import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AlumnoService } from './alumno.service';
import { CreateAlumnoDto } from './dto/create-alumno.dto';
import { UpdateAlumnoDto } from './dto/update-alumno.dto';
import { ApiOperation, ApiTags } from '@nestjs/swagger';


@ApiTags('Estudiante: Carrera y Materias')
@Controller('Alumno')
export class AlumnoController {
  constructor(private readonly alumnoService: AlumnoService) {}
  @Post()
  create(@Body() dto: CreateAlumnoDto) {
    return this.alumnoService.create(dto);
  }
  

  @Get()
  findAll() {
    return this.alumnoService.findAll();
  }
  }

