import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// cmps
import { AdminAppComponent } from './admin-app.component';

const routes: Routes = [
  {
    path: '',
    component: AdminAppComponent
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
export class AdminAppRoutingModule {}
