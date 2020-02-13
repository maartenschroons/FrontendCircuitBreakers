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
  model = new Vat(0, "", 0, 1, "", 0, 0, 0, 0, 1);
  materialen;

  Form = this.fb.group({
    naam: ['', Validators.required],
    locatie: ['', Validators.required],
    volume: ['', Validators.required],
    deksel: ['', Validators.required],
    koelmantel: ['', Validators.required],
    mangat: ['', Validators.required],
    materiaal: ['', Validators.required]
  });

  constructor(private fb: FormBuilder, private _service: ServicesService, private _snackBar: MatSnackBar) {
    this.instantiateLists();
  }

  instantiateLists() {
    this._service.getAllMaterialen().subscribe(result => {
      this.materialen = result.records;
    });
  }
  ngOnInit() {
  }

  onSubmit() {
    this.openSnackBar();
    this._service.addVat(this.model).subscribe();
  }
}
