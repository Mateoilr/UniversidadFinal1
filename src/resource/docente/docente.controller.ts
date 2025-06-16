import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { DocenteService } from './docente.service';
import { CreateDocenteDto } from './dto/create-docente.dto';
import { UpdateDocenteDto } from './dto/update-docente.dto';
import { ApiTags } from '@nestjs/swagger';



@ApiTags('Docente')
@Controller('docente')
export class DocenteController {
  constructor(private readonly docenteService: DocenteService) {}

  @Post()
  create(@Body() dto: CreateDocenteDto) {
    return this.docenteService.create(dto);
  }

  @Get()
  findAll() {
    return this.docenteService.findAll();
  }
}
