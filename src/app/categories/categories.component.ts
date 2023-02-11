import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Animal } from '../model/animal';
import { Category } from '../model/category';
import { Store } from '../services/store.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent {

  

  constructor(private store : Store) {
    this.store.filterAnimalsByCategory(0)
    .subscribe(
      data => console.log('Number of cats: ', data.length)
    );

    
  }

  getCategories() : Observable<Category[]> {
    return this.store.categories$;
  }

  getAnimalsForCategory(categoryId: number): Observable<Animal[]> {
    return this.store.filterAnimalsByCategory(categoryId);
  } 
}
