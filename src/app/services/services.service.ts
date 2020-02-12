import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Process } from '../models/process.model';
import { Meting } from '../models/meting.model';
import { Event } from '../models/event.model';
import { Observable, from, BehaviorSubject } from 'rxjs';
import { Result } from '../models/result.model';
import { Vat } from '../models/vat.model';
import { AlarmData } from '../models/alarm-data.model';
import { AlarmDataGebruiker } from '../models/alarm-data-gebruiker.model';
import { VinificatieDruif } from '../models/vinificatie-druif.model';
import { Druif } from '../models/druif.model';
import { SoortEvent } from '../models/soort-event.model';
import { Persmethode } from '../models/persmethode.model';
import { SoortMeting } from '../models/soort-meting.model';
import { Gebruiker } from '../models/gebruiker.model';
import { UserLogin } from '../models/user-login.model';


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

  getAllInactieveProcessen(): Observable<Result> {
    return this.http.get<Result>(baselink + "Vinificatie/nietActief.php");
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

  getLastProcess(): Observable<Process> {
    return this.http.get<Process>(baselink + "Vinificatie/getLast.php");
  }

  addVinificatieDruif(druif: VinificatieDruif) {
    return from( // wrap the fetch in a from if you need an rxjs Observable
      fetch(
        baselink + "VinificatieDruif/create.php",
        {
          body: JSON.stringify(druif),
          headers: {
            'Content-Type': 'application/json',
          },
          method: 'POST',
          mode: 'no-cors'
        }
      )
    );

  }
  getProcesById(id: number): Observable<Process> {
    return this.http.get<Process>(baselink + "Vinificatie/read_one.php?id=" + id)
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
  getAllEventsByVinificatieId(vinificatieId: number): Observable<Result> {
    return this.http.get<Result>(baselink + "Event/getByVinificatieId.php?vinificatieId=" + vinificatieId);
  }

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
  addVat(vat: Vat) {
    //return this.http.post<Event>(baselink + "", event);
    return from( // wrap the fetch in a from if you need an rxjs Observable
      fetch(
        baselink + "Vat/create.php",
        {
          body: JSON.stringify(vat),
          headers: {
            'Content-Type': 'application/json',
          },
          method: 'POST',
          mode: 'no-cors'
        }
      )
    );
  }
  deleteVat(item: Vat) {
    return from( // wrap the fetch in a from if you need an rxjs Observable
      fetch(
        baselink + "Vat/delete.php",
        {
          body: JSON.stringify(item),
          headers: {
            'Content-Type': 'application/json',
          },
          method: 'DELETE'
        }
      )
    );
  }

  //persmethodes
  getAllPersMethodes(): Observable<Result> {
    return this.http.get<Result>(baselink + "PersMethode/read.php");
  }

  getPersmethodeById(id: number): Observable<Persmethode> {
    return this.http.get<Persmethode>(baselink + "Persmethode/read_one.php?id=" + id)
  }

  addMethode(methode: Persmethode) {
    return from( // wrap the fetch in a from if you need an rxjs Observable
      fetch(
        baselink + "PersMethode/create.php",
        {
          body: JSON.stringify(methode),
          headers: {
            'Content-Type': 'application/json',
          },
          method: 'POST',
          mode: 'no-cors'
        }
      )
    );
  }

  deletePersMethode(item: Persmethode) {
    return from( // wrap the fetch in a from if you need an rxjs Observable
      fetch(
        baselink + "PersMethode/delete.php",
        {
          body: JSON.stringify(item),
          headers: {
            'Content-Type': 'application/json',
          },
          method: 'DELETE'
        }
      )
    );
  }

  //druifsoorten
  getAllDruifsoorten(): Observable<Result> {
    return this.http.get<Result>(baselink + "DruifSoort/read.php");
  }
  getAllDruifsoortenByVinificatieId(id: number): Observable<Result> {
    return this.http.get<Result>(baselink + "VinificatieDruif/getByVinificatieId.php?vinificatieId=" + id);
  }


  addDruifSoort(druif: Druif) {
    return from( // wrap the fetch in a from if you need an rxjs Observable
      fetch(
        baselink + "DruifSoort/create.php",
        {
          body: JSON.stringify(druif),
          headers: {
            'Content-Type': 'application/json',
          },
          method: 'POST',
          mode: 'no-cors'
        }
      )
    );
  }

  deleteDruifSoort(item: Druif) {
    return from( // wrap the fetch in a from if you need an rxjs Observable
      fetch(
        baselink + "DruifSoort/delete.php",
        {
          body: JSON.stringify(item),
          headers: {
            'Content-Type': 'application/json',
          },
          method: 'DELETE'
        }
      )
    );
  }

  //metingsoorten
  getAllMetingsoorten(): Observable<Result> {
    return this.http.get<Result>(baselink + "SoortMeting/read.php");
  }

  addMetingSoort(meting: SoortMeting) {
    //return this.http.post<Event>(baselink + "", event);
    return from( // wrap the fetch in a from if you need an rxjs Observable
      fetch(
        baselink + "SoortMeting/create.php",
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

  deleteSoortMeting(item: SoortMeting) {
    return from( // wrap the fetch in a from if you need an rxjs Observable
      fetch(
        baselink + "SoortMeting/delete.php",
        {
          body: JSON.stringify(item),
          headers: {
            'Content-Type': 'application/json',
          },
          method: 'DELETE'
        }
      )
    );
  }

  //eventsoorten
  getAllEventsoorten(): Observable<Result> {
    return this.http.get<Result>(baselink + "SoortEvent/read.php");
  }

  deleteEventSoort(item: SoortEvent) {
    return from( // wrap the fetch in a from if you need an rxjs Observable
      fetch(
        baselink + "SoortEvent/delete.php",
        {
          body: JSON.stringify(item),
          headers: {
            'Content-Type': 'application/json',
          },
          method: 'DELETE'
        }
      )
    );
  }

  getEventSoortById(id: number): Observable<SoortEvent> {
    return this.http.get<SoortEvent>(baselink + "SoortEvent/read_one.php?id=" + id)
  }

  addEventSoort(event: SoortEvent) {
    //return this.http.post<Event>(baselink + "", event);
    return from( // wrap the fetch in a from if you need an rxjs Observable
      fetch(
        baselink + "SoortEvent/create.php",
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

  //alarmdata
  getAlarmDataById(id: number): Observable<AlarmData> {
    return this.http.get<AlarmData>(baselink + "AlarmData/read_one.php?id=" + id)
  }

  getAlarmDataByProces(id): Observable<Result> {
    return this.http.get<Result>(baselink + "AlarmData/getByVinificatie.php?vinificatieId=" + id);
  }

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
    return this.http.get<AlarmData>(baselink + "AlarmData/getByVinificatieSoort.php?vinificatieId=" + vinId + "&soortAlarmId=" + alarmId);
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

  //gebruikers

  isLoggedin = new BehaviorSubject(false);
  private userSubject = new BehaviorSubject(new Gebruiker(null, null, '', '', '', '', '', '', ''));
  user = this.userSubject.asObservable();
  setUser(user: Gebruiker) {
    this.userSubject.next(user);
  }

  private isAdminSubject = new BehaviorSubject(false);
  isAdmin = this.isAdminSubject.asObservable();
  setIsAdmin(update: boolean) {
    this.isAdminSubject.next(update);
  }

  getAllGebruikers(): Observable<Result> {
    return this.http.get<Result>(baselink + "Gebruiker/read.php");
  }

  addGebruiker(gebruiker: Gebruiker) {
    return from( // wrap the fetch in a from if you need an rxjs Observable
      fetch(
        baselink + "Gebruiker/create.php",
        {
          body: JSON.stringify(gebruiker),
          headers: {
            'Content-Type': 'application/json',
          },
          method: 'POST',
          mode: 'no-cors'
        }
      )
    );
  }
  deleteGebruiker(item: Gebruiker) {
    console.log(item);
    return from( // wrap the fetch in a from if you need an rxjs Observable
      fetch(
        baselink + "Gebruiker/delete.php",
        {
          body: JSON.stringify(item),
          headers: {
            'Content-Type': 'application/json',
          },
          method: 'DELETE'
        }
      )
    );
  }

  Authenticate(userLogin: UserLogin): Observable<Gebruiker> {
    return this.http.get<Gebruiker>(baselink + "Gebruiker/GetLogin.php?email=" + userLogin.email + "&wachtwoord=" + userLogin.wachtwoord);
  }

  //alarmdatagebruikers
  getAllAlarmDataGebruikersByGebruiker(id): Observable<Result> {
    return this.http.get<Result>(baselink + "AlarmDataGebruiker/getByGebruikerId.php?gebruikerId=" + id);
  }

  getAllAlarmDataGebruikerByGebruiker(id): Observable<Result> {
    return this.http.get<Result>(baselink + "AlarmDataGebruiker/getByAlarmData.php?gebruikerId=" + id);
  }

  getAllAlarmDataGebruikers(): Observable<Result> {
    return this.http.get<Result>(baselink + "AlarmDataGebruiker/read.php");
  }

  addAlarmDataGebruiker(item: AlarmDataGebruiker) {
    return from( // wrap the fetch in a from if you need an rxjs Observable
      fetch(
        baselink + "AlarmDataGebruiker/create.php",
        {
          body: JSON.stringify(item),
          headers: {
            'Content-Type': 'application/json',
          },
          method: 'POST',
          mode: 'no-cors'
        }
      )
    );
  }

  deleteAlarmDataGebruiker(item: AlarmDataGebruiker) {
    return from( // wrap the fetch in a from if you need an rxjs Observable
      fetch(
        baselink + "AlarmDataGebruiker/delete.php",
        {
          body: JSON.stringify(item),
          headers: {
            'Content-Type': 'application/json',
          },
          method: 'DELETE'
        }
      )
    );
  }

  //rollen

  getAllRollen(): Observable<Result> {
    return this.http.get<Result>(baselink + "Rol/read.php");
  }

  updateDruif(druif: Druif) {

    return from( // wrap the fetch in a from if you need an rxjs Observable
      fetch(
        baselink + "DruifSoort/update.php",
        {
          body: JSON.stringify(druif),
          headers: {
            'Content-Type': 'application/json',
          },
          method: 'PUT'
        }
      )
    );
  }

  updateEvent(SoortEvent: SoortEvent) {

    return from( // wrap the fetch in a from if you need an rxjs Observable
      fetch(
        baselink + "SoortEvent/update.php",
        {
          body: JSON.stringify(SoortEvent),
          headers: {
            'Content-Type': 'application/json',
          },
          method: 'PUT'
        }
      )
    );
  }

  //wijnType
  getWijnTypeById(id: number): Observable<Result> {
    return this.http.get<Result>(baselink + "WijnType/read_one.php?id=" + id);
  }
}



