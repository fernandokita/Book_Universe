import { CreatePartDto } from './create-part-dto';
import { PartService } from './part.service';
import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Patch, Post } from '@nestjs/common';
import { UpdatePartDto } from './update-part-dto';

@Controller('part')
export class PartController {
    constructor(private readonly partService: PartService){

    }
    @Post()
    @HttpCode(HttpStatus.NO_CONTENT)
    async create(@Body() createPartDto: CreatePartDto){
        return this.partService.create(createPartDto);
    }

    @Get("id")
    async findOne(){
        return this.partService.findById;
    }

    @Get()
    async findAll(){
        return this.partService.findAll;
    }

    @Patch("id")
    async update(id: string, updatePartDto: UpdatePartDto){
        return this.partService.update(id, updatePartDto);
    }

    @Delete()
    async delete(id: number){
        return this.delete(id);
    }
}
