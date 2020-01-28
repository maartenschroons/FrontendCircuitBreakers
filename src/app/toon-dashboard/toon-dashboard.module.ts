import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { ToonDashboardComponent } from './toon-dashboard.component';



@NgModule({
  declarations: [ToonDashboardComponent],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class ToonDashboardModule { }
