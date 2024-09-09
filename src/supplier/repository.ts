import { Entity } from './entity.interface';
import { Injectable, UnprocessableEntityException } from '@nestjs/common';
import { PrismaService } from 'src/db/prisma.service';

@UnprocessableEntityException
interface Supplier {
    id: number;
    name: string;
    // outros campos necessários
  }

@Injectable()
export class Repository {
    constructor(private ps: PrismaService){

    }
}
async create(supplier: Entity){
    return this.ps.supplier.create(){
        data: supplier as any;
    }
}
async delete(supplier: Entity){
    return this.ps.supplier.delete();
}
