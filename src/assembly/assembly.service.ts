import { UpdateAssemblyDto } from './update-assembly-dto';
import { CreateAssemblyDto } from './create-assembly-dto';
import { Injectable } from '@nestjs/common';
import { Assembly } from './assembly';

@Injectable()
export class AssemblyService {
    private assembly: Assembly[]=[
        {
            id: 1,
            name: "estética da montagem",
        }
    ]
    async create(createAssemblyDto:any){
        return this.assembly.push(createAssemblyDto);
    }
    async findId(id: string){
        return this.assembly.find((assembly:Assembly)=>assembly.id === Number(id));
    }
    async findAll(){
        return this.assembly;
    }
    async update(id: string, UpdateAssemblyDto: any){
        const indexAssembly = this.assembly.findIndex((assembly: Assembly)=> assembly.id === Number(id));
        this.assembly[indexAssembly] = UpdateAssemblyDto;
    }
    async delete(id: string){
        const indexAssembly = this.assembly.findIndex((assembly: Assembly)=> assembly.id === Number(id));
        if(indexAssembly >= 0){
            this.assembly.splice(indexAssembly, 1);
        }
    }
}
