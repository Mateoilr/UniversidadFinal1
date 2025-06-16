import { IsNotEmpty, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateEstudianteDto {
    @IsString()
    @IsNotEmpty()
    @ApiProperty()
nombre: string;
    @IsNotEmpty()
    @ApiProperty()
    matricula: number;
    @IsNotEmpty()
    @ApiProperty()
    docenteId: number;
}
