import { NgModule } from '@angular/core';
// mdls
import { SharedModule } from '../shared/shared.module';
import { PagesRoutingModule } from './pages.routing.module';

@NgModule({
  declarations: [],
  imports: [
    SharedModule,
    PagesRoutingModule
  ]
})
export class PagesModule {
  constructor() {
    console.log("PagesModule constructor");
  } 
}
