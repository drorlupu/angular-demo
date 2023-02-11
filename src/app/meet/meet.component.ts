import { Component } from '@angular/core';
import { filter, map, Observable } from 'rxjs';
import { Animal } from '../model/animal';
import { Category } from '../model/category';
import { Store } from '../services/store.service';

@Component({
  selector: 'app-meet',
  templateUrl: './meet.component.html',
  styleUrls: ['./meet.component.css']
})
export class MeetComponent {

  selectedAnimals$ : Observable<Animal[]>;
  categories$ : Observable<Category[]>;

  constructor (private store : Store) {
    this.selectedAnimals$ = store.selectedAnimals$;
    this.categories$ = store.categories$;
  }

  getCategoryName(id : number) : Observable<string> {
    return this.categories$.pipe(
      map(c => c.filter(item => item.id == id)[0].name.slice(0, -1))
    )
  }

}
