import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { Process } from 'src/app/models/process.model';
import { Vat } from 'src/app/models/vat.model';
import { Persmethode } from 'src/app/models/persmethode.model';
import { Druif } from 'src/app/models/druif.model';
import { ServicesService } from 'src/app/services/services.service';
import { Observable, of } from 'rxjs';
import { AlarmData } from 'src/app/models/alarm-data.model';
import { MatSnackBar } from '@angular/material';
import { VinificatieDruif } from 'src/app/models/vinificatie-druif.model';
import { WijnType } from 'src/app/models/wijn-type.model';

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
  procesModel = new Process(0, null, null, 1, null, null, null, null, null, null, 0);
  druivenLijst = new Array<Druif>();

  wijntypes = of([new WijnType(1, "rood"), new WijnType(2, "rosé")]);

  createProcessForm = this.fb.group({
    vat: ['', Validators.required],
    pers: ['', Validators.required],
    persHoeveelheid: ['', Validators.required],
    oogst: ['', Validators.required],
    bar: ['', Validators.required],
    jaargang: ['', Validators.required],
    wijntype: ['', Validators.required]
  });

  constructor(private fb: FormBuilder, private _service: ServicesService, private _snackBar: MatSnackBar) {
    this.instantiateLists()
  }

  openSnackBar() {
    this._snackBar.open("Het proces is aangemaakt!", "Close", {
      duration: 5000,
    });
  }

  onChange(value: Druif) {
    var index = this.druivenLijst.indexOf(value);
    if (index == -1) {
      this.druivenLijst.push(value);
    } else {
      this.druivenLijst.splice(index, 1);
    }
    console.log(this.druivenLijst);
  }

  instantiateLists() {
    this.procesModel = new Process(0, null, null, 1, null, null, null, null, null, null, 0);
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
    this.openSnackBar();
    this._service.addProces(this.procesModel).subscribe(result => {
      this.procesModel.vat = this._service.getVatById(this.procesModel.vatId);
      this.procesModel.vat.subscribe(result => {
        console.log(result);
        result.inGebruik = 1;
        this._service.updateVat(result).subscribe(result => {
          this.instantiateLists();
          this._service.getLastProcess().subscribe(result => {
            for (let i = 1; i < 6; i++) {
              this._service.addAlarmData(new AlarmData(0, i, result.id, 51, 1, 1)).subscribe();
            }
            this.druivenLijst.forEach(el => {
              this._service.addVinificatieDruif(new VinificatieDruif(result.id, el.id));
            });
          })

        })
      })
    });

  }
}
