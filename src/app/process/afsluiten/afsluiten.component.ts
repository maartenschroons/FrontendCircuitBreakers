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

  processenl = new Array<Process[]>();
  processen;

  constructor(private _service: ServicesService) {
    // _service.getAllVaten().subscribe(result => {
    //   this.vaten = of(result.records);
    //   console.log(this.vaten);
    // });
this.instantiateLists()
    
  }

  instantiateLists(){
    this.processenl =new Array<Process[]>();
    this._service.getAllProcessen().subscribe(result => {
      result.records.forEach(proces => {
        if (proces.actief == 1) {
          this._service.getVatById(proces.vatId).subscribe(vat => { proces.vat = vat })
          this.processenl.push(proces);
        }
      });
      this.processen = this.makeObservable();
      console.log(this.processen);
    });
  }
  ngOnInit() {
  }
  makeObservable() {
    return of(this.processenl);
  }
  Sluit(proces: Process) {
    proces.actief = 0;
    this._service.updateProcess(proces).subscribe(result =>{this.instantiateLists()});
    
  }

}
