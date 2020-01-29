import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ServicesService } from 'src/app/services/services.service';
import { Process } from 'src/app/models/process.model';
import { of } from 'rxjs';
import { Gebruiker } from 'src/app/models/gebruiker.model';

@Component({
  selector: 'app-alarmering-personen',
  templateUrl: './alarmering-personen.component.html',
  styleUrls: ['./alarmering-personen.component.css']
})
export class AlarmeringPersonenComponent implements OnInit {
  gebruikersl = new Array<Gebruiker[]>();
  gebruikers;

  processenl = new Array<Process[]>();
  processen;
  constructor(private fb: FormBuilder, private _service: ServicesService) {
    this.instantiateLists();

  }

  instantiateLists() {
    this._service.getAllGebruikers().subscribe(result => {
      result.records.forEach(gebruiker => {
        this.gebruikersl.push(gebruiker);
      });
      this.gebruikers = this.makeObservableGebruiker();
    });

    this._service.getAllProcessen().subscribe(result => {
      result.records.forEach(proces => {
        if (proces.actief == 1) {
          this._service.getVatById(proces.vatId).subscribe(vat => { proces.vat = vat })
          this.processenl.push(proces);
        }
      });
      
      this.processen = this.makeObservable();
      console.log(this.processen);
    });
  }

  makeObservableGebruiker() {
    return of(this.gebruikersl);
  }
  makeObservable() {
    return of(this.processenl);
  }
  ngOnInit() {
  }

}
