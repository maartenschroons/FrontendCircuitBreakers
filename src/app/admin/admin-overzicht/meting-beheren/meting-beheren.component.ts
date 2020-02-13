import { Component, OnInit } from '@angular/core';
import { SoortMeting } from 'src/app/models/soort-meting.model';
import { FormBuilder, Validators } from '@angular/forms';
import { ServicesService } from 'src/app/services/services.service';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { of } from 'rxjs';

@Component({
  selector: 'app-meting-beheren',
  templateUrl: './meting-beheren.component.html',
  styleUrls: ['./meting-beheren.component.css']
})
export class MetingBeherenComponent implements OnInit {

  Model: SoortMeting;
  metingen;
  closeResult: string;
  constructor(private fb: FormBuilder, private _service: ServicesService, private modalService: NgbModal) {
    this.InstantiateLists();
  }

  createForm = this.fb.group({
    naam: ['', Validators.required]
  });

  InstantiateLists() {
    this._service.getAllMetingsoorten().subscribe(result => {
      this.metingen = of(result.records);
    });
  }
  ngOnInit() {
  }

  Delete(meting: SoortMeting) {
    this._service.deleteSoortMeting(meting).subscribe(result => { this.InstantiateLists() });
  }

  Edit() {
    this._service.updateMeting(this.Model).subscribe(result => { this.InstantiateLists() });
    
  }


  open(content, meting: SoortMeting) {
    this.Model = meting;
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
