import { Module } from '@nestjs/common';
import { L2Module } from './l2/l2.module';

@Module({
  imports: [L2Module],
})
export class AppModule {}
