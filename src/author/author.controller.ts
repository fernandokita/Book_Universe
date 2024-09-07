import { Body, Controller, Get, Post } from '@nestjs/common';
import { Author } from './author.interface';

@Controller('author')
export class AuthorController {
    @Post()
    async create(@Body() author:Author){
        return author
    }
    @Get("id")
    async find(){
        return "id"
    }
}
