import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TheatersController } from './theaters.controller.js';
import { TheatersService } from './theaters.service.js';
import { Theater } from './entities/theater.entity.js';
import { TheaterMapper } from './mappers/theater.mapper.js';
import { TheatersRepository } from './repositories/theaters.repository.js';

@Module({
  imports: [TypeOrmModule.forFeature([Theater])],
  controllers: [TheatersController],
  providers: [TheatersService, TheaterMapper, TheatersRepository],
  exports: [TheatersService],
})
export class TheatersModule {}

