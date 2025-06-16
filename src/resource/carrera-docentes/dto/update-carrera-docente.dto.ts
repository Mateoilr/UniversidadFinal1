import { PartialType } from '@nestjs/swagger';
import { CreateCarreraDocenteDto } from './create-carrera-docente.dto';

export class UpdateCarreraDocenteDto extends PartialType(CreateCarreraDocenteDto) {}
