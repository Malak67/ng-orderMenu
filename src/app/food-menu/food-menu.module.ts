import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FoodMenuRoutingModule } from './food-menu-routing.module';
import { FoodListingComponent } from './food-listing/food-listing.component';
import { FoodDetailsComponent } from './food-details/food-details.component';
import { AppService } from '../app.service';
import { MainComponent } from './main/main.component';
@NgModule({
  declarations: [
    FoodListingComponent,
    FoodDetailsComponent,
    MainComponent
  ],
  imports: [
    CommonModule,
    FoodMenuRoutingModule,
    FormsModule,
  ],
  providers: [
    AppService
  ]
})
export class FoodMenuModule { }
