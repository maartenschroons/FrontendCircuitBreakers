import { Component, OnInit } from '@angular/core';
import { Vat } from 'src/app/models/vat.model';
import { FormBuilder, Validators } from '@angular/forms';
import { ServicesService } from 'src/app/services/services.service';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { of } from 'rxjs';

@Component({
  selector: 'app-vat-beheren',
  templateUrl: './vat-beheren.component.html',
  styleUrls: ['./vat-beheren.component.css']
})
export class VatBeherenComponent implements OnInit {
  Model: Vat;
  vaten;
  closeResult: string;
  constructor(private fb: FormBuilder, private _service: ServicesService, private modalService: NgbModal) {
    this.InstantiateLists();
  }

  createForm = this.fb.group({
    naam: ['', Validators.required],
    locatie: ['', Validators.required],
    volume: ['', Validators.required],
    deksel: ['', Validators.required],
    koelmantel: ['', Validators.required],
    mangat: ['', Validators.required],
    materiaal: ['', Validators.required]
  });

  InstantiateLists() {
    this._service.getAllVaten().subscribe(result => {
      this.vaten = of(result.records);
    });
  }
  ngOnInit() {
  }

  Delete(vat: Vat) {
    this._service.deleteVat(vat).subscribe(result => { this.InstantiateLists() });
  }
  Edit() {
    this._service.updateVat(this.Model).subscribe(result => { this.InstantiateLists() });
  }


  open(content, vat: Vat) {
    this.Model = vat;
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
