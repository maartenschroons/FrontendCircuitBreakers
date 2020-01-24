import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { Vat } from 'src/app/models/vat.model';
import { SoortEvent } from 'src/app/models/soort-event.model';
import { ServicesService } from 'src/app/services/services.service';
import { of } from 'rxjs';

@Component({
  selector: 'app-add-actie',
  templateUrl: './add-actie.component.html',
  styleUrls: ['./add-actie.component.css']
})
export class AddActieComponent implements OnInit {
  vaten;
  events;

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

}
