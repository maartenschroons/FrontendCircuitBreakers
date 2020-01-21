import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { Process } from 'src/app/models/process.model';
import { Vat } from 'src/app/models/vat.model';
import { Persmethode } from 'src/app/models/persmethode.model';
import { Druif } from 'src/app/models/druif.model';

@Component({
  selector: 'app-create-process',
  templateUrl: './create-process.component.html',
  styleUrls: ['./create-process.component.css']
})
export class CreateProcessComponent implements OnInit {

  Vat1 = new Vat(0,"Een", false);
  Vat2 = new Vat(1,"Twee", false);
  vaten = [this.Vat1, this.Vat2];

  Pers1 = new Persmethode(0,"Test1");
  Pers2 = new Persmethode(1,"Test2");
  persen = [this.Pers1, this.Pers2];

  Druif1 = new Druif(0, "Rood");
  Druif2 = new Druif(1, "Groen");
  druiven = [this.Druif1, this.Druif2];
  procesModel = new Process(0,0,0,0,0,0,0,0);
  

  createProcessForm = this.fb.group({
    vat: ['', Validators.required],
    druif: ['', Validators.required],
    pers: ['', Validators.required],
    persHoeveelheid: ['', Validators.required],
    oogst: ['', Validators.required],
    bar: ['', Validators.required]
  });
  
  constructor(private fb: FormBuilder) { 

  }

  ngOnInit() {
  }

}
