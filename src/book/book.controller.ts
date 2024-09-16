import { UpdateBookDto } from './update-book-dto';
import { Controller, Post, Get, Body, Param, HttpCode, HttpStatus, Patch, Delete } from '@nestjs/common';
import { BookService } from './book.service';
import { CreateBookDto } from './create-book-dto';

@Controller('book')
export class BookController {
    constructor(private readonly bookService: BookService){

    }
    @Post()
    @HttpCode(HttpStatus.NO_CONTENT)
    async create(@Body() createBookDto: CreateBookDto){
        return this.bookService.create(createBookDto);
    }
    @Get("id")
    async findOne(@Param(":id") params){
        return this.bookService.findById;
    }
    @Get()
    async findAll(){
        return this.bookService.findAll;
    }
    @Patch("id")
    async update(id: string, updateBookDto: UpdateBookDto){
        return this.bookService.update(id, updateBookDto);
    }
    @Delete("id")
    async remove(){
        return this.bookService.remove;
    }
}
