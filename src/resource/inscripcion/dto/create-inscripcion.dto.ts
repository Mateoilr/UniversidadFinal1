import { IsNotEmpty, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
export class CreateInscripcionDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty()
estudianteId: number;
  @IsString()
  @IsNotEmpty()
  @ApiProperty()
materiaId: number;
}
