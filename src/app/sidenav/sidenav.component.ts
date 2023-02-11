import { Component, EventEmitter, Input, OnDestroy, Output } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { RouteDef } from '../model/routeDef';
import { Store } from '../services/store.service';

@Component({
  selector: 'app-side-nav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent {
  @Input() isExpanded: boolean = false;
  @Input() selectedAnimals: number | null = 0;
  @Output() toggleMenu = new EventEmitter();

  constructor(private store : Store) {
  }

  public routeLinks : RouteDef[] = [
    { link: "about", name: "About", icon: "dashboard", category : false},
    { link: "animals", name: "Friends", icon: "account_balance", category : true},
    { link: "adopt", name: "Meet", icon: "calendar_today", category : false},
  ];

  getRouteName(route : RouteDef) : string {
    if (!route.category) return route.name;
    return `${route.name} (${this.selectedAnimals})`;
  }

  isRouteEnabled(route : RouteDef) : boolean {
    if (route.name == "Meet") return this.selectedAnimals! > 0;
    return true;
  }
}
