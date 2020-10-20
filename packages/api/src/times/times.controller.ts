import { Controller, Get, Post, Put, Delete } from '@nestjs/common';
import { ApiTags, ApiResponse } from '@nestjs/swagger';

import { TimesService } from './times.service';

@ApiTags('Times')
@ApiResponse({ status: 500, description: 'Server Error.' })
@Controller('times')
export class TimesController {
  constructor(private readonly usersServices: TimesService) {}

  @ApiResponse({ status: 200, description: 'Times returned with success!' })
  @ApiResponse({ status: 404, description: 'Time not found.' })
  @Get()
  index() {
    return this.usersServices.index();
  }

  @ApiResponse({ status: 201, description: 'Time created with success!' })
  @Post()
  create() {
    return this.usersServices.store();
  }

  @ApiResponse({ status: 200, description: 'Time updated with success!' })
  @ApiResponse({ status: 404, description: 'Time not found.' })
  @Put()
  update() {
    return this.usersServices.update();
  }

  @ApiResponse({ status: 200, description: 'Time removed with success!' })
  @ApiResponse({ status: 404, description: 'Time not found.' })
  @Delete()
  remove() {
    return this.usersServices.delete();
  }
}
