import { State, Action, StateContext, Selector } from '@ngxs/store';
import { AppStateModel, Menu } from './app-state.model';
import {
  SetMenu,
  SetFoodItem,
  AddToCart,
  GetCart,
} from './app-state.actions';
import { AppService } from '../app.service';
import { map, catchError } from 'rxjs/operators';
import { of } from 'rxjs';

@State<AppStateModel>({
  name: 'App',
  defaults: {
    cart: null,
    menu: {
      categories: []
    },
    selectedFoodItem: null,
  },
})
export class AppState {
  constructor(private service: AppService) {}

  @Selector()
  static getMenu(state: AppStateModel) {
    return state.menu;
  }

  @Selector()
  static getSelectedFoodItem(state: AppStateModel) {
    return state.selectedFoodItem;
  }

  @Action(SetMenu)
  setMenu(context: StateContext<AppStateModel>, action: SetMenu) {
    const state = context.getState();
    return this.service.getMenu().pipe(
      catchError(() => {
        return of(null);
      }),
      map((foodMenu: Menu) => {
        if (!foodMenu) {
          return null;
        }
        context.setState({
          ...state,
          menu: {...foodMenu}
        });
      }));
  }

  @Action(SetFoodItem)
  setFoodItem(context: StateContext<AppStateModel>, action: SetFoodItem) {
    const state = context.getState();
    const foodItem = action.payload;
    foodItem.foodItem.addons.map(addon => {
      return addon.choices.map(choice => {
        choice.selected = false;
      });
    });
    context.setState({
      ...state,
      selectedFoodItem: {
        ...foodItem
      }
    });
  }

}
