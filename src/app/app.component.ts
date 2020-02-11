import { Component, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material';
import { ServicesService } from './services/services.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { map, shareReplay } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild(MatSidenav, { static: false }) sidenav: MatSidenav;
  opened: boolean = false;
  title = 'CircuitFrontend';
  login: boolean;
  admin: boolean;
  constructor(private _service: ServicesService, private router: Router, private breakpointObserver: BreakpointObserver) {
    this._service.isLoggedin.subscribe(e => {
      this.login = e.valueOf();
    })

    this._service.isAdmin.subscribe(e => {
      this.admin = e.valueOf();
    })
  }

  logOut() {
    localStorage.removeItem("token");
    this._service.isLoggedin.next(!this.login ? true : false);
    this.router.navigate(["/"]);
    console.log(this._service.isLoggedin.value);
  }

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );
}
