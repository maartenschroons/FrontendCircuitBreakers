import { Component, OnInit } from '@angular/core';
import { WijnType } from 'src/app/models/wijn-type.model';
import { Validators, FormBuilder } from '@angular/forms';
import { ServicesService } from 'src/app/services/services.service';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-wijntype-toevoegen',
  templateUrl: './wijntype-toevoegen.component.html',
  styleUrls: ['./wijntype-toevoegen.component.css']
})
export class WijntypeToevoegenComponent implements OnInit {

  model = new WijnType(0, "");

  Form = this.fb.group({
    naam: ['', Validators.required]
  });
  openSnackBar() {
    this._snackBar.open("Het wijntype is aangemaakt!", "Close", {
      duration: 5000,
    });
  }

  constructor(private fb: FormBuilder, private _service: ServicesService, private _snackBar: MatSnackBar) {

  }

  ngOnInit() {
  }

  onSubmit() {
    this.openSnackBar();
    this._service.addWijntype(this.model).subscribe();
  }

}
