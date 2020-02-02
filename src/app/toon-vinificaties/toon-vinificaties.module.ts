import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { ToonActieveVinificatiesComponent } from './toon-actieve-vinificaties/toon-actieve-vinificaties.component';



@NgModule({
  declarations: [ToonActieveVinificatiesComponent],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class ToonVinificatiesModule { }
