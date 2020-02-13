import { Component, OnInit } from '@angular/core';
import { Persmethode } from 'src/app/models/persmethode.model';
import { Validators, FormBuilder } from '@angular/forms';
import { ServicesService } from 'src/app/services/services.service';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-methode-toevoegen',
  templateUrl: './methode-toevoegen.component.html',
  styleUrls: ['./methode-toevoegen.component.css']
})
export class MethodeToevoegenComponent implements OnInit {

  model = new Persmethode(0, "");

  Form = this.fb.group({
    naam: ['', Validators.required]
  }); 
  openSnackBar() {
    this._snackBar.open("De persmethode is aangemaakt!", "Close", {
      duration: 5000,
    });
  }

  constructor(private fb: FormBuilder, private _service: ServicesService, private _snackBar: MatSnackBar) {

  }

  ngOnInit() {
  }

  onSubmit() {
    this.openSnackBar();
    this._service.addMethode(this.model).subscribe(result=>{this.model = new Persmethode(0, "");});
  }

}
