import { Controller, Post, Get, Body } from '@nestjs/common';
import { Book } from '@prisma/client';
import BookEntity from './book.entity.interface';

@Controller('book')
export class BookController {
    @Post()
    async createBook(@Body() book:BookEntity){
        return book;
    }
    @Get("id")
    async findBook(){
        return "id"
    }
}
