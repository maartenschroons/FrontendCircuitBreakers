import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { ServicesService } from 'src/app/services/services.service';
import { SoortEvent } from 'src/app/models/soort-event.model';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-event-toevoegen',
  templateUrl: './event-toevoegen.component.html',
  styleUrls: ['./event-toevoegen.component.css']
})
export class EventToevoegenComponent implements OnInit {

  model = new SoortEvent(0, "");

  Form = this.fb.group({
    naam: ['', Validators.required]
  });
  openSnackBar() {
    this._snackBar.open("Het soort event is aangemaakt!", "Close", {
      duration: 5000,
    });
  }
  constructor(private fb: FormBuilder, private _service: ServicesService, private _snackBar: MatSnackBar) {

  }

  ngOnInit() {
  }

  onSubmit() {
    this.openSnackBar();
    this._service.addEventSoort(this.model).subscribe(result=>{this.model = new SoortEvent(0, "");});
  }

}
