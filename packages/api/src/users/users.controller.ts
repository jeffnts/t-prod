import { Controller, Get, Post, Put, Delete } from '@nestjs/common';
import { ApiTags, ApiResponse } from '@nestjs/swagger';

import { UsersService } from './users.service';

@ApiTags('Users')
@ApiResponse({ status: 500, description: 'Server Error.' })
@Controller('users')
export class UsersController {
  constructor(private readonly usersServices: UsersService) {}

  @ApiResponse({ status: 200, description: 'Users returned with success!' })
  @ApiResponse({ status: 404, description: 'User not found.' })
  @ApiResponse({ status: 406, description: 'Username already in use.' })
  @Get()
  index() {
    return this.usersServices.index();
  }

  @ApiResponse({ status: 201, description: 'User created with success!' })
  @Post()
  create() {
    return this.usersServices.store();
  }

  @ApiResponse({ status: 200, description: 'User updated with success!' })
  @ApiResponse({ status: 404, description: 'User not found.' })
  @Put()
  update() {
    return this.usersServices.update();
  }

  @ApiResponse({ status: 200, description: 'User removed with success!' })
  @ApiResponse({ status: 404, description: 'User not found.' })
  @Delete()
  remove() {
    return this.usersServices.delete();
  }
}
