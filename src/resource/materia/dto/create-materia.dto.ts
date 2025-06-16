import { IsNotEmpty, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
export class CreateMateriaDto {
    @IsString()
    @IsNotEmpty()
    @ApiProperty()
nombre: string;
    @IsString()
    @IsNotEmpty()
    @ApiProperty()
carreraId: number;
}
