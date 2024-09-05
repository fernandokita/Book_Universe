import { Module } from '@nestjs/common';
import { PartController } from './part.controller';

@Module({
  controllers: [PartController]
})
export class PartModule {}
