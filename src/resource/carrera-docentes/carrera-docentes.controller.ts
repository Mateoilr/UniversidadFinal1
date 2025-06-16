import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CarreraDocentesService } from './carrera-docentes.service';
import { CreateCarreraDocenteDto } from './dto/create-carrera-docente.dto';
import { UpdateCarreraDocenteDto } from './dto/update-carrera-docente.dto';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('Carreras y Docentes')
@Controller('carrera-docentes')
export class CarreraDocentesController {
  constructor(private readonly carreraDocentesService: CarreraDocentesService) {}
  

  @Post()
  create(@Body() createCarreraDocenteDto: CreateCarreraDocenteDto) {
    return this.carreraDocentesService.create(createCarreraDocenteDto);
  }

  @Get()
  findAll() {
    return this.carreraDocentesService.findAll();
  }
}
