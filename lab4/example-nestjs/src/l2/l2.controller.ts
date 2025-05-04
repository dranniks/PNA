import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { L2Service } from './l2.service';
import { CreateL2Dto } from './dto/create-l2.dto';
import { UpdateL2Dto } from './dto/update-l2.dto';
import { L2 } from './entities/l2.entity';

@Controller('l2')
export class L2Controller {
  constructor(private readonly l2Service: L2Service) {}

  @Post()
  create(@Body() createL2Dto: CreateL2Dto) {
    return this.l2Service.create(createL2Dto);
  }

  @Get()
  findAll(@Query('title') title?: string): L2[] {
    return this.l2Service.findAll(title);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.l2Service.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateL2Dto: UpdateL2Dto) {
    return this.l2Service.update(+id, updateL2Dto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.l2Service.remove(+id);
  }
}
