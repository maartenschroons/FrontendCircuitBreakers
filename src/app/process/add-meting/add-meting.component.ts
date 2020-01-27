import { Component, OnInit } from '@angular/core';
import { Vat } from 'src/app/models/vat.model';
import { Validators, FormBuilder } from '@angular/forms';
import { SoortMeting } from 'src/app/models/soort-meting.model';
import { ServicesService } from 'src/app/services/services.service';
import { of } from 'rxjs';
import { Meting } from 'src/app/models/meting.model';
import { Process } from 'src/app/models/process.model';

@Component({
  selector: 'app-add-meting',
  templateUrl: './add-meting.component.html',
  styleUrls: ['./add-meting.component.css']
})
export class AddMetingComponent implements OnInit {
  processenl = new Array<Process[]>();
  processen;
  metingen;

  metingModel = new Meting(0, null, null, null, null, null);

  addMetingForm = this.fb.group({
    vat: ['', Validators.required],
    soortMeting: ['', Validators.required],
    Metingswaarde: ['', Validators.required],
    tijd: ['', Validators.required]
  });

  constructor(private fb: FormBuilder, private _service: ServicesService) { 
    this.instantiateLists()
  }

  instantiateLists(){
    this._service.getAllProcessen().subscribe(result => {
      result.records.forEach(proces => {
        if (proces.actief == 1) {
          this._service.getVatById(proces.vatId).subscribe(vat => { proces.vat = vat })
          this.processenl.push(proces);
        }
      });
      this.processen = this.makeObservable();
    });

    this._service.getAllMetingsoorten().subscribe(result => {
      this.metingen = of(result.records);
    });
  }
  ngOnInit() {
  }
  makeObservable() {
    return of(this.processenl);
  }

  onSubmit(){
      this.metingModel.gebruikerId = "1";

      this._service.addMeting(this.metingModel).subscribe;
  }

}
