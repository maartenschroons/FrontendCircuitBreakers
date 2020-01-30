import {Component, ViewChild} from '@angular/core';
import {MatSidenav} from '@angular/material';
import {MatTableModule} from '@angular/material/table';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild(MatSidenav, {static: false}) sidenav: MatSidenav;
  opened: boolean = false;
  title = 'CircuitFrontend';
}
