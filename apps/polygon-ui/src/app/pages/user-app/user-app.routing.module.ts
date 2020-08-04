import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// cmps
import { UserAppComponent } from './user-app.component';

const routes: Routes = [
  {
    path: '',
    component: UserAppComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
  ],
  exports: [
    RouterModule,
  ],
})
export class UserAppRoutingModule {}
