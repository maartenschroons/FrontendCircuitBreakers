import { Component, OnInit } from '@angular/core';
import { Materiaal } from 'src/app/models/materiaal.model';
import { Validators, FormBuilder } from '@angular/forms';
import { ServicesService } from 'src/app/services/services.service';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-materiaal-toevoegen',
  templateUrl: './materiaal-toevoegen.component.html',
  styleUrls: ['./materiaal-toevoegen.component.css']
})
export class MateriaalToevoegenComponent implements OnInit {

  model = new Materiaal(0, "");

  Form = this.fb.group({
    naam: ['', Validators.required]
  });
  openSnackBar() {
    this._snackBar.open("Het materiaal is aangemaakt!", "Close", {
      duration: 5000,
    });
  }

  constructor(private fb: FormBuilder, private _service: ServicesService, private _snackBar: MatSnackBar) {

  }

  ngOnInit() {
  }

  onSubmit() {
    this.openSnackBar();
    this._service.addMateriaal(this.model).subscribe(result =>{this.model = new Materiaal(0, "");});
  }

}
