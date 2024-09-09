import { Controller, Post,Body, Get, Put} from '@nestjs/common';
import { Entity } from './entity.interface';

@Controller('supplier')
export class SupplierController {
    @Post()
    async create(@Body() supplier: Entity){
        return supplier;
    }
    @Get("id")
    async findSupplier(){
        return "id";
    }
}
