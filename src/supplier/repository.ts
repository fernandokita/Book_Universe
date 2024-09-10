
import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/db/prisma.service';
import Supplier from './entity.interface';

@Injectable()
export class SupplierRepository {
    constructor(private prismaService: PrismaService) {}

    async create(supplier: Supplier): Promise<Supplier> {
        return this.prismaService.supplier.create({
            data: {
                id: supplier.id,
                name: supplier.name
            }
        });
    }
    async delete(supplierId: number): Promise<Supplier> {
        return this.prismaService.supplier.delete({
            where: { 
                id: supplierId 
            }
        });
    }
    async findOne(supplierId : number){
        return this.prismaService.supplier.findUnique({
            where:{
                id: supplierId
            }
        })
    }
    async findSupplier(){
        return this.prismaService.supplier.findMany()
    }
}
