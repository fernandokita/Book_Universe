import { Book } from './../book/book';
import { Injectable } from '@nestjs/common';
import { Author } from './author';

@Injectable()
export class AuthorService {
    private author: Author[]=[
        {
            id: 1,
            name: "Fernando Kitakawa",
        }
    ]
    findById(id: string){
        return this.author.find((author:Author)=>author.id===Number(id));
    }
    findAll(){
        return this.author;
    }
    create(createAuthorDto:any){
        return this.author.push(createAuthorDto);
    }
    update(id: string, updateBookDto:any){
        const id_author = this.author.findIndex((author:Author)=>author.id===Number(id))
        this.author[id_author] = updateBookDto;
    }
    remove(id:string){
        const id_author = this.author.findIndex((author:Author)=>author.id===Number(id))
        if(id_author >=0){
            this.author.splice(id_author,1);
        }
    }

}
