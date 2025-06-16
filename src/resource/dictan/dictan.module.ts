import { Module } from '@nestjs/common';
import { DictanService } from './dictan.service';
import { DictanController } from './dictan.controller';
import { PrismaClient } from 'generated/prisma';
@Module({
 
  controllers: [DictanController],
  providers: [DictanService, PrismaClient],
})
export class DictanModule {}
