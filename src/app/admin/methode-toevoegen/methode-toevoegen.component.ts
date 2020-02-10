import { Component, OnInit } from '@angular/core';
import { Persmethode } from 'src/app/models/persmethode.model';
import { Validators, FormBuilder } from '@angular/forms';
import { ServicesService } from 'src/app/services/services.service';

@Component({
  selector: 'app-methode-toevoegen',
  templateUrl: './methode-toevoegen.component.html',
  styleUrls: ['./methode-toevoegen.component.css']
})
export class MethodeToevoegenComponent implements OnInit {

  model = new Persmethode(0, "");

  Form = this.fb.group({
    naam: ['', Validators.required]
  });

  constructor(private fb: FormBuilder, private _service: ServicesService) {

  }

  ngOnInit() {
  }

  onSubmit() {
    this._service.addMethode(this.model).subscribe();
  }

}
