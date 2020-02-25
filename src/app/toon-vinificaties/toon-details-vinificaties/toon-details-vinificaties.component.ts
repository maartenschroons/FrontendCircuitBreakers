import { Component, OnInit, ViewChild } from '@angular/core';
import { Process } from 'src/app/models/process.model';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { FormBuilder } from '@angular/forms';
import { ServicesService } from 'src/app/services/services.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Druif } from 'src/app/models/druif.model';
import { of, Subscription } from 'rxjs';
import { Meting } from 'src/app/models/meting.model';

@Component({
  selector: 'app-toon-details-vinificaties',
  templateUrl: './toon-details-vinificaties.component.html',
  styleUrls: ['./toon-details-vinificaties.component.css']
})
export class ToonDetailsVinificatiesComponent implements OnInit {
  private routeSub: Subscription;
   id;
   process;
   events;
   eventl = new Array<Process[]>();
   metingen;
   metingl = new Array<Process[]>();
   alarmLog;
   alarml = new Array<Process[]>();
   gebruikers;
   gebruikerl = new Array<Process[]>();
   dataSourceMeting;
   displayedColumnsMeting: string[] = ['soortMeting.naam', 'meting', 'tijd'];
   dataSourceEvent;
   displayedColumnsEvent: string[] = ['soortEvent.naam', 'datum'];
   dataSourceAlarm;
   displayedColumnsAlarm: string[] = ['bericht', 'datum'];

   //@ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
   //@ViewChild(MatSort, {static: true}) sort: MatSort;
   @ViewChild('eventsSort', {static: true}) eventsSort: MatSort;
   @ViewChild('metingSort', {static: true}) metingSort: MatSort;
   @ViewChild('alarmSort', {static: true}) alarmSort: MatSort;
   @ViewChild('eventsPaginator', {static: true}) eventsPaginator: MatPaginator;
   @ViewChild('metingPaginator', {static: true}) metingPaginator: MatPaginator;
   @ViewChild('alarmPaginator', {static: true}) alarmPaginator: MatPaginator;  
   

  constructor(private fb: FormBuilder, private _service: ServicesService, private route: ActivatedRoute, private router: Router) {
    this.routeSub=this.route.params.subscribe(params=>{
      this.id=params['id']  
    })
    this.getProcess(); 
    this.getEvents();   
    this.getHandmatigeMetingen();
    this.getAlarmLog();
  }
  getProcess() {
    this._service.getProcesById(this.id).subscribe(proces => {
      var druiflijst = new Array<Druif[]>();
      this.process = proces;
      this._service.getVatById(proces.vatId).subscribe(vat => { this.process.vat = vat });
      this._service.getPersmethodeById(proces.persmethodeId).subscribe(persmethode => { this.process.persmethode = persmethode });
      this._service.getWijnTypeById(proces.wijnTypeId).subscribe(wijnType => { this.process.wijnType = wijnType });
      this._service.getAllDruifsoortenByVinificatieId(proces.id).subscribe(result => { 
        result.records.forEach(druifsoort => {
          druiflijst.push(druifsoort);
        });
        this.process.druif = of(druiflijst);
      });
    });
  }
  getEvents(){
    this._service.getAllEventsByVinificatieId(this.id).subscribe(result => {    
      result.records.forEach(event => {
          this._service.getSoortEventById(event.soortEventId).subscribe(soortEvent => { event.soortEvent = soortEvent }); 
          this.eventl.push(event);
      });
      this.events = this.makeObservable(this.eventl);
      this.dataSourceEvent = new MatTableDataSource(this.eventl)
      this.dataSourceEvent.paginator = this.eventsPaginator;
      this.dataSourceEvent.sort = this.eventsSort;
      this.dataSourceEvent.filterPredicate = (event: Event, filter: string) => {
        let valid = false;      
        const transformedFilter = filter.trim().toLowerCase();      
        Object.keys(event).map(key => {
          if (key === 'soortEvent') {
            Object.keys(event[key]).map(naam => {
              if (('' + event[key][naam]).toLowerCase().includes(transformedFilter)) {
                valid = true;
              }
            });
          } else {
            if (('' + event[key]).toLowerCase().includes(transformedFilter)) {
              valid = true;
            }
          }
        });
      
        return valid;
      }
   });
  }
  getHandmatigeMetingen(){
    this._service.getAllHandmatigeMetingenByVinificatieId(this.id).subscribe(result => {    
      result.records.forEach(meting => {
        this._service.getSoortMetingById(meting.soortMetingId).subscribe(soortMeting => { meting.soortMeting = soortMeting }); 
        this.metingl.push(meting);
      });
      this.metingen = this.makeObservable(this.metingl);
      this.dataSourceMeting = new MatTableDataSource(this.metingl);
      this.dataSourceMeting.paginator = this.metingPaginator;
      this.dataSourceMeting.sort = this.metingSort;
      this.dataSourceMeting.filterPredicate = (met: Meting, filter: string) => {
        let valid = false;      
        const transformedFilter = filter.trim().toLowerCase();      
        Object.keys(met).map(key => {
          if (key === 'soortMeting') {
            Object.keys(met[key]).map(naam => {
              if (('' + met[key][naam]).toLowerCase().includes(transformedFilter)) {
                valid = true;
              }
            });
          } else {
            if (('' + met[key]).toLowerCase().includes(transformedFilter)) {
              valid = true;
            }
          }
        });     
        return valid;
      }
    });
  }
  getAlarmLog(){
    this._service.getAlarmLogByVinificatieId(this.id).subscribe(result => {    
      result.records.forEach(alarmLog => {
          this.alarml.push(alarmLog);
      });
      this.alarmLog = this.makeObservable(this.alarml);
      this.dataSourceAlarm = new MatTableDataSource(this.alarml)
      this.dataSourceAlarm.paginator = this.alarmPaginator;
      this.dataSourceAlarm.sort = this.alarmSort;
    });
  }
  applyFilterMeting(filterValue: string) {
    this.dataSourceMeting.filter = filterValue;    
  }
  applyFilterEvent(filterValue: string) {
    this.dataSourceEvent.filter = filterValue;    
  }
  applyFilterAlarm(filterValue: string) {
    this.dataSourceAlarm.filter = filterValue;    
  }
  ngOnInit() {
    
  }
  makeObservable(variabele){
    return of(variabele);
  }


}
