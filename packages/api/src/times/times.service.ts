import { Injectable } from '@nestjs/common';

@Injectable()
export class TimesService {
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
