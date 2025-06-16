import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { DictanService } from './dictan.service';
import { CreateDictanDto } from './dto/create-dictan.dto';
import { UpdateDictanDto } from './dto/update-dictan.dto';
import { ApiTags } from '@nestjs/swagger';



@ApiTags('Docentes y Materias')
@Controller('dictan')
export class DictanController {
  constructor(private readonly dictaService: DictanService) {}

  @Post()
  create(@Body() dto: CreateDictanDto) {
    return this.dictaService.create(dto);
  }

  @Get()
  findAll() {
    return this.dictaService.findAll();
  }
}