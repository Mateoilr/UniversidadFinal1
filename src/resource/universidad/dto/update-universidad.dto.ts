import { PartialType } from '@nestjs/swagger';
import { CreateUniversidadDto } from './create-universidad.dto';

export class UpdateUniversidadDto extends PartialType(CreateUniversidadDto) {}
