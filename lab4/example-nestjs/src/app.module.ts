import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { L2Module } from './l2/l2.module';

@Module({
  imports: [L2Module],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
