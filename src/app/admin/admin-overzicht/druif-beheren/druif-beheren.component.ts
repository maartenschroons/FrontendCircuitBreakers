import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ServicesService } from 'src/app/services/services.service';
import { of } from 'rxjs';
import { Druif } from 'src/app/models/druif.model';
import { MatSnackBar } from '@angular/material';

import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-druif-beheren',
  templateUrl: './druif-beheren.component.html',
  styleUrls: ['./druif-beheren.component.css']
})
export class DruifBeherenComponent implements OnInit {
  druifModel: Druif;
  druiven;
  closeResult: string;
  constructor(private fb: FormBuilder, private _service: ServicesService, private modalService: NgbModal, private _snackBar: MatSnackBar) {
    this.InstantiateLists();
  }

  createDruifSoortForm = this.fb.group({
    naam: ['', Validators.required]
  });

  InstantiateLists() {
    this._service.getAllDruifsoorten().subscribe(result => {
      this.druiven = of(result.records);
      console.log(result)
    });
  }
  ngOnInit() {
  }

  Delete(druif: Druif) {
    this._service.deleteDruifSoort(druif).subscribe(result => { this.InstantiateLists() });
  }
  
  Edit() {
    this.openSnackBar();
    this._service.updateDruif(this.druifModel).subscribe(result => { this.InstantiateLists() });
  }
  openSnackBar() {
    this._snackBar.open("De druifsoort is aangepast!", "Close", {
      duration: 5000,
    });
  }

  open(content, druif: Druif) {
    this.druifModel = druif;
    console.log(this.druifModel);
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
