import { Component } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { Observable } from 'rxjs';
import { Store } from './services/store.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  title = 'animal-shelter-angular';
  isExpanded = true;
  
  constructor(
    private store: Store,
    private iconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer  
  ) {

    store.categories$.subscribe(
      categories => {
        categories.forEach(category => 
          {
            this.iconRegistry.addSvgIcon(
              category.name,
              this.domSanitizer.bypassSecurityTrustResourceUrl(category.iconLocation));
          });
        });
  }
  

  public toggleMenu() {
    this.isExpanded = !this.isExpanded;
  }

  getSelectedAnimals() : Observable<number> {
    return this.store.selectedCount$;
  }
}
