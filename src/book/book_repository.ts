import { Inject, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/db/prisma.service';
import BookEntity from './book.entity.interface';

@Injectable()
export class BookRepository {
    constructor(private ps:PrismaService){

    }
}
async create(book: BookEntity){
    return this.ps.book.create({
        data: book as any,
    })
}
async delete(book:BookEntity){
    return this.ps.book.delete()
}
