import { IsString, IsNotEmpty } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateCarreraDto {
    @IsString()
    @IsNotEmpty()
    @ApiProperty()
    nombre: string;
}
