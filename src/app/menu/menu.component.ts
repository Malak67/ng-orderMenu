import { Component, OnInit } from '@angular/core';
import { Addon } from '../appStore/app-state.model';
import { Subject, Observable } from 'rxjs';
import { Store, Select } from '@ngxs/store';
import { AppState } from '../appStore/app.store';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  showIndex: any;
  showItemsToggle: boolean;
  private categoryAddons = new Subject<Array<Addon>>();
  categoryAddons$ = this.categoryAddons.asObservable();

  private foodAddons = new Subject<Array<Addon>>();
  foodAddons$ = this.foodAddons.asObservable();

  @Select(AppState.getMenu) getMenu: Observable<string>;

  constructor(private store: Store, private router: Router) {}

  ngOnInit() {
  }

  showItems(index: any, addons: Array<Addon>) {
    this.showIndex = index;
    this.showItemsToggle = true;
    this.categoryAddons.next(addons);
    this.foodAddons.next(null);
  }

  selectFoodAddons(addons: Array<Addon>) {
    this.foodAddons.next(addons);
  }

}
