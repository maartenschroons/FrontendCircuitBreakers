import { Component, OnInit, ViewChild } from '@angular/core';
import { Process } from 'src/app/models/process.model';
import { FormBuilder } from '@angular/forms';
import { ServicesService } from 'src/app/services/services.service';
import { Router } from '@angular/router';
import { of, Observable } from 'rxjs';
import { Druif } from 'src/app/models/druif.model';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'app-toon-non-actieve-vinificaties',
  templateUrl: './toon-non-actieve-vinificaties.component.html',
  styleUrls: ['./toon-non-actieve-vinificaties.component.css']
})
export class ToonNonActieveVinificatiesComponent implements OnInit {
  processenl = new Array<Process[]>();
  processen;
  dataSource;
  displayedColumns: string[] = ['id', 'vatId', 'oogst', 'persHoeveelheid'];
  
  @ViewChild(MatSort, {static: true}) sort: MatSort

  constructor(private fb: FormBuilder, private _service: ServicesService, private router: Router) {
    this.instantiateLists()
    
  }

  instantiateLists() {
    var druiflijst = new Array<Druif[]>();
        this._service.getAllProcessen().subscribe(result => {
          result.records.forEach(proces => {
            proces.druif = new Observable<Druif>();
            if (proces.actief == 0) {
              this._service.getVatById(proces.vatId).subscribe(vat => { proces.vat = vat })
              this._service.getPersmethodeById(proces.persmethodeId).subscribe(persmethode => { proces.persmethode = persmethode })
              this._service.getAllDruifsoortenByVinificatieId(proces.id).subscribe(result => { 
                result.records.forEach(druifsoort => {
                  console.log(druifsoort);
                  druiflijst.push(druifsoort);
                });
                proces.druif = of(druiflijst);
               })
              this.processenl.push(proces);
            }
          });
          this.processen = this.makeObservable();          
          this.dataSource = new MatTableDataSource(this.processenl)
          this.dataSource.sort = this.sort;

        });
      }
      ngOnInit() {
      }
      makeObservable() {
        return of(this.processenl);
      }

}
