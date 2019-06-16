import { Component, OnInit } from '@angular/core';
import { Store } from '@ngxs/store';
import {
  SetMenu,
} from './appStore/app-state.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

  constructor(private store: Store) {}

  ngOnInit() {
    this.store.dispatch(new SetMenu());
  }
}
