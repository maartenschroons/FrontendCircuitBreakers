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
import { TemperatuurComponent } from './alarmering/alarmering-data/temperatuur/temperatuur.component';
import { CoComponent } from './alarmering/alarmering-data/co/co.component';
import { DrukComponent } from './alarmering/alarmering-data/druk/druk.component';
import { TroebelheidComponent } from './alarmering/alarmering-data/troebelheid/troebelheid.component';
import { ToonDashboardModule } from './toon-dashboard/toon-dashboard.module';
import { ToonActieveVinificatiesComponent } from './toon-vinificaties/toon-actieve-vinificaties/toon-actieve-vinificaties.component';
import { ToonNonActieveVinificatiesComponent } from './toon-vinificaties/toon-non-actieve-vinificaties/toon-non-actieve-vinificaties.component';
import { ToonDetailsVinificatiesComponent } from './toon-vinificaties/toon-details-vinificaties/toon-details-vinificaties.component';
import { AdminComponent } from './admin/admin.component';
import { DruifSoortToevoegenComponent } from './admin/druif-soort-toevoegen/druif-soort-toevoegen.component';
import { VatToevoegenComponent } from './admin/vat-toevoegen/vat-toevoegen.component';
import { EventToevoegenComponent } from './admin/event-toevoegen/event-toevoegen.component';
import { MethodeToevoegenComponent } from './admin/methode-toevoegen/methode-toevoegen.component';
import { MetingToevoegenComponent } from './admin/meting-toevoegen/meting-toevoegen.component';
import { GebruikerToevoegenComponent } from './admin/gebruiker-toevoegen/gebruiker-toevoegen.component';
import { LoginComponent } from './login/login.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'createProcess', component: CreateProcessComponent },
  { path: 'afsluiten', component: AfsluitenComponent },
  { path: 'addMeting', component: AddMetingComponent },
  { path: 'addActie', component: AddActieComponent },
  { path: 'process', component: ProcessComponent },
  { path: 'alarmdata', component: AlarmeringDataComponent },
  { path: 'alarmpersonen', component: AlarmeringPersonenComponent },
  { path: 'dashboard', component: ToonDashboardComponent },
  { path: 'actief', component: ToonActieveVinificatiesComponent },
  { path: 'nonactief', component: ToonNonActieveVinificatiesComponent },
  { path: 'detail', component: ToonDetailsVinificatiesComponent },
  { path: 'admin', component: AdminComponent },
  { path: 'login', component: LoginComponent }
];



@NgModule({
  declarations: [
    AppComponent,
    ToonActieveVinificatiesComponent,
    ToonNonActieveVinificatiesComponent,
    ToonDetailsVinificatiesComponent,
    AdminComponent,
    DruifSoortToevoegenComponent,
    VatToevoegenComponent,
    EventToevoegenComponent,
    MethodeToevoegenComponent,
    MetingToevoegenComponent,
    GebruikerToevoegenComponent,
    LoginComponent
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
