import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateProcessComponent } from './process/create-process/create-process.component';
import { HomeComponent } from './home/home.component';
import { Routes, RouterModule } from '@angular/router';
import { SharedModule } from './shared/shared.module';
import { AfsluitenComponent } from './process/afsluiten/afsluiten.component';
import { AddMetingComponent } from './process/add-meting/add-meting.component';
import { AddActieComponent } from './process/add-actie/add-actie.component';
import { ProcessComponent } from './process/process.component';
import { ToonDashboardComponent } from './toon-dashboard/toon-dashboard.component';
import { HomeModule } from './home/home.module';
import { ProcessModule } from './process/process.module';
import { AlarmeringDataComponent } from './alarmering/alarmering-data/alarmering-data.component';
import { AlarmeringPersonenComponent } from './alarmering/alarmering-personen/alarmering-personen.component';
import { AlarmeringModule } from './alarmering/alarmering.module';
import { ToonDashboardModule } from './toon-dashboard/toon-dashboard.module';
import { ToonActieveVinificatiesComponent } from './toon-vinificaties/toon-actieve-vinificaties/toon-actieve-vinificaties.component';
import { ToonNonActieveVinificatiesComponent } from './toon-vinificaties/toon-non-actieve-vinificaties/toon-non-actieve-vinificaties.component';
import { ToonDetailsVinificatiesComponent } from './toon-vinificaties/toon-details-vinificaties/toon-details-vinificaties.component';

import { DruifSoortToevoegenComponent } from './admin/admin-toevoegen/druif-soort-toevoegen/druif-soort-toevoegen.component';
import { VatToevoegenComponent } from './admin/admin-toevoegen/vat-toevoegen/vat-toevoegen.component';
import { EventToevoegenComponent } from './admin/admin-toevoegen/event-toevoegen/event-toevoegen.component';
import { MethodeToevoegenComponent } from './admin/admin-toevoegen/methode-toevoegen/methode-toevoegen.component';
import { MetingToevoegenComponent } from './admin/admin-toevoegen/meting-toevoegen/meting-toevoegen.component';
import { GebruikerToevoegenComponent } from './admin/admin-toevoegen/gebruiker-toevoegen/gebruiker-toevoegen.component';
import { LoginComponent } from './login/login.component';
import { AdminToevoegenComponent } from './admin/admin-toevoegen/admin-toevoegen.component';
import { AdminOverzichtComponent } from './admin/admin-overzicht/admin-overzicht.component';
import { DruifBeherenComponent } from './admin/admin-overzicht/druif-beheren/druif-beheren.component';
import { EventBeherenComponent } from './admin/admin-overzicht/event-beheren/event-beheren.component';
import { GebruikerBeherenComponent } from './admin/admin-overzicht/gebruiker-beheren/gebruiker-beheren.component';
import { MethodeBeherenComponent } from './admin/admin-overzicht/methode-beheren/methode-beheren.component';
import { MetingBeherenComponent } from './admin/admin-overzicht/meting-beheren/meting-beheren.component';
import { VatBeherenComponent } from './admin/admin-overzicht/vat-beheren/vat-beheren.component';
import { WijntypeToevoegenComponent } from './admin/admin-toevoegen/wijntype-toevoegen/wijntype-toevoegen.component';
import { MateriaalToevoegenComponent } from './admin/admin-toevoegen/materiaal-toevoegen/materiaal-toevoegen.component';



const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'createProcess', component: CreateProcessComponent },
  { path: 'afsluiten', component: AfsluitenComponent },
  { path: 'addMeting', component: AddMetingComponent },
  { path: 'addActie', component: AddActieComponent },
  { path: 'process', component: ProcessComponent },
  { path: 'alarmdata', component: AlarmeringDataComponent },
  { path: 'alarmpersonen', component: AlarmeringPersonenComponent },
  { path: 'dashboard/:id', component: ToonDashboardComponent },
  { path: 'actief', component: ToonActieveVinificatiesComponent },
  { path: 'nonactief', component: ToonNonActieveVinificatiesComponent },
  { path: 'detail/:id', component: ToonDetailsVinificatiesComponent },
  { path: 'adminToevoegen', component: AdminToevoegenComponent },
  { path: 'login', component: LoginComponent }
  ,
  { path: 'adminEdit', component: AdminOverzichtComponent }
];



@NgModule({
  declarations: [
    AppComponent,
    ToonActieveVinificatiesComponent,
    ToonNonActieveVinificatiesComponent,
    ToonDetailsVinificatiesComponent,
    DruifSoortToevoegenComponent,
    VatToevoegenComponent,
    EventToevoegenComponent,
    MethodeToevoegenComponent,
    MetingToevoegenComponent,
    GebruikerToevoegenComponent,
    LoginComponent,
    AdminToevoegenComponent,
    AdminOverzichtComponent,
    DruifBeherenComponent,
    EventBeherenComponent,
    GebruikerBeherenComponent,
    MethodeBeherenComponent,
    MetingBeherenComponent,
    VatBeherenComponent,
    WijntypeToevoegenComponent,
    MateriaalToevoegenComponent
  ],
  imports: [
    HomeModule,
    ProcessModule,
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    AlarmeringModule,
    ToonDashboardModule,
    RouterModule.forRoot(appRoutes, { enableTracing: false }),

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
