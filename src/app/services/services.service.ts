import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Process } from '../models/process.model';
import { Meting } from '../models/meting.model';
import { Event } from '../models/event.model';
import { Observable, from } from 'rxjs';
import { Result } from '../models/result.model';
import { Vat } from '../models/vat.model';
import { AlarmData } from '../models/alarm-data.model';


const baselink = "http://localhost/backend_pcfruit/api/";


@Injectable({
  providedIn: 'root'
})
export class ServicesService {


  constructor(private http: HttpClient) { }

  //Vinificatieprocessen

  getAllProcessen(): Observable<Result> {
    return this.http.get<Result>(baselink + "Vinificatie/read.php");
  }

  addProces(process: Process) {
    return from( // wrap the fetch in a from if you need an rxjs Observable
      fetch(
        baselink + "Vinificatie/create.php",
        {
          body: JSON.stringify(process),
          headers: {
            'Content-Type': 'application/json',
          },
          method: 'POST',
          mode: 'no-cors'
        }
      )
    );
    //return this.http.post<Process>(baselink + "Vinificatie/create.php", process);
  }

  updateProcess(process: Process) {
    //return this.http.put(baselink + "" + id, process);
    return from( // wrap the fetch in a from if you need an rxjs Observable
      fetch(
        baselink + "Vinificatie/update.php",
        {
          body: JSON.stringify(process),
          headers: {
            'Content-Type': 'application/json',
          },
          method: 'PUT'
        }
      )
    );
  }


  //Metingen
  addMeting(meting: Meting) {
    //return this.http.post<Meting>(baselink + "", meting);
    return from( // wrap the fetch in a from if you need an rxjs Observable
      fetch(
        baselink + "HandmatigeMeting/create.php",
        {
          body: JSON.stringify(meting),
          headers: {
            'Content-Type': 'application/json',
          },
          method: 'POST',
          mode: 'no-cors'
        }
      )
    );
  }


  //events
  addEvent(event: Event) {
    //return this.http.post<Event>(baselink + "", event);
    return from( // wrap the fetch in a from if you need an rxjs Observable
      fetch(
        baselink + "Event/create.php",
        {
          body: JSON.stringify(event),
          headers: {
            'Content-Type': 'application/json',
          },
          method: 'POST',
          mode: 'no-cors'
        }
      )
    );
  }

  //vaten
  getAllVaten(): Observable<Result> {
    return this.http.get<Result>(baselink + "Vat/read.php");
  }

  getVatById(id: number): Observable<Vat> {
    return this.http.get<Vat>(baselink + "Vat/read_one.php?id=" + id)
  }

  getVatByProcess(proces: Process): Observable<Vat> {
    return this.http.get<Vat>(baselink + "Vat/read_one.php?id=" + proces.vatId)
  }

  updateVat(vat: Vat) {

    return from( // wrap the fetch in a from if you need an rxjs Observable
      fetch(
        baselink + "Vat/update.php",
        {
          body: JSON.stringify(vat),
          headers: {
            'Content-Type': 'application/json',
          },
          method: 'PUT'
        }
      )
    );
  }

  //persmethodes
  getAllPersMethodes(): Observable<Result> {
    return this.http.get<Result>(baselink + "PersMethode/read.php");
  }

  //druifsoorten
  getAllDruifsoorten(): Observable<Result> {
    return this.http.get<Result>(baselink + "DruifSoort/read.php");
  }

  //metingsoorten
  getAllMetingsoorten(): Observable<Result> {
    return this.http.get<Result>(baselink + "SoortMeting/read.php");
  }

  //eventsoorten
  getAllEventsoorten(): Observable<Result> {
    return this.http.get<Result>(baselink + "SoortEvent/read.php");
  }

  //alarmdata
  addAlarmData(alarmdata: AlarmData) {
    return from( // wrap the fetch in a from if you need an rxjs Observable
      fetch(
        baselink + "AlarmData/create.php",
        {
          body: JSON.stringify(alarmdata),
          headers: {
            'Content-Type': 'application/json',
          },
          method: 'POST',
          mode: 'no-cors'
        }
      )
    );
  }

  getAlarmDataByVinAndSoort(vinId: number, alarmId: number): Observable<AlarmData> {
    return this.http.get<AlarmData>(baselink + "AlarmData/getByVinificatie.php?vinificatieId=" + vinId +"&soortAlarmId=" + alarmId);
  }

  updateAlarmData(alarmdata: AlarmData) {

    return from( // wrap the fetch in a from if you need an rxjs Observable
      fetch(
        baselink + "AlarmData/update.php",
        {
          body: JSON.stringify(alarmdata),
          headers: {
            'Content-Type': 'application/json',
          },
          method: 'PUT'
        }
      )
    );
  }

}
