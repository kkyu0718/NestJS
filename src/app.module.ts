import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Type } from 'class-transformer';
import { BoardRepository } from './boards/board.repository';
import { BoardsModule } from './boards/boards.module';
import { typeORMConfig } from './configs/typeorm.config';
import { TypeOrmExModule } from './db/typeorm-ex.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    TypeOrmExModule.forCustomRepository([BoardRepository]),
    TypeOrmModule.forRoot(typeORMConfig),
    BoardsModule,
    AuthModule
  ],


})
export class AppModule {}
