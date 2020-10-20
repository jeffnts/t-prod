import { Injectable } from '@nestjs/common';

@Injectable()
export class TasksService {
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
