import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

// ngrx
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreRouterConnectingModule, NavigationActionTiming } from '@ngrx/router-store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { reducers, metaReducers } from './root.ngrx';
import { CustomRouterStateSerializer } from './shared/ngrx/utils';
// modules
import { RootRoutingModule } from './root.routing.module';
import { CoreModule } from './core/core.module';
// components
import { RootComponent } from './root.component';
// env
import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    RootComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    // my modules
    RootRoutingModule,
    CoreModule,
    // ngrx
    StoreModule.forRoot(reducers, { metaReducers }),
    StoreRouterConnectingModule.forRoot({
      stateKey: 'router',
      serializer: CustomRouterStateSerializer,
      navigationActionTiming: NavigationActionTiming.PostActivation,
    }),
    StoreDevtoolsModule.instrument({
      name: 'Ngrx DevTools',
      logOnly: environment.production,
    }),
    EffectsModule.forRoot([]),
  ],
  bootstrap: [
    RootComponent
  ],
})
export class RootModule {
  constructor() {
    console.log("RootModule constructor");
  }
}
