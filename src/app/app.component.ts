import { Component } from '@angular/core';
import {AppService} from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  state: Array<number>;
  constructor(public appService: AppService) {
    this.state = this.appService.state;
  }
  addState() {
    this.state = this.appService.addState();
  }
}
