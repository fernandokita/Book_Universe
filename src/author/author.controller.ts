import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Patch, Post } from '@nestjs/common';
import { Author } from './author';
import { AuthorService } from './author.service';
import { CreateAuthorDto } from './create-author-dto';
import { UpdateAuthorDto } from './update-author-dto';

@Controller('author')
export class AuthorController {
    constructor(private readonly authorService: AuthorService){

    }
    @Post()
    @HttpCode(HttpStatus.NO_CONTENT)
    async create(@Body() createAuthorDto: CreateAuthorDto){
        return this.authorService.create(createAuthorDto);
    }
    @Get("id")
    async find(){
        return this.authorService.findById;
    }
    @Get()
    async findAll(){
        return this.authorService.findAll;
    }
    @Patch("id")
    async Update(id:string ,updateAuthorDto: UpdateAuthorDto){
        return this.authorService.update(id, updateAuthorDto);
    }
    @Delete("id")
    async delete(){
        return this.authorService.remove; 
    }
}
