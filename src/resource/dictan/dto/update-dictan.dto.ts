import { PartialType } from '@nestjs/mapped-types';
import { CreateDictanDto } from './create-dictan.dto';

export class UpdateDictanDto extends PartialType(CreateDictanDto) {}
