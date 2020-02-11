import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { ServicesService } from 'src/app/services/services.service';
import { SoortEvent } from 'src/app/models/soort-event.model';

@Component({
  selector: 'app-event-toevoegen',
  templateUrl: './event-toevoegen.component.html',
  styleUrls: ['./event-toevoegen.component.css']
})
export class EventToevoegenComponent implements OnInit {

  model = new SoortEvent(0, "");

  Form = this.fb.group({
    naam: ['', Validators.required]
  });

  constructor(private fb: FormBuilder, private _service: ServicesService) {

  }

  ngOnInit() {
  }

  onSubmit() {
    this._service.addEventSoort(this.model).subscribe();
  }

}
