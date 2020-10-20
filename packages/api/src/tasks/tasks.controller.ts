import { Controller, Get, Post, Put, Delete } from '@nestjs/common';
import { ApiTags, ApiResponse } from '@nestjs/swagger';

import { TasksService } from './tasks.service';

@ApiTags('Tasks')
@ApiResponse({ status: 500, description: 'Server Error.' })
@Controller('tasks')
export class TasksController {
  constructor(private readonly tasksServices: TasksService) {}

  @ApiResponse({ status: 200, description: 'Tasks returned with success!' })
  @ApiResponse({ status: 404, description: 'Task not found.' })
  @Get()
  index() {
    return this.tasksServices.index();
  }

  @ApiResponse({ status: 201, description: 'Task created with success!' })
  @Post()
  create() {
    return this.tasksServices.store();
  }

  @ApiResponse({ status: 200, description: 'Task updated with success!' })
  @ApiResponse({ status: 404, description: 'Task not found.' })
  @Put()
  update() {
    return this.tasksServices.update();
  }

  @ApiResponse({ status: 200, description: 'Task removed with success!' })
  @ApiResponse({ status: 404, description: 'Task not found.' })
  @Delete()
  remove() {
    return this.tasksServices.delete();
  }
}
