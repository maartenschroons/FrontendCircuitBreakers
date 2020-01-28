import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { Process } from 'src/app/models/process.model';
import { Vat } from 'src/app/models/vat.model';
import { Persmethode } from 'src/app/models/persmethode.model';
import { Druif } from 'src/app/models/druif.model';
import { ServicesService } from 'src/app/services/services.service';
import { Observable, of } from 'rxjs';
import { AlarmData } from 'src/app/models/alarm-data.model';

@Component({
  selector: 'app-create-process',
  templateUrl: './create-process.component.html',
  styleUrls: ['./create-process.component.css']
})
export class CreateProcessComponent implements OnInit {
  vaten;
  vatenl = new Array<Vat[]>();
  persen;
  druiven;
  procesModel = new Process(0, null, null, 1, null, null, null, null);


  createProcessForm = this.fb.group({
    vat: ['', Validators.required],
    druif: [''],
    pers: ['', Validators.required],
    persHoeveelheid: ['', Validators.required],
    oogst: ['', Validators.required],
    bar: ['', Validators.required]
  });

  constructor(private fb: FormBuilder, private _service: ServicesService) {
    this.instantiateLists()
  }

  instantiateLists() {
    this.vatenl = new Array;
    this._service.getAllVaten().subscribe(result => {
      result.records.forEach(vat => {
        if (vat.inGebruik == 0) {
          this.vatenl.push(vat);
        }
      });
      this.vaten = this.makeObservable();

    });


    this._service.getAllDruifsoorten().subscribe(result => {
      this.druiven = of(result.records);

    });
    this._service.getAllPersMethodes().subscribe(result => {
      this.persen = of(result.records);
    });
  }

  ngOnInit() {
  }

  makeObservable() {
    return of(this.vatenl);
  }
  onSubmit() {

    this._service.addProces(this.procesModel).subscribe(result => {
      this.procesModel.vat = this._service.getVatById(this.procesModel.vatId);
      this.procesModel.vat.subscribe(result => {
        result.inGebruik = 1;
        this._service.updateVat(result).subscribe(result => {
          this.instantiateLists()
        })
      })

    });
  }
}
