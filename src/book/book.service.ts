import { Injectable } from '@nestjs/common';
import { Book } from './book';

@Injectable()
export class BookService {
   book: Book[]=[
    {
        id:1,
        author_id: 5,
        published_at: new Date('1998-03-19')
    }
   ]
    findById(id: string){
        return this.book.find((book:Book)=>book.id===Number(id));
    }
    findAll(){
        return this.book;
    }
    update(id: string, updateBookDto:any){
        const indexBook = this.book.findIndex((book:Book)=>book.id===Number(id));
        this.book[indexBook]=updateBookDto;
    }
    remove(id: string){
        const indexBook = this.book.findIndex((book:Book)=>book.id===Number(id))
        if(indexBook >=0){
            this.book.splice(indexBook, 1)
        }
    }
    create(createBookDto:any){
        this.book.push(createBookDto)
    }
}
