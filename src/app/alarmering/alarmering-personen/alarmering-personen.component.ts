import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ServicesService } from 'src/app/services/services.service';
import { Process } from 'src/app/models/process.model';
import { of } from 'rxjs';
import { Gebruiker } from 'src/app/models/gebruiker.model';
import { AlarmDataGebruiker } from 'src/app/models/alarm-data-gebruiker.model';

@Component({
  selector: 'app-alarmering-personen',
  templateUrl: './alarmering-personen.component.html',
  styleUrls: ['./alarmering-personen.component.css']
})
export class AlarmeringPersonenComponent implements OnInit {
  gebruikersl = new Array<Gebruiker[]>();
  gebruikers;

  bestaat: boolean = false;

  gebruiker;

  alarmForm = this.fb.group({
    gebruiker: ['', Validators.required],
    proces: ['', Validators.required]
  });


  adg;

  AlarmDataGebruikerModel = new AlarmDataGebruiker(null, null);

  processenl = new Array<Process[]>();
  processen;

  processenSubl;
  processenSub;
  processenNotl;
  processenNot;


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
      this.processenl = new Array<Process[]>();
    });
  }


  makeObservableSub() {
    return of(this.processenSubl);
  }
  makeObservableNot() {
    return of(this.processenNotl);
  }

  makeObservableGebruiker() {
    return of(this.gebruikersl);
  }

  makeObservable() {
    return of(this.processenl);
  }

  ngOnInit() {
  }

  onSelect(id: number) {
    this.processenNotl = [];
    this.processenSubl = [];
    this.bestaat = false;
    this._service.getAllAlarmDataGebruikers().subscribe(result => {
      result.records.forEach(el => {
        this.checkIfExists(el, id);
      })
      if (this.bestaat) {

        this.gebruiker = id;
        this._service.getAllAlarmDataGebruikerByGebruiker(id).subscribe(result => {
          result.records.forEach(element => {
            console.log(result);
            this.CheckIfContains(element.alarmData_vinificatieId);
          });
        });
      }
      else {
        this.processenNot = this.processen;

      }

    })
    this.processenNot = of(this.processenNotl);
    this.processenSub = of(this.processenSubl);
  }

  checkIfExists(el: AlarmDataGebruiker, id: number) {
    if (el.gebruikerId == id) {
      this.bestaat = true;
    }
  }

  add(proces: Process) {
    this._service.getAlarmDataByProces(proces.id).subscribe(result => {
      result.records.forEach(element => {
        this.AlarmDataGebruikerModel.alarmdataId = element.id;
        this._service.addAlarmDataGebruiker(this.AlarmDataGebruikerModel).subscribe(result => { this.onSelect(this.gebruiker); });
      });
    })
  }

  delete(proces: Process) {
    this._service.getAlarmDataByProces(proces.id).subscribe(result => {
      result.records.forEach(element => {
        this.AlarmDataGebruikerModel.alarmdataId = element.id;
        this._service.deleteAlarmDataGebruiker(this.AlarmDataGebruikerModel).subscribe(result => { this.onSelect(this.gebruiker); });
      });
    })
  }

  CheckIfContains(id: number) {
    var check = false;
    this.processen.subscribe(result => {
      result.forEach(el => {
        if (el.id == id) {
          this.processenSubl.push(el);
          check = true;
        }


      });
      if (!check) {
        // this.processenNotl.push(el);
      }
    })


  }


}
