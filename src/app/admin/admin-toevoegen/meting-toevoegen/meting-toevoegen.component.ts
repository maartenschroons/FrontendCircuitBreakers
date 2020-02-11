import { Component, OnInit } from '@angular/core';
import { SoortMeting } from 'src/app/models/soort-meting.model';
import { Validators, FormBuilder } from '@angular/forms';
import { ServicesService } from 'src/app/services/services.service';

@Component({
  selector: 'app-meting-toevoegen',
  templateUrl: './meting-toevoegen.component.html',
  styleUrls: ['./meting-toevoegen.component.css']
})
export class MetingToevoegenComponent implements OnInit {

  model = new SoortMeting(0, "");

  Form = this.fb.group({
    naam: ['', Validators.required]
  });

  constructor(private fb: FormBuilder, private _service: ServicesService) {

  }

  ngOnInit() {
  }

  onSubmit() {
    this._service.addMetingSoort(this.model).subscribe();
  }

}
