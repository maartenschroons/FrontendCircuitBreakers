import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlarmeringDataComponent } from './alarmering-data/alarmering-data.component';
import { AlarmeringPersonenComponent } from './alarmering-personen/alarmering-personen.component';
import { DrukComponent } from './alarmering-data/druk/druk.component';
import { TemperatuurComponent } from './alarmering-data/temperatuur/temperatuur.component';
import { CoComponent } from './alarmering-data/co/co.component';
import { EthanolComponent } from './alarmering-data/ethanol/ethanol.component';
import { TroebelheidComponent } from './alarmering-data/troebelheid/troebelheid.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [AlarmeringDataComponent, AlarmeringPersonenComponent, DrukComponent, TemperatuurComponent, CoComponent, EthanolComponent, TroebelheidComponent],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class AlarmeringModule { }
