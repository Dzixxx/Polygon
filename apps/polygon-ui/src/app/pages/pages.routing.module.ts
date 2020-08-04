import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// guards
import { AdminGuard } from '../core/guards/admin.guard';
import { UserGuard } from '../core/guards/user.guard';

const routes: Routes = [
  {
    path: 'user',
    canActivate: [UserGuard],
    loadChildren: () => {
			console.log("loadChildren for UserApp");
			return import('./user-app/user-app.module').then(m => m.UserAppModule)
		}
  },
  {
    path: "admin",
    canActivate: [AdminGuard],
    loadChildren: () => {
			console.log("loadChildren for AdminApp");
			return import('./admin-app/admin-app.module').then(m => m.AdminAppModule)
		}
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
export class PagesRoutingModule {}
