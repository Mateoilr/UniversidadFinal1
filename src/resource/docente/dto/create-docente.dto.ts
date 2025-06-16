import { IsNotEmpty, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateDocenteDto {
    @IsString()
    @IsNotEmpty()
    @ApiProperty()
    nombre: string;
}
