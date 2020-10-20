import { Controller, Get, Post, Put, Delete } from '@nestjs/common';
import { ApiTags, ApiResponse } from '@nestjs/swagger';

import { ProjectsService } from './projects.service';

@ApiTags('Projects')
@ApiResponse({ status: 500, description: 'Server Error.' })
@Controller('projects')
export class ProjectsController {
  constructor(private readonly projectsServices: ProjectsService) {}

  @ApiResponse({ status: 200, description: 'Projects returned with success!' })
  @ApiResponse({ status: 404, description: 'Project not found.' })
  @Get()
  index() {
    return this.projectsServices.index();
  }

  @ApiResponse({ status: 201, description: 'User created with success!' })
  @Post()
  create() {
    return this.projectsServices.store();
  }

  @ApiResponse({ status: 200, description: 'Project updated with success!' })
  @ApiResponse({ status: 404, description: 'Project not found.' })
  @Put()
  update() {
    return this.projectsServices.update();
  }

  @ApiResponse({ status: 200, description: 'Project removed with success!' })
  @ApiResponse({ status: 404, description: 'Project not found.' })
  @Delete()
  remove() {
    return this.projectsServices.delete();
  }
}
