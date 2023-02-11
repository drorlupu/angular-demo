import { Component } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { Store } from './services/store.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
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
  title = 'animal-shelter-angular';
}
