import { Component, OnInit } from '@angular/core';
import { Process } from 'src/app/models/process.model';
import { ServicesService } from 'src/app/services/services.service';
import { of } from 'rxjs';
import { AlarmData } from 'src/app/models/alarm-data.model';
import { Validators, FormBuilder } from '@angular/forms';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-temperatuur',
  templateUrl: './temperatuur.component.html',
  styleUrls: ['./temperatuur.component.css']
})
export class TemperatuurComponent implements OnInit {
  checked = false;
  alarmdataModel = new AlarmData(null, null, null, null, null, 0);


  alarmForm = this.fb.group({
    disable: [],
    proces: ['', Validators.required],
    minimum: [
      {
        value: '',
        disabled: false
      },
      Validators.required
    ],
    maximum: [
      {
        value: '',
        disabled: false
      },
      Validators.required
    ]
  });
  // ,{ validator: this.greaterThan('minimum', 'maximum') });

  processenl = new Array<Process[]>();
  processen;

  constructor(private fb: FormBuilder, private _service: ServicesService, private _snackBar: MatSnackBar) {
    this.instantiateLists();


  }
  openSnackBar() {
    this._snackBar.open("De alarmwaarden zijn aangepast!", "Close", {
      duration: 5000,
    });
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

  // greaterThan(minimumKey: string, maximumKey: string) {
  //   return (group: FormGroup) => {
  //     let minimum = group.controls[minimumKey];
  //     let maximum = group.controls[maximumKey];
  //     if (minimum.value > maximum.value) {

  //       return minimum.setErrors({ notEquivalent: true })
  //     }
  //     else {
  //       minimum.setErrors(minimum.validator(minimum))
  //     }
  //   }
  // }

  makeObservable() {
    return of(this.processenl);
  }

  ngOnInit() {

    this.alarmForm.get('disable').valueChanges.subscribe(v => {
      if (v) {
        this.alarmForm.get('minimum').disable()
        this.alarmForm.get('maximum').disable()
        this.checked = true;
      } else {
        this.alarmForm.get('minimum').enable()
        this.alarmForm.get('maximum').enable()
        this.checked = false;
      }
    })
  }

  onSelect(procesId: number) {
    this._service.getAlarmDataByVinAndSoort(procesId, 5).subscribe(result => {
      this.alarmdataModel = result;
    });
  }

  onSubmit() {
    this.openSnackBar();
    if (this.checked) {
      this.alarmdataModel.actief = 0;
    }else{
      this.alarmdataModel.actief = 1;
    }
    if(this.alarmdataModel.minimumwaarde==0){
      this.alarmdataModel.minimumwaarde=1;
    }
    this._service.updateAlarmData(this.alarmdataModel);
  }

}
