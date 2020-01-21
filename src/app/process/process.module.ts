import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateProcessComponent } from './create-process/create-process.component';
import { MatSelectModule } from '@angular/material';



@NgModule({
  declarations: [CreateProcessComponent],
  imports: [
    CommonModule,
    MatSelectModule
  ]
})
export class ProcessModule { }
