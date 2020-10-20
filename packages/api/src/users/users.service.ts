import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
  index() {
    return {
      data: 'get',
    };
  }

  store() {
    return {
      data: 'store',
    };
  }

  update() {
    return {
      data: 'update',
    };
  }

  delete() {
    return {
      data: 'delete',
    };
  }
}
