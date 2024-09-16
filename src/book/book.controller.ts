import { Controller, Post, Get, Body, Param, HttpCode, HttpStatus, Patch, Delete } from '@nestjs/common';
import { BookService } from './book.service';

@Controller('book')
export class BookController {
    constructor(private readonly bookService: BookService){

    }
    @Post()
    @HttpCode(HttpStatus.NO_CONTENT)
    async create(@Body() body){
        return this.bookService.create;
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
    async update(){
        return this.bookService.update;
    }
    @Delete("id")
    async remove(){
        return this.bookService.remove;
    }
}
