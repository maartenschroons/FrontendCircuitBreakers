import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Process } from '../models/process.model';
import { Meting } from '../models/meting.model';
import { Event } from '../models/event.model';
import { Vat } from '../models/vat.model';
import { Observable, from } from 'rxjs';
import { Druif } from '../models/druif.model';
import { SoortMeting } from '../models/soort-meting.model';
import { SoortEvent } from '../models/soort-event.model';
import { Persmethode } from '../models/persmethode.model';
import { Result } from '../models/result.model';

const baselink = "http://localhost/backend_pcfruit/api/";
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*'
  })
};

@Injectable({
  providedIn: 'root'
})
export class ServicesService {


  constructor(private http: HttpClient) { }

  //Vinificatieprocessen

  addProces(process: Process) {
    return from( // wrap the fetch in a from if you need an rxjs Observable
      fetch(
        baselink+ "Vinificatie/create.php",
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
    //return this.http.post<Process>(baselink + "Vinificatie/create.php", process, httpOptions);
  }

  updateProcess(id: number, process: Process) {
    //return this.http.put(baselink + "" + id, process);
    return from( // wrap the fetch in a from if you need an rxjs Observable
      fetch(
        baselink+ "Vinificatie/create.php",
        {
          body: JSON.stringify(process),
          headers: {
            'Content-Type': 'application/json',
          },
          method: 'PUT',
          mode: 'no-cors'
        }
      )
    );
  }


  //Metingen
  addMeting(meting: Meting) {
    //return this.http.post<Meting>(baselink + "", meting);
    return from( // wrap the fetch in a from if you need an rxjs Observable
      fetch(
        baselink+ "HandmatigeMeting/create.php",
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
        baselink+ "Event/create.php",
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
}
