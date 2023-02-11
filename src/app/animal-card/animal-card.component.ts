import { Component, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { Animal } from '../model/animal';
import { Store } from '../services/store.service';

@Component({
  selector: 'app-animal-card',
  templateUrl: './animal-card.component.html',
  styleUrls: ['./animal-card.component.css']
})
export class AnimalCardComponent {

  @Input() animal : Animal | undefined;
  selectedCount$ : Observable<number>;

  constructor(private store : Store) {
    this.selectedCount$ = this.store.selectedCount$;
  }

  public checkAnimal() : void {
    this.animal!.checked = !this.animal!.checked;
    this.store.checkAnimal(this.animal!);
  }
}
