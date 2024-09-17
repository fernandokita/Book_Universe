import { Injectable } from '@nestjs/common';
import { UpdatePartDto } from './update-part-dto';
import { CreatePartDto } from './create-part-dto';
import { Part } from './part';

@Injectable()
export class PartService{
    private part: Part[]=[{
        id: 3,
        part_number: "S130",
    }]

    async create(createPartDto: CreatePartDto){
        return this.part.push(createPartDto);
    }
    async findById(id:string){
        return this.part.find((part:Part)=>part.id===Number(id));
    }
    async findAll(){
        return this.part;
    }
    async update(id: string, updatePartDto: UpdatePartDto){
        const indexPart = this.part.findIndex((part: Part)=>part.id===Number(id));
        this.part[indexPart] = updatePartDto;
    }
    async delete(id: string){
        const indexPart = this.part.findIndex((part:Part)=>part.id===Number(id));
        if(indexPart>=0){
            this.part.splice(indexPart, 1);
        }
    }
}
