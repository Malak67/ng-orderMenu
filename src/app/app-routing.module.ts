import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MenuComponent } from './menu/menu.component';

const routes: Routes = [
  {
    path: '', component: MenuComponent
  },
  {
    path: 'food',
    loadChildren : () => import('./food-menu/food-menu.module').then(m => m.FoodMenuModule),
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
