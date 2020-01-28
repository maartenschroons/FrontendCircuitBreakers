import { Component, OnInit } from '@angular/core';
import { Process } from 'src/app/models/process.model';
import { ServicesService } from 'src/app/services/services.service';
import { of } from 'rxjs';
import { AlarmData } from 'src/app/models/alarm-data.model';
import { Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-ethanol',
  templateUrl: './ethanol.component.html',
  styleUrls: ['./ethanol.component.css']
})
export class EthanolComponent implements OnInit {

  alarmdataModel = new AlarmData(null, null, null, null, null);

  alarmForm = this.fb.group({
    proces: ['', Validators.required],
    minimum: ['', Validators.required],
    maximum: ['', Validators.required]
  });

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

  makeObservable() {
    return of(this.processenl);
  }

  ngOnInit() {
  }

  onSelect(procesId: number) {
    this._service.getAlarmDataByVinAndSoort(procesId, 3).subscribe(result => {
      this.alarmdataModel = result;
      console.log(this.alarmdataModel);
    });
  }

  onSubmit() {
    this._service.updateAlarmData(this.alarmdataModel);
  }
}
