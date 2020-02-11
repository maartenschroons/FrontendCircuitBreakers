import { Component, OnInit } from '@angular/core';
import { Vat } from 'src/app/models/vat.model';
import { Validators, FormBuilder } from '@angular/forms';
import { ServicesService } from 'src/app/services/services.service';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-vat-toevoegen',
  templateUrl: './vat-toevoegen.component.html',
  styleUrls: ['./vat-toevoegen.component.css']
})
export class VatToevoegenComponent implements OnInit {
  openSnackBar() {
    this._snackBar.open("Het vat is aangemaakt!", "Close", {
      duration: 5000,
    });
  }
  model = new Vat(0, "", 0, 1);

  Form = this.fb.group({
    naam: ['', Validators.required]
  });

  constructor(private fb: FormBuilder, private _service: ServicesService, private _snackBar: MatSnackBar) {

  }

  ngOnInit() {
  }

  onSubmit() {
    this.openSnackBar();
    this._service.addVat(this.model).subscribe();
  }
}