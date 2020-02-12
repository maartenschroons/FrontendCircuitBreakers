import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ServicesService } from 'src/app/services/services.service';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { of } from 'rxjs';
import { Druif } from 'src/app/models/druif.model';
import { SoortMeting } from 'src/app/models/soort-meting.model';
import { SoortEvent } from 'src/app/models/soort-event.model';

@Component({
  selector: 'app-event-beheren',
  templateUrl: './event-beheren.component.html',
  styleUrls: ['./event-beheren.component.css']
})
export class EventBeherenComponent implements OnInit {

  Model: SoortEvent;
  events;
  closeResult: string;
  constructor(private fb: FormBuilder, private _service: ServicesService, private modalService: NgbModal) {
    this.InstantiateLists();
  }

  createForm = this.fb.group({
    naam: ['', Validators.required]
  });

  InstantiateLists() {
    this._service.getAllEventsoorten().subscribe(result => {
      this.events = of(result.records);
    });
  }
  ngOnInit() {
  }

  Delete(event: SoortEvent) {
    this._service.deleteEventSoort(event).subscribe(result => { this.InstantiateLists() });
  }

  Edit() {
    this._service.updateEvent(this.Model).subscribe(result => { this.InstantiateLists() });
  }


  open(content, event: SoortEvent) {
    this.Model = event;
    console.log(this.Model);
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }
  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

}
