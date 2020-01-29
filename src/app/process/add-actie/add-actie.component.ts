import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { Event } from 'src/app/models/event.model';
import { SoortEvent } from 'src/app/models/soort-event.model';
import { ServicesService } from 'src/app/services/services.service';
import { of, Observable } from 'rxjs';
import { Process } from 'src/app/models/process.model';
import { filter, map } from 'rxjs/operators';

@Component({
  selector: 'app-add-actie',
  templateUrl: './add-actie.component.html',
  styleUrls: ['./add-actie.component.css']
})
export class AddActieComponent implements OnInit {
  events;
  processenl = new Array<Process[]>();
  processen;

  eventModel = new Event(0, null, 0, "1", new Date());

  addEventForm = this.fb.group({
    vat: ['', Validators.required],
    soortEvent: ['', Validators.required],
    datum: ['', Validators.required]
  });

  constructor(private fb: FormBuilder, private _service: ServicesService) {
    
    _service.getAllProcessen().subscribe(result => {
      result.records.forEach(proces => {
        if (proces.actief == 1) {
          _service.getVatById(proces.vatId).subscribe(vat => { proces.vat = vat })
          this.processenl.push(proces);
        }
      });
      this.processen = this.makeObservable();
    });


    _service.getAllEventsoorten().subscribe(result => {
      this.events = of(result.records);
    });
  }

  ngOnInit() {
  }

  makeObservable() {
    return of(this.processenl);
  }

  onSubmit() {

    
    this._service.addEvent(this.eventModel).subscribe;
  }
}
