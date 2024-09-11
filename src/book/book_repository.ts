import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/db/prisma.service';
import Book from './book.interface';


@Injectable()
export class BookRepository {
    constructor(private prismaService: PrismaService){

    }
}
async create(book: ): Promise<Book>{
    return this.prismaService.book.create({
        data: book as any,
    })
}
async delete(book: Book): Promise<Book>{
    return this.prismaService.book.delete()
}

