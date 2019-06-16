import { SelectedFoodItem } from './app-state.model';

export class SetMenu {
  static readonly type = '[SetMenu] Set Menu with food items';
}

export class SetFoodItem {
  static readonly type = '[SetFoodItem] Set Food item details';
  constructor(public payload: SelectedFoodItem) {}
}
