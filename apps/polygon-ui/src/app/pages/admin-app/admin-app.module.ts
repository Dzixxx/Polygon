import { NgModule } from '@angular/core';
// mdls
import { SharedModule } from '../../shared/shared.module';
import { AdminAppRoutingModule } from './admin-app.routing.module';
// cmps
import { AdminAppComponent } from './admin-app.component';

@NgModule({
  declarations: [
    AdminAppComponent
  ],
  imports: [
    SharedModule,
    AdminAppRoutingModule
  ]
})
export class AdminAppModule {
  constructor() {
    console.log("AdminAppModule constructor");
  }
}
