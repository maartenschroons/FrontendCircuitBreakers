import { Component, OnInit } from '@angular/core';
import { Vat } from 'src/app/models/vat.model';
import { Validators, FormBuilder } from '@angular/forms';
import { SoortMeting } from 'src/app/models/soort-meting.model';
import { ServicesService } from 'src/app/services/services.service';
import { of } from 'rxjs';

@Component({
  selector: 'app-add-meting',
  templateUrl: './add-meting.component.html',
  styleUrls: ['./add-meting.component.css']
})
export class AddMetingComponent implements OnInit {
  vaten;
  metingen;

  addMetingForm = this.fb.group({
    vat: ['', Validators.required],
    soortMeting: ['', Validators.required],
    Metingswaarde: ['', Validators.required]
  });

  constructor(private fb: FormBuilder, private _service: ServicesService) { 
    _service.getAllVaten().subscribe(result => {
      this.vaten = of(result.records);
      console.log(this.vaten);
    });

    _service.getAllMetingsoorten().subscribe(result => {
      this.metingen = of(result.records);
      console.log(this.metingen);
    });
  }

  ngOnInit() {
  }

}
