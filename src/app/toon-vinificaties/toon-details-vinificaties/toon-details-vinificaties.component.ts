import { Component, OnInit, ViewChild } from '@angular/core';
import { Process } from 'src/app/models/process.model';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { FormBuilder } from '@angular/forms';
import { ServicesService } from 'src/app/services/services.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Druif } from 'src/app/models/druif.model';
import { Observable, of, Subscription, observable } from 'rxjs';

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


  constructor(private fb: FormBuilder, private _service: ServicesService, private route: ActivatedRoute, private router: Router) {
    this.routeSub=this.route.params.subscribe(params=>{
      this.id=params['id']      
    })
    this.getProcess(); 
    this.getEvents();   
    this.getHandmatigeMetingen();
    this.getAlarmLog();
    this.getGebruikers(); 
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
      console.log(this.process);
   });
  }
  getEvents(){
    this._service.getAllEventsByVinificatieId(this.id).subscribe(result => {    
      result.records.forEach(event => {
          this._service.getSoortEventById(event.soortEventId).subscribe(soortEvent => { event.soortEvent = soortEvent }); 
          this.eventl.push(event);
      });
      this.events = this.makeObservable(this.eventl);
      console.log(this.events);
   });
  }
  getHandmatigeMetingen(){
    this._service.getAllHandmatigeMetingenByVinificatieId(this.id).subscribe(result => {    
      result.records.forEach(meting => {
          this._service.getSoortMetingById(meting.soortMetingId).subscribe(soortMeting => { meting.soortMeting = soortMeting }); 
          this.metingl.push(meting);
      });
      this.metingen = this.makeObservable(this.metingl);
      console.log(this.metingen);
    });
  }
  getAlarmLog(){
    this._service.getAlarmLogByVinificatieId(this.id).subscribe(result => {    
      result.records.forEach(alarm => {
          this.eventl.push(alarm);
      });
      this.alarmLog = this.makeObservable(this.alarml);
      console.log(this.events);
    });
  }
  getGebruikers(){
    this._service.getAllVinificatieGebruiker().subscribe(result => {
      result.records.forEach(vingebr => {
        if (vingebr.vinificatieId == this.id) {
          this._service.getGebruikerById(vingebr.gebruikerId).subscribe(gebruiker => { vingebr.gebruiker = gebruiker })
          this.gebruikerl.push(vingebr);
        }
      });
      this.gebruikers = this.makeObservable(this.gebruikerl);
      console.log(this.gebruikers);
    });
  }
  ngOnInit() {
    
  }
  makeObservable(variabele){
    return of(variabele);
  }


}
