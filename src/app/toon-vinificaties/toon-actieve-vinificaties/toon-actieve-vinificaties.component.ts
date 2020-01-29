import { Component, OnInit } from '@angular/core';
import { ServicesService } from 'src/app/services/services.service';
import { Process } from 'src/app/models/process.model';
import { of } from 'rxjs';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-toon-actieve-vinificaties',
  templateUrl: './toon-actieve-vinificaties.component.html',
  styleUrls: ['./toon-actieve-vinificaties.component.css']
})
export class ToonActieveVinificatiesComponent implements OnInit {
  processenl = new Array<Process[]>();
  processen;
  displayedColumns: string[] = ['id', 'vat'];

  constructor(private fb: FormBuilder, private _service: ServicesService) {
    this.instantiateLists()

  }

  instantiateLists() {
    this._service.getAllProcessen().subscribe(result => {
      result.records.forEach(proces => {
        if (proces.actief == 1) {
          this._service.getVatById(proces.vatId).subscribe(vat => { proces.vat = vat })
          this.processenl.push(proces);
        }
      });
      this.processen = this.makeObservable();
    });
  }
  ngOnInit() {
  }
  makeObservable() {
    return of(this.processenl);
  }
}
