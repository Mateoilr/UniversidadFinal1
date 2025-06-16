import { IsNotEmpty, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
export class CreateCarreraDocenteDto {
    @IsString()
    @IsNotEmpty()
    @ApiProperty()
    carreraId: number;
    
    @IsString()
    @IsNotEmpty()
    @ApiProperty()
    docenteId: number;
}
