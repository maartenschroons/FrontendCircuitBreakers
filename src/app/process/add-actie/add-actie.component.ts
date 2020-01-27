import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { Event } from 'src/app/models/event.model';
import { SoortEvent } from 'src/app/models/soort-event.model';
import { ServicesService } from 'src/app/services/services.service';
import { of } from 'rxjs';
import { Process } from 'src/app/models/process.model';

@Component({
  selector: 'app-add-actie',
  templateUrl: './add-actie.component.html',
  styleUrls: ['./add-actie.component.css']
})
export class AddActieComponent implements OnInit {
  vaten;
  events;

  eventModel = new Event(0, null, 0, "1", null);

  addEventForm = this.fb.group({
    vat: ['', Validators.required],
    soortEvent: ['', Validators.required]
  });

  constructor(private fb: FormBuilder, private _service: ServicesService) {
    _service.getAllVaten().subscribe(result => {
      this.vaten = of(result.records);
    });
    _service.getAllEventsoorten().subscribe(result => {
      this.events = of(result.records);
    });
  }

  ngOnInit() {
  }

  onSubmit() {

    this.eventModel.datum = new Date;

    this._service.addEvent(this.eventModel).subscribe;
  }
}
