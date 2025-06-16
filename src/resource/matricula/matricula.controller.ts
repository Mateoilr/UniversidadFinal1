import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { MatriculaService } from './matricula.service';
import { CreateMatriculaDto } from './dto/create-matricula.dto';
import { UpdateMatriculaDto } from './dto/update-matricula.dto';
import { ApiTags } from '@nestjs/swagger';



@ApiTags('Carreras y Alumnos')

@Controller('matriculas')
export class MatriculaController {
  constructor(private readonly matriculaService: MatriculaService) {}

  @Post()
  create(@Body() dto: CreateMatriculaDto) {
    return this.matriculaService.create(dto);
  }

  
  @Get()
  findAll() {
    return this.matriculaService.findAll();
  }
}
