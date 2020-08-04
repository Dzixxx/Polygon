import { NgModule } from '@angular/core';

// ngrx
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { reducers } from './store';
import { DataEffects } from './store/data/effects';
// mdls
import { SharedModule } from '../shared/shared.module';
// cmp


@NgModule({
  declarations: [],
  imports: [
    SharedModule,
    StoreModule.forFeature('core', reducers),
    EffectsModule.forFeature([
      DataEffects
    ]),
  ]
})
export class CoreModule {
  constructor() {
    console.log("CoreModule constructor");
  }
}
