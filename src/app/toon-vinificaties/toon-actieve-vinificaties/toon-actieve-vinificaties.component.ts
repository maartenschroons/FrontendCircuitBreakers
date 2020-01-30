import { Component, OnInit } from '@angular/core';
import { ServicesService } from 'src/app/services/services.service';
import { Process } from 'src/app/models/process.model';
import { of } from 'rxjs';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-toon-actieve-vinificaties',
  templateUrl: './toon-actieve-vinificaties.component.html',
  styleUrls: ['./toon-actieve-vinificaties.component.css']
})
export class ToonActieveVinificatiesComponent implements OnInit {
  processenl = new Array<Process[]>();
  processen;

  constructor(private fb: FormBuilder, private _service: ServicesService, public sanitizer: DomSanitizer) {
    this.instantiateLists()

  }

  instantiateLists() {
    this._service.getAllProcessen().subscribe(result => {
      result.records.forEach(proces => {
        if (proces.actief == 1) {
          this._service.getVatById(proces.vatId).subscribe(vat => { proces.vat = vat })
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
