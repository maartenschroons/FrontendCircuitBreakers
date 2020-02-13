import { Component, OnInit } from '@angular/core';
import { WijnType } from 'src/app/models/wijn-type.model';
import { FormBuilder, Validators } from '@angular/forms';
import { ServicesService } from 'src/app/services/services.service';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { of } from 'rxjs';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-wijn-beheren',
  templateUrl: './wijn-beheren.component.html',
  styleUrls: ['./wijn-beheren.component.css']
})
export class WijnBeherenComponent implements OnInit {

  Model: WijnType;
  wijnen;
  closeResult: string;
  constructor(private fb: FormBuilder, private _service: ServicesService, private modalService: NgbModal, private _snackBar: MatSnackBar) {
    this.InstantiateLists();
  }

  createForm = this.fb.group({
    naam: ['', Validators.required]
  });

  InstantiateLists() {
    this._service.getAllWijnTypes().subscribe(result => {
      this.wijnen = of(result.records);
    });
  }
  ngOnInit() {
  }

  Delete(wijn: WijnType) {
    this._service.deleteSoortMeting(wijn).subscribe(result => { this.InstantiateLists() });
  }

  Edit() {
    this.openSnackBar();
    this._service.updateWijnType(this.Model).subscribe(result => { this.InstantiateLists() });
  }

  openSnackBar() {
    this._snackBar.open("Het wijntype is aangepast!", "Close", {
      duration: 5000,
    });
  }
  open(content, wijn: WijnType) {
    this.Model = wijn;
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
