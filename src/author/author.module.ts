import { DbModule } from './../db/db.module';
import { Module } from '@nestjs/common';
import { AuthorController } from './author.controller';
import { Repository } from './repository';

@Module({
  controllers: [AuthorController],
  providers: [Repository],
  imports:[DbModule],
})
export class AuthorModule {}
