import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DruifSoortToevoegenComponent } from './druif-soort-toevoegen/druif-soort-toevoegen.component';
import { VatToevoegenComponent } from './vat-toevoegen/vat-toevoegen.component';
import { AdminComponent } from './admin.component';
import { MethodeToevoegenComponent } from './methode-toevoegen/methode-toevoegen.component';
import { MetingToevoegenComponent } from './meting-toevoegen/meting-toevoegen.component';
import { EventToevoegenComponent } from './event-toevoegen/event-toevoegen.component';
import { GebruikerToevoegenComponent } from './gebruiker-toevoegen/gebruiker-toevoegen.component';



@NgModule({
  declarations: [DruifSoortToevoegenComponent, VatToevoegenComponent, AdminComponent, MethodeToevoegenComponent, MetingToevoegenComponent, EventToevoegenComponent, GebruikerToevoegenComponent],
  imports: [
    CommonModule
  ]
})
export class AdminModule { }
