import { IsNotEmpty, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateDictanDto { 
    @IsString()
    @IsNotEmpty()
    @ApiProperty()
    docenteId: number;
    @IsString()
    @IsNotEmpty()
    @ApiProperty()
    materiaId: number;}
