import { DbModule } from './../db/db.module';
import { Module } from '@nestjs/common';
import { AuthorController } from './author.controller';
import { AuthorService } from './author.service';
import { CreateAuthorDto } from './create-author-dto';

@Module({
  controllers: [AuthorController],
  imports:[DbModule,CreateAuthorDto],
  providers: [AuthorService],
})
export class AuthorModule {}
