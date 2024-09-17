import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Patch, Post } from '@nestjs/common';
import { AssemblyService } from './assembly.service';
import { CreateAssemblyDto } from './create-assembly-dto';
import { UpdateAssemblyDto } from './update-assembly-dto';

@Controller('assembly')
export class AssemblyController {
    constructor(private readonly assemblyService : AssemblyService){

    }

    @Post()
    @HttpCode(HttpStatus.NO_CONTENT)
    async create(@Body() createAssemblyDto: CreateAssemblyDto){
        return this.assemblyService.create(createAssemblyDto);
    }
    @Get("id")
    async findOne(){
        return this.assemblyService.findId;
    }

    @Get("get-all")
    async findAll(){
        return this.assemblyService.findAll;
    }

    @Patch("updtId")
    async update(id: string, updateAssemblyDto: UpdateAssemblyDto){
        return this.assemblyService.update(id, updateAssemblyDto);
    }

    @Delete("id")
    async delete(){
        return this.assemblyService.delete;
    }
}
