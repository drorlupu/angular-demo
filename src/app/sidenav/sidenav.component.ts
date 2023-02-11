import { Component, EventEmitter, Input, OnDestroy, Output } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { RouteDef } from '../model/routeDef';
import { Store } from '../services/store.service';

@Component({
  selector: 'app-side-nav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnDestroy {
  @Input() isExpanded: boolean = false;
  @Output() toggleMenu = new EventEmitter();

  private selectedAnimalsCount: number = 0;
  private subscription: Subscription;

  constructor(store : Store) {
    this.subscription = store.selectedCount$.subscribe(val => this.selectedAnimalsCount = val);
  }

  public routeLinks : RouteDef[] = [
    { link: "about", name: "About", icon: "dashboard", showCount : false},
    { link: "friends", name: "Friends", icon: "account_balance", showCount : true},
    { link: "meet", name: "Meet", icon: "calendar_today", showCount : false},
  ];

  getRouteName(route : RouteDef) : string {
    if (!route.showCount) return route.name;
    return `${route.name} (${this.selectedAnimalsCount})`;
  }

  isRouteEnabled(route : RouteDef) : boolean {
    if (route.name == "Meet") return this.selectedAnimalsCount! > 0;
    return true;
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
