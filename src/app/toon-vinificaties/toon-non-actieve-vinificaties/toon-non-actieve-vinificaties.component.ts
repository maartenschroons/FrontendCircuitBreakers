import { Component, OnInit, ViewChild } from '@angular/core';
import { Process } from 'src/app/models/process.model';
import { FormBuilder } from '@angular/forms';
import { ServicesService } from 'src/app/services/services.service';
import { Router } from '@angular/router';
import { of, Observable } from 'rxjs';
import { Druif } from 'src/app/models/druif.model';
import {MatSort, MatPaginator, MatTableDataSource} from '@angular/material';

@Component({
  selector: 'app-toon-non-actieve-vinificaties',
  templateUrl: './toon-non-actieve-vinificaties.component.html',
  styleUrls: ['./toon-non-actieve-vinificaties.component.css']
})
export class ToonNonActieveVinificatiesComponent implements OnInit {
  processenl = new Array<Process[]>();
  processen;
  dataSource;
  displayedColumns: string[] = ['id', 'vatId', 'wijnTypeId', 'jaargang', 'persHoeveelheid'];
  
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  constructor(private fb: FormBuilder, private _service: ServicesService, private router: Router) {
    this.instantiateLists()
    
  }

  instantiateLists() {
        this._service.getAllProcessen().subscribe(result => {
          result.records.forEach(proces => {
            proces.druif = new Observable<Druif>();
            if (proces.actief == 0) {
              this._service.getVatById(proces.vatId).subscribe(vat => { proces.vat = vat })
              this._service.getWijnTypeById(proces.wijnTypeId).subscribe(wijnType => { proces.wijnType = wijnType })
              this.processenl.push(proces);
            }
          });
          this.processen = this.makeObservable();          
          this.dataSource = new MatTableDataSource(this.processenl)
          this.dataSource.paginator = this.paginator;
          this.dataSource.sort = this.sort;
          console.log(this.dataSource)

        });
      }
      ngOnInit() {
      }
      makeObservable() {
        return of(this.processenl);
      }

}
