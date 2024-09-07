import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/db/prisma.service';
import {Author}  from './author.interface';

@Injectable()
export class Repository {
    constructor(private ps:PrismaService){
    }
}
async create(at : Author){
    return this.ps.at.create({
        data: at as any
    })
}
async delete(ate: Author){
    return this.ps.at.delete()
}
