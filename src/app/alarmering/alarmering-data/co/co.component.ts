import { Component, OnInit } from '@angular/core';
import { Process } from 'src/app/models/process.model';
import { ServicesService } from 'src/app/services/services.service';
import { of } from 'rxjs';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { AlarmData } from 'src/app/models/alarm-data.model';

@Component({
  selector: 'app-co',
  templateUrl: './co.component.html',
  styleUrls: ['./co.component.css']
})
export class CoComponent implements OnInit {
  alarmdataModel = new AlarmData(null, null, null, null, null);

  alarmForm = this.fb.group({
    proces: ['', Validators.required],
    minimum: ['', Validators.required],
    maximum: ['', Validators.required]
  });
  // ,{ validator: this.greaterThan('minimum', 'maximum') });

  processenl = new Array<Process[]>();
  processen;

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
  }

  onSelect(procesId: number) {
    this._service.getAlarmDataByVinAndSoort(procesId, 2).subscribe(result => {
      this.alarmdataModel = result;
      console.log(this.alarmdataModel);
    });
  }

  onSubmit() {
    this._service.updateAlarmData(this.alarmdataModel);
  }

}
