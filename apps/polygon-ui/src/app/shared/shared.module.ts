import { NgModule } from '@angular/core';
// modules
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
// Pipes
import { SafePipe } from './pipes/sanitizer.pipe';

@NgModule({
  declarations: [
    // components
    
    // pipes
    SafePipe
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    // modules
    CommonModule,
    // pipes
    SafePipe
    // cmp
  ],
})
export class SharedModule {
  constructor() {
    console.log("SharedModule constructor");
  }
}
