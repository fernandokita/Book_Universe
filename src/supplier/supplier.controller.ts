import { Controller, Post,Body, Get, Put} from '@nestjs/common';
import Supplier from './entity.interface';

@Controller('supplier')
export class SupplierController {
    @Post()
    async create(@Body() supplier: Supplier){
        return supplier;
    }
    @Get("id")
    async findSupplier(){
        return "id";
    }
}
