import { Component, OnInit, ViewChild } from '@angular/core';
import { Process } from 'src/app/models/process.model';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { FormBuilder } from '@angular/forms';
import { ServicesService } from 'src/app/services/services.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Druif } from 'src/app/models/druif.model';
import { Observable, of, Subscription } from 'rxjs';

@Component({
  selector: 'app-toon-details-vinificaties',
  templateUrl: './toon-details-vinificaties.component.html',
  styleUrls: ['./toon-details-vinificaties.component.css']
})
export class ToonDetailsVinificatiesComponent implements OnInit {
  private routeSub: Subscription;
  id=0
  process;
  processO;


  processenl = new Array<Process[]>();
  processen;
  dataSource;
  displayedColumns: string[] = ['id', 'vatId', 'oogst', 'persHoeveelheid'];
  
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  constructor(private fb: FormBuilder, private _service: ServicesService, private route: ActivatedRoute, private router: Router) {
    this.process = _service.getVatById(this.id)
    console.log(this.process)
  }
      ngOnInit() {
        this.routeSub=this.route.params.subscribe(params=>{
          this.id=params['id']
          console.log(this.id)
        })
      }
      makeObservable() {
        
      }


}
