import { Module } from '@nestjs/common';
import { BookController } from './book.controller';
import { DbModule } from 'src/db/db.module';
import { BookRepository } from './book_repository';
import { BookService } from './book.service';

@Module({
  controllers: [BookController],
  imports:[DbModule],
  providers:[BookRepository, BookService]
})
export class BookModule {}
