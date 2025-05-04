import { Module } from '@nestjs/common';
import { L2Service } from './l2.service';
import { L2Controller } from './l2.controller';
import { FileAccessor, FileService } from '../file.service';
import { L2 } from './entities/l2.entity';

@Module({
  controllers: [L2Controller],
  providers: [
    L2Service,
    {
      provide: FileService,
      useFactory: (l2: L2Module) =>
        new FileService<L2[]>(l2.filePath),
      inject: [L2Module],
    },
  ],
})
export class L2Module implements FileAccessor {
	public readonly filePath = 'assets/l2.json';
}
