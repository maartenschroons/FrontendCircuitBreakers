import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateProcessComponent } from './process/create-process/create-process.component';
import { HomeComponent } from './home/home.component';
import { Routes, RouterModule } from '@angular/router';
import { SharedModule } from './shared/shared.module';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'createProcess', component: CreateProcessComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    CreateProcessComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    RouterModule.forRoot(appRoutes, { enableTracing: true })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
