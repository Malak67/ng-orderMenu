import { SelectedFoodItem } from './app-state.model';

export class SetMenu {
  static readonly type = '[SetMenu] Set Menu with food items';
}

export class SetFoodItem {
  static readonly type = '[SetFoodItem] Set Food item details';
  constructor(public payload: SelectedFoodItem) {}
}

export class AddToCart {
  static readonly type = '[AddToCart] Add Food item to cart';
  constructor(public payload: any) {}
}

export class GetCart {
  static readonly type = '[GetCart] Get cart with food items';
  constructor(public payload: any) {}
}
