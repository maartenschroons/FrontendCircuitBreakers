import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { ToonActieveVinificatiesComponent } from './toon-actieve-vinificaties/toon-actieve-vinificaties.component';
import { ToonNonActieveVinificatiesComponent } from './toon-non-actieve-vinificaties/toon-non-actieve-vinificaties.component';
import { ToonDetailsVinificatiesComponent } from './toon-details-vinificaties/toon-details-vinificaties.component';
import {MatTableModule} from '@angular/material/table';



@NgModule({
  declarations: [ToonActieveVinificatiesComponent, ToonNonActieveVinificatiesComponent, ToonDetailsVinificatiesComponent],
  imports: [
    CommonModule,
    SharedModule,
    MatTableModule
  ]
})
export class ToonVinificatiesModule { }
