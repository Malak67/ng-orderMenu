import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FoodListingComponent } from './food-listing/food-listing.component';
import { FoodDetailsComponent } from './food-details/food-details.component';

const routes: Routes = [
  {
    path: '', pathMatch: 'full', redirectTo: 'listing'
  },
  {
    path: 'listing', component: FoodListingComponent,
  },
  {
    path: 'details', component: FoodDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FoodMenuRoutingModule { }
