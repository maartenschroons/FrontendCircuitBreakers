import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { Druif } from 'src/app/models/druif.model';
import { ServicesService } from 'src/app/services/services.service';

@Component({
  selector: 'app-druif-soort-toevoegen',
  templateUrl: './druif-soort-toevoegen.component.html',
  styleUrls: ['./druif-soort-toevoegen.component.css']
})
export class DruifSoortToevoegenComponent implements OnInit {

  druifModel = new Druif(0, "");

  createDruifSoortForm = this.fb.group({
    naam: ['', Validators.required]
  });

  constructor(private fb: FormBuilder, private _service: ServicesService) {

  }

  ngOnInit() {
  }

  onSubmit() {
    this._service.addDruifSoort(this.druifModel).subscribe();
  }
}
