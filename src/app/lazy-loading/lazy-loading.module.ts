import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LazyComponent } from './lazy/lazy.component';
import { LazyRoutingModule } from './lazy-routing/lazy-routing.module';

@NgModule({
  imports: [CommonModule, LazyRoutingModule],
  declarations: [LazyComponent]
})
export class LazyLoadingModule {}
