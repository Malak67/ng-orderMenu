import { Component, OnInit } from '@angular/core';
import { Store, Select } from '@ngxs/store';
import { AppState } from '../../appStore/app.store';
import { Observable } from 'rxjs';
import { Location } from '@angular/common';

@Component({
  selector: 'app-food-details',
  templateUrl: './food-details.component.html',
  styleUrls: ['./food-details.component.scss']
})
export class FoodDetailsComponent implements OnInit {

  totalPrice: number;
  @Select(AppState.getSelectedFoodItem) selectedFoodItem: Observable<string>;
  constructor(private location: Location) { }

  ngOnInit() {
  }

  goBack() {
    this.location.back();
  }

  onChange(value: boolean, totalPrice: number, choicePrice: number) {
    this.totalPrice = this.totalPrice ? this.totalPrice : +totalPrice;
    const addonPrice = +choicePrice;
    if (value === true) {
      this.totalPrice = this.totalPrice + addonPrice;
    } else {
      this.totalPrice = this.totalPrice - addonPrice;
    }

  }

}
