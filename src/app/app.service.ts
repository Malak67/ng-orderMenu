import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Menu } from './appStore/app-state.model';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private http: HttpClient) {}

  public getMenu(): Observable<Menu> {
    return this.http.get('./assets/foodMenu.json')
    .pipe(
      catchError(error => {
        return of(null);
      }),
    );
  }

}
