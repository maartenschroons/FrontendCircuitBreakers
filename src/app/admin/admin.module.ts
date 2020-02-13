import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DruifSoortToevoegenComponent } from './admin-toevoegen/druif-soort-toevoegen/druif-soort-toevoegen.component';
import { VatToevoegenComponent } from './admin-toevoegen/vat-toevoegen/vat-toevoegen.component';
import { MethodeToevoegenComponent } from './admin-toevoegen/methode-toevoegen/methode-toevoegen.component';
import { MetingToevoegenComponent } from './admin-toevoegen/meting-toevoegen/meting-toevoegen.component';
import { EventToevoegenComponent } from './admin-toevoegen/event-toevoegen/event-toevoegen.component';
import { GebruikerToevoegenComponent } from './admin-toevoegen/gebruiker-toevoegen/gebruiker-toevoegen.component';
import { AdminOverzichtComponent } from './admin-overzicht/admin-overzicht.component';
import { AdminToevoegenComponent } from './admin-toevoegen/admin-toevoegen.component';
import { DruifBeherenComponent } from './admin-overzicht/druif-beheren/druif-beheren.component';
import { EventBeherenComponent } from './admin-overzicht/event-beheren/event-beheren.component';
import { GebruikerBeherenComponent } from './admin-overzicht/gebruiker-beheren/gebruiker-beheren.component';
import { MethodeBeherenComponent } from './admin-overzicht/methode-beheren/methode-beheren.component';
import { MetingBeherenComponent } from './admin-overzicht/meting-beheren/meting-beheren.component';
import { VatBeherenComponent } from './admin-overzicht/vat-beheren/vat-beheren.component';
import { WijnBeherenComponent } from './admin-overzicht/wijn-beheren/wijn-beheren.component';
import { MateriaalBeherenComponent } from './admin-overzicht/materiaal-beheren/materiaal-beheren.component';



@NgModule({
  declarations: [DruifSoortToevoegenComponent, VatToevoegenComponent, MethodeToevoegenComponent, MetingToevoegenComponent, EventToevoegenComponent, GebruikerToevoegenComponent, AdminOverzichtComponent, AdminToevoegenComponent, DruifBeherenComponent, EventBeherenComponent, GebruikerBeherenComponent, MethodeBeherenComponent, MetingBeherenComponent, VatBeherenComponent, WijnBeherenComponent, MateriaalBeherenComponent],
  imports: [
    CommonModule
  ]
})
export class AdminModule { }
