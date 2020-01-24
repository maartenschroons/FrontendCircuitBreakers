import { Component, OnInit } from '@angular/core';
import { Vat } from 'src/app/models/vat.model';
import { ServicesService } from 'src/app/services/services.service';
import { of } from 'rxjs';
import { Process } from 'src/app/models/process.model';

@Component({
  selector: 'app-afsluiten',
  templateUrl: './afsluiten.component.html',
  styleUrls: ['./afsluiten.component.css']
})
export class AfsluitenComponent implements OnInit {
  
  vaten;

  constructor( private _service: ServicesService) { 
    _service.getAllVaten().subscribe(result => {
      this.vaten = of(result.records);
      console.log(this.vaten);
    });
  }

  ngOnInit() {
  }

  Sluit(proces: Process){
    proces.actief = false;
      this._service.updateProcess(proces.id, proces).subscribe();
  }

}
