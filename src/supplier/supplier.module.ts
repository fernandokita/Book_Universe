import { Module } from '@nestjs/common';
import { SupplierController } from './supplier.controller';
import { SupplierRepository } from './repository';
import { DbModule } from 'src/db/db.module';

@Module({
  controllers: [SupplierController],
  providers: [SupplierRepository],
  imports: [DbModule]
})
export class SupplierModule {}
