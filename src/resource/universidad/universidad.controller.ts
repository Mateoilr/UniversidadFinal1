import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UniversidadService } from './universidad.service';
import { CreateUniversidadDto } from './dto/create-universidad.dto';
import { UpdateUniversidadDto } from './dto/update-universidad.dto';
import { ApiTags } from '@nestjs/swagger';



@ApiTags('Universidad')

@Controller('universidad')
export class UniversidadController {
  constructor(private readonly universidadService: UniversidadService) {}


  @Get()
  findAll() {
    return this.universidadService.findAll();
  }

}
