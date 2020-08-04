import { NgModule } from '@angular/core';
// mdls
import { SharedModule } from '../../shared/shared.module';
import { UserAppRoutingModule } from './user-app.routing.module';
// cmps
import { UserAppComponent } from './user-app.component';

@NgModule({
  declarations: [UserAppComponent],
  imports: [
    SharedModule,
    UserAppRoutingModule
  ]
})
export class UserAppModule { }
