import { Component } from '@angular/core';

@Component({
  selector: 'polygon-admin-app',
  template: `
    <p>AdminAppComponent (with router outlet lvl 1)</p>
    <router-outlet></router-outlet>
  `
})
export class AdminAppComponent {
  constructor() {
    console.log("AdminAppComponent constructor");
  }
}
