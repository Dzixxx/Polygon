import { NgModule } from '@angular/core';
import { RouterModule, Routes, PreloadAllModules } from '@angular/router';

const routes: Routes = [
	/*
	{
		path: 'auth',
		loadChildren: ...
	},
	*/
	{
		path: '',
		loadChildren: () => {
			console.log("loadChildren for PagesModule");
			return import('./pages/pages.module').then(m => m.PagesModule)
		}
		// guards?
  	},
  /*

	{
		path: 'not-found',
		component: NotFoundComponent,
	},
	{
		path: '**',
		redirectTo: '/not-found',
  }
  */
];

@NgModule({
	imports: [
		RouterModule.forRoot(routes, {
			preloadingStrategy: PreloadAllModules,
			useHash: true,
		}),
	],
	providers: [
		PreloadAllModules,
	],
	exports: [
		RouterModule,
	],
})
export class RootRoutingModule {}
