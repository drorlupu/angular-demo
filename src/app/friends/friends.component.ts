import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Animal } from '../model/animal';
import { Category } from '../model/category';
import { Store } from '../services/store.service';

@Component({
  selector: 'app-friends',
  templateUrl: './friends.component.html',
  styleUrls: ['./friends.component.css']
})
export class FriendsComponent {

  categories$: Observable<Category[]>;

  constructor(private store : Store) {
    this.categories$ = store.categories$;
  }

  getAnimalsForCategory(categoryId: number): Observable<Animal[]> {
    return this.store.filterAnimalsByCategory(categoryId);
  } 
}
