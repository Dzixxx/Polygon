import { Component, OnInit, OnDestroy } from '@angular/core';
// rxjs
import { Subscription } from 'rxjs';
// facades
import { DataFacade } from '@polygon-ui/core/store/data/facade';

@Component({
  selector: 'polygon-user-app',
  template: `
    <p>UserAppComponent (with router outlet lvl 1)</p>
    <router-outlet></router-outlet>
  `,
})
export class UserAppComponent implements OnInit, OnDestroy {
  private subscriptions: Array<Subscription> = [];

  constructor(public dataFacade: DataFacade) {
    console.log("UserAppComponent constructor");
  }

  ngOnInit() {
    this.subscriptions.push(
      this.dataFacade.test$
        .subscribe((test: boolean) => { /* do smth */ }),
      this.dataFacade.testTwice$
        .subscribe((testTwice: boolean) => { /* do smth */ }), 
    )
  }

  ngOnDestroy() {
    this.subscriptions.forEach(sub => sub.unsubscribe());
  }
}
