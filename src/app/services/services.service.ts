import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Process } from '../models/process.model';
import { Meting } from '../models/meting.model';
import { Event } from '../models/event.model';
import { Vat } from '../models/vat.model';
import { Observable } from 'rxjs';
import { Druif } from '../models/druif.model';
import { SoortMeting } from '../models/soort-meting.model';
import { SoortEvent } from '../models/soort-event.model';
import { Persmethode } from '../models/persmethode.model';
import { Result } from '../models/result.model';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class ServicesService {
  

  constructor(private http: HttpClient) { }

  //Vinificatieprocessen

  addProces(process: Process) {
    return this.http.post<Process>("http://localhost/backend_pcfruit/api/Vinificatie/create.php", process, httpOptions);
  }

  updateProcess(id: number, process: Process) {
    return this.http.put("" + id, process);
  }


  //Metingen
  addMeting(meting: Meting) {
    return this.http.post<Meting>("", meting);
  }


  //events
  addEvent(event: Event) {
    return this.http.post<Event>("", event);
  }

  //vaten
  getAllVaten(): Observable<Result> {
    return this.http.get<Result>("http://localhost/backend_pcfruit/api/Vat/read.php");
  }

  //persmethodes
  getAllPersMethodes(): Observable<Result> {
    return this.http.get<Result>("http://localhost/backend_pcfruit/api/PersMethode/read.php");
  }

  //druifsoorten
  getAllDruifsoorten(): Observable<Result> {
    return this.http.get<Result>("http://localhost/backend_pcfruit/api/DruifSoort/read.php");
  }

  //metingsoorten
  getAllMetingsoorten(): Observable<Result> {
    return this.http.get<Result>("http://localhost/backend_pcfruit/api/SoortMeting/read.php");
  }

  //eventsoorten
  getAllEventsoorten(): Observable<Result> {
    return this.http.get<Result>("http://localhost/backend_pcfruit/api/SoortEvent/read.php");
  }
}
