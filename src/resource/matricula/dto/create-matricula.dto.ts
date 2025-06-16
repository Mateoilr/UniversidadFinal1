import { IsNotEmpty, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
export class CreateMatriculaDto {
    @IsString()
@IsNotEmpty()
@ApiProperty()
estudianteId: number;
@IsString()
@IsNotEmpty()
@ApiProperty()
    carreraId: number;
}
