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
import { OWL_DATE_TIME_LOCALE } from 'ng-pick-datetime';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'createProcess', component: CreateProcessComponent },
  { path: 'afsluiten', component: AfsluitenComponent },
  { path: 'addMeting', component: AddMetingComponent },
  { path: 'addActie', component: AddActieComponent },
  { path: 'process', component: ProcessComponent }
];

export const MY_CUSTOM_FORMATS = {
  fullPickerInput: 'YYYY-MM-DD HH:mm:ss',
  parseInput: 'YYYY-MM-DD HH:mm:ss',
  datePickerInput: 'YYYY-MM-DD HH:mm:ss',
  timePickerInput: 'LT',
  monthYearLabel: 'MMM YYYY',
  dateA11yLabel: 'LL',
  monthYearA11yLabel: 'MMMM YYYY'
  };

@NgModule({
  declarations: [
    AppComponent,
    CreateProcessComponent,
    HomeComponent,
    AfsluitenComponent,
    AddActieComponent,
    AddMetingComponent,
    ProcessComponent,
    ToonDashboardComponent,
    ToonVinificatiesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    RouterModule.forRoot(appRoutes, { enableTracing: false }),
    
  ],
  providers: [{provide: OWL_DATE_TIME_LOCALE, useValue: MY_CUSTOM_FORMATS}],
  bootstrap: [AppComponent]
})
export class AppModule { }
