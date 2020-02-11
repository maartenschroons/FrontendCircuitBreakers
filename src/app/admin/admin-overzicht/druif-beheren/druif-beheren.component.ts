import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ServicesService } from 'src/app/services/services.service';
import { of } from 'rxjs';

@Component({
  selector: 'app-druif-beheren',
  templateUrl: './druif-beheren.component.html',
  styleUrls: ['./druif-beheren.component.css']
})
export class DruifBeherenComponent implements OnInit {

  druiven;
  constructor(private fb: FormBuilder, private _service: ServicesService) {
    this.InstantiateLists();
   
  }

  InstantiateLists() {
    this._service.getAllDruifsoorten().subscribe(result => {
      this.druiven = of(result.records);
      console.log(result)
    });
  }
  ngOnInit() {
  }

}
