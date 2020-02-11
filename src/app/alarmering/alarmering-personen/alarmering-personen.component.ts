import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ServicesService } from 'src/app/services/services.service';
import { Process } from 'src/app/models/process.model';
import { of, Observable } from 'rxjs';
import { Gebruiker } from 'src/app/models/gebruiker.model';
import { AlarmDataGebruiker } from 'src/app/models/alarm-data-gebruiker.model';
import { stringToKeyValue } from '@angular/flex-layout/extended/typings/style/style-transforms';
import { MatSnackBar } from '@angular/material';

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

  openSnackBar(message: string) {
    this._snackBar.open(message, "Close", {
      duration: 5000,
    });
  }

  constructor(private fb: FormBuilder, private _service: ServicesService, private _snackBar: MatSnackBar) {
    this.instantiateLists();

  }

  instantiateLists() {
    this.processenl = [];
    this.gebruikersl = [];
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
    });
    this.processenNotl = [];
    this.processenSubl = [];
    this.processenNotl = this.processenl;
    this.bestaat = false;
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
    this.instantiateLists();


    this._service.getAllAlarmDataGebruikers().subscribe(result => {
      result.records.forEach(el => {
        this.checkIfExists(el, id);
      })
      if (this.bestaat) {

        this.gebruiker = id;
        this._service.getAllAlarmDataGebruikerByGebruiker(id).subscribe(result => {
          result.records.forEach(element => {
            this.CheckIfContains(element.alarmData_vinificatieId);
            this.processenNotl.forEach(el => {
              if (el.id == element.alarmData_vinificatieId) {
                this.processenNotl.splice(this.processenNotl.indexOf(el), 1);
              }
            });
          });
        });
        this.processenNot = of(this.processenl);
      }
      else {
        this.processenl = [];
        this.processenNot = new Observable<Process[]>();
        this._service.getAllProcessen().subscribe(result => {
          result.records.forEach(proces => {
            if (proces.actief == 1) {
              this._service.getVatById(proces.vatId).subscribe(vat => { proces.vat = vat })
              this.processenl.push(proces);
            }
          });
          this.processen = this.makeObservable();
          this.processenNot = this.processen;

        });
      }
    })
    this.processenSub = of(this.processenSubl);

  }

  checkIfExists(el: AlarmDataGebruiker, id: number) {
    if (el.gebruikerId == id) {
      this.bestaat = true;
    }
  }

  add(proces: Process) {
    var message = "Deze persoon krijgt vanaf nu meldingen van het proces";
    this.openSnackBar(message);
    this._service.getAlarmDataByProces(proces.id).subscribe(result => {
      result.records.forEach(element => {
        this.AlarmDataGebruikerModel.alarmdataId = element.id;
        this._service.addAlarmDataGebruiker(this.AlarmDataGebruikerModel).subscribe();
      });
    })
  }

  delete(proces: Process) {
    var message = "Deze persoon zal geen meldingen mee krijgen van het proces";
    this.openSnackBar(message);
    this._service.getAlarmDataByProces(proces.id).subscribe(result => {
      result.records.forEach(element => {
        this.AlarmDataGebruikerModel.alarmdataId = element.id;
        this._service.deleteAlarmDataGebruiker(this.AlarmDataGebruikerModel).subscribe();
      });
    })
  }

  CheckIfContains(id: number) {
    this.processen.subscribe(result => {
      result.forEach(el => {
        if (el.id == id) {
          this.processenSubl.push(el);
        }
      });
    })
  }


}
