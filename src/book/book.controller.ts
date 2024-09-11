import { Controller, Post, Get, Body, Param } from '@nestjs/common';
import Book from './book.interface';

@Controller('book')
export class BookController {
    @Post()
    async createBook(@Body() body){
        return body;
    }
    @Get("id")
    async findBook(@Param(":id") params){
        return "Book ${id}"
    }
    @Get()
    async findAll(){
        return "List of books"
    }
}
