import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EstudianteModule } from './resource/estudiante/estudiante.module';
import { CarreraModule } from './resource/carrera/carrera.module';
import { MateriaModule } from './resource/materia/materia.module';
import { DocenteModule } from './resource/docente/docente.module';
import { MatriculaModule } from './resource/matricula/matricula.module';
import { InscripcionModule } from './resource/inscripcion/inscripcion.module';
import { DictanModule } from './resource/dictan/dictan.module';
import { PrismaClient } from 'generated/prisma'; // Adjust the import path as necessary
import { AlumnoModule } from './resource/alumno/alumno.module';
import { CarreraDocentesModule } from './resource/carrera-docentes/carrera-docentes.module';
import { UniversidadModule } from './resource/universidad/universidad.module';
import { AuthModule } from './auth/auth/auth.module';
import { UsuarioModule } from './resource/usuario/usuario.module';
import { RolModule } from './resource/rol/rol.module';
import { PermisoModule } from './resource/permiso/permiso.module';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path'; 

@Module({
  imports: [PrismaClient, EstudianteModule, CarreraModule, MateriaModule, DocenteModule, MatriculaModule, InscripcionModule, DictanModule, AlumnoModule, CarreraDocentesModule, UniversidadModule, AuthModule, UsuarioModule, RolModule, PermisoModule, 
    ServeStaticModule.forRoot({ rootPath: join(__dirname, '..', 'public') })
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
