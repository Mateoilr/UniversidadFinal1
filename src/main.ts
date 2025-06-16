import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { UniversidadModule } from './resource/universidad/universidad.module';
import { EstudianteModule } from './resource/estudiante/estudiante.module';
import { CarreraModule } from './resource/carrera/carrera.module';
import { MateriaModule } from './resource/materia/materia.module';
import { DocenteModule } from './resource/docente/docente.module';
import { MatriculaModule } from './resource/matricula/matricula.module';
import { InscripcionModule } from './resource/inscripcion/inscripcion.module';
import { DictanModule } from './resource/dictan/dictan.module';
import { AlumnoModule } from './resource/alumno/alumno.module';
import { CarreraDocentesModule } from './resource/carrera-docentes/carrera-docentes.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  

  const config = new DocumentBuilder()
  .setTitle('API Universidad')
  .setDescription('Documentación de la API para el sistema universitario')
  .setVersion('1.0')
  .addTag('universidad') // puedes usar .addTag por cada módulo o grupo temático
  .build();

  const document = SwaggerModule.createDocument(app, config, {
    include: [UniversidadModule, EstudianteModule, CarreraModule, MateriaModule, DocenteModule, MatriculaModule, InscripcionModule, DictanModule, AlumnoModule, CarreraDocentesModule],
    
  });
  document.tags = [
    { name: 'Universidad', description: 'Operaciones generales de la Universidad' },
    { name: 'Estudiante', description: 'Operaciones con estudiantes' },
    { name: 'Carrera', description: 'Operaciones con carreras' },
    { name: 'Materia', description: 'Operaciones con materias' },
    { name: 'Docente', description: 'Operaciones con docentes' },
    { name: 'Carreras y Alumnos', description: 'Operaciones con matrículas' },
    { name: 'Materias y Alumnos', description: 'Operaciones con inscripciones' },
    { name: 'Docentes y Materias', description: 'Operaciones con dictados' },
    { name: 'Estudiante: Carrera y Materias', description: 'Operaciones con alumnos' },
    { name: 'Carreras y Docentes', description: 'Operaciones con carreras de docentes' },
    // ...
  ];
  
  SwaggerModule.setup('api', app, document);
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
