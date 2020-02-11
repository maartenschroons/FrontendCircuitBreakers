import { Component, OnInit } from '@angular/core';
import { ServicesService } from 'src/app/services/services.service';
import { Process } from 'src/app/models/process.model';
import { of, Observable } from 'rxjs';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { Druif } from 'src/app/models/druif.model';

@Component({
  selector: 'app-toon-actieve-vinificaties',
  templateUrl: './toon-actieve-vinificaties.component.html',
  styleUrls: ['./toon-actieve-vinificaties.component.css']
})
export class ToonActieveVinificatiesComponent implements OnInit {
  processenl = new Array<Process[]>();
  processen;

  constructor(private fb: FormBuilder, private _service: ServicesService, public sanitizer: DomSanitizer, private router: Router) {
    this.instantiateLists()

  }

  instantiateLists() {
var druiflijst = new Array<Druif[]>();
    this._service.getAllProcessen().subscribe(result => {
      result.records.forEach(proces => {
        proces.druif = new Observable<Druif>();
        if (proces.actief == 1) {
          this._service.getVatById(proces.vatId).subscribe(vat => { proces.vat = vat })
          this._service.getPersmethodeById(proces.persmethodeId).subscribe(persmethode => { proces.persmethode = persmethode })
          this._service.getAllDruifsoortenByVinificatieId(proces.id).subscribe(result => { 
            result.records.forEach(druifsoort => {
              console.log(druifsoort);
              druiflijst.push(druifsoort);
            });
            proces.druif = of(druiflijst);
           })
          {proces.iframe = "http://192.168.0.105:3000/d/76B5JFZRz/vinificatie?orgId=1&refresh=5m&from=now-7d&to=now&theme=light&kiosk&panelId=8&fullscreen&var-vat=" + proces.vatId}
          this.processenl.push(proces);
        }
      });
      this.processen = this.makeObservable();
    });
  }
  ngOnInit() {
  }
  makeObservable() {
    return of(this.processenl);
  }
}
