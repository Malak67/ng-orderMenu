export interface AppStateModel {
  menu: Menu;
  selectedFoodItem: SelectedFoodItem;
}

export interface Menu {
  categories: Array<FoodCategories>;
}

export interface SelectedFoodItem {
  globalAddons: Array<Addon>;
  foodItem: FoodItem;
}

export interface FoodCategories {
  name: string;
  foodItems: Array<FoodItem>;
  image?: string;
  addons?: Array<Addon>;
  description?: string;
}

export interface FoodItem {
  name: string;
  price: number;
  image?: string;
  addons?: Array<Addon>;
}

export interface Addon {
  name: string;
  choices: Array<Choice>;
}

export interface Choice {
  name: string;
  price?: number;
  selected?: boolean;
}
