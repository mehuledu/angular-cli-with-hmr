import {Injectable} from '@angular/core';

@Injectable()
export class AppService {

  state: Array<number> = [1, 2, 3, 4];

  constructor() {
  }

  addState() {
    this.state.push(Math.floor(Math.random() * 10));
    return [...this.state];
  }
}
