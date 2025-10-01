import { Global, Module } from '@nestjs/common';
import { PrismaService } from './prisma.service';

@Global() // το κάνει διαθέσιμο παντού
@Module({
  providers: [PrismaService],
  exports: [PrismaService],
})
export class PrismaModule {}

