import { Component, OnInit } from '@angular/core';
import {
  Addon,
  FoodItem,
  SelectedFoodItem
} from '../../appStore/app-state.model';
import { Router } from '@angular/router';
import { Store, Select } from '@ngxs/store';
import { AppState } from '../../appStore/app.store';
import { Observable } from 'rxjs';
import { SetFoodItem } from 'src/app/appStore/app-state.actions';

@Component({
  selector: 'app-food-listing',
  templateUrl: './food-listing.component.html',
  styleUrls: ['./food-listing.component.scss']
})
export class FoodListingComponent implements OnInit {

  constructor(private store: Store, public router: Router) {}
  @Select(AppState.getMenu) getMenu: Observable<string>;

  ngOnInit() {}

  showDetails(addons: Array<Addon>, food: FoodItem) {
    const selectedFoodItem: SelectedFoodItem = {
      globalAddons: addons,
      foodItem: food
    };
    this.store.dispatch(new SetFoodItem(selectedFoodItem));
    this.router.navigate(['/food/details']);
  }

}
