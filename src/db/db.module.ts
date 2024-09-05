import { Module, Controller } from '@nestjs/common';
import { PrismaService } from './prisma.service';

@Module({
  providers: [PrismaService]
})
export class DbModule {}
