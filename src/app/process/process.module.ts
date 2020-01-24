import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateProcessComponent } from './create-process/create-process.component';
import { MatSelectModule } from '@angular/material';
import { AfsluitenComponent } from './afsluiten/afsluiten.component';
import { AddActieComponent } from './add-actie/add-actie.component';
import { AddMetingComponent } from './add-meting/add-meting.component';
import { ProcessComponent } from './process.component';



@NgModule({
  declarations: [CreateProcessComponent, AfsluitenComponent, AddActieComponent, AddMetingComponent, ProcessComponent],
  imports: [
    CommonModule,
    MatSelectModule
  ]
})
export class ProcessModule { }
