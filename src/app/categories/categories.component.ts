import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Animal } from '../model/animal';
import { Category } from '../model/categoy';
import { Store } from '../services/store.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent {

  animals$ : (Observable<Animal[]> | undefined)[];

  constructor(private store : Store) {
    this.store.filterAnimalsByCategory(0)
    .subscribe(
      data => console.log('Number of cats: ', data.length)
    );

    this.animals$ = new Array();
    for (let i = 0; i < 10; i++) {
      this.animals$.push(undefined);
    }
  }

  getCategories() : Observable<Category[]> {
    return this.store.categories$;
  }

  getAnimalsForCategory(categoryId: number): Observable<Animal[]> {
    if (this.animals$[categoryId] == undefined) {
      this.animals$[categoryId] = this.store.filterAnimalsByCategory(categoryId);
    } 

    return this.animals$[categoryId] as Observable<Animal[]>;
  }
  
}
