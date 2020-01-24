import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { Process } from 'src/app/models/process.model';
import { Vat } from 'src/app/models/vat.model';
import { Persmethode } from 'src/app/models/persmethode.model';
import { Druif } from 'src/app/models/druif.model';
import { ServicesService } from 'src/app/services/services.service';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-create-process',
  templateUrl: './create-process.component.html',
  styleUrls: ['./create-process.component.css']
})
export class CreateProcessComponent implements OnInit {
  vaten;
  persen;

  Druif1 = new Druif(0, "Chardonnay");
  Druif2 = new Druif(1, "Grüner verltiner");
  Druif3 = new Druif(2, "pinot blanc");
  Druif4 = new Druif(3, "Merlot");
  Druif5 = new Druif(4, "Cabernet sauvignon");
  Druif6 = new Druif(5, "Grenache");
  druiven = new Array(this.Druif1, this.Druif2, this.Druif3, this.Druif4, this.Druif5, this.Druif6);
  procesModel = new Process(0, null, null, true, null, null, null);


  createProcessForm = this.fb.group({
    vat: ['', Validators.required],
    druif: [''],
    pers: ['', Validators.required],
    persHoeveelheid: ['', Validators.required],
    oogst: ['', Validators.required],
    bar: ['', Validators.required]
  });

  constructor(private fb: FormBuilder, private _service: ServicesService) {
    _service.getAllVaten().subscribe(result => {
      this.vaten = of(result.records);
      console.log(this.vaten);
    });
    // _service.getAllDruifsoorten().subscribe(result => {
    //   this.druiven = of(result.records);
    // });
    _service.getAllPersMethodes().subscribe(result => {
      this.persen = of(result.records);
    });


  }

  ngOnInit() {
  }

  onSubmit() {
    this._service.addProces(this.procesModel).subscribe();
  }

}
