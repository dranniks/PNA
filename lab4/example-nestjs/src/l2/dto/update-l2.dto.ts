import { PartialType } from '@nestjs/mapped-types';
import { CreateL2Dto } from './create-l2.dto';

export class UpdateL2Dto extends PartialType(CreateL2Dto) {}
