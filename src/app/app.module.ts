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
import { ToonVinificatiesComponent } from './toon-vinificaties/toon-vinificaties.component';
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

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'createProcess', component: CreateProcessComponent },
  { path: 'afsluiten', component: AfsluitenComponent },
  { path: 'addMeting', component: AddMetingComponent },
  { path: 'addActie', component: AddActieComponent },
  { path: 'process', component: ProcessComponent },
  { path: 'alarmdata', component: AlarmeringDataComponent },
  { path: 'alarmpersonen', component: AlarmeringPersonenComponent },
  { path: 'dashboard', component: ToonDashboardComponent }
];



@NgModule({
  declarations: [
    AppComponent
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
