import { Injectable } from '@nestjs/common';
import { CreateL2Dto } from './dto/create-l2.dto';
import { UpdateL2Dto } from './dto/update-l2.dto';
import { FileAccessor, FileService } from '../file.service';
import { L2 } from './entities/l2.entity';

@Injectable()
export class L2Service {
  constructor(private fileService: FileService<L2[]>) {}
  create(createStockDto: CreateL2Dto) {
    const l2s = this.fileService.read();

    // для простоты новый id = текущее количество карточек + 1
    const l2 = { ...createStockDto, id: l2s.length + 1 };

    this.fileService.add(l2);
  }

  findAll(title?: string): L2[] {
    const l2 = this.fileService.read();

    return title
      ? l2.filter((l2) =>
        l2.title.toLowerCase().includes(title.toLowerCase()),
        )
      : l2;
  }

  findOne(id: number): L2 | null {
    const l2s = this.fileService.read();

    return l2s.find((l2) => l2.id === id) ?? null;
  }


  update(id: number, updateL2Dto: UpdateL2Dto): void {
    const l2s = this.fileService.read();

    const updatedL2s = l2s.map((l2) =>
      l2.id === id ? { ...l2, ...updateL2Dto } : l2,
    );

    this.fileService.write(updatedL2s);
  }

  remove(id: number): void {
    const filteredL2s = this.fileService
      .read()
      .filter((l2) => l2.id !== id);

    this.fileService.write(filteredL2s);
  }
}
