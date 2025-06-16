import { IsInt, IsNotEmpty } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateAlumnoDto {
  @IsInt()
  @IsNotEmpty()
    @ApiProperty()
  estudianteId: number;

  @IsInt()
  @IsNotEmpty()
    @ApiProperty()
  materiaId: number;

  @IsInt()
  @IsNotEmpty()
    @ApiProperty()
  carreraId: number;
}