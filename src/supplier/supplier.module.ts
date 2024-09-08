import { Module } from '@nestjs/common';
import { SupplierController } from './supplier.controller';
import { Repository } from './repository';
import { DbModule } from 'src/db/db.module';

@Module({
  controllers: [SupplierController],
  providers: [Repository],
  imports: [DbModule]
})
export class SupplierModule {}
