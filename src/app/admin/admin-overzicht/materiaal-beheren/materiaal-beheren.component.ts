import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ServicesService } from 'src/app/services/services.service';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { Materiaal } from 'src/app/models/materiaal.model';
import { of } from 'rxjs';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-materiaal-beheren',
  templateUrl: './materiaal-beheren.component.html',
  styleUrls: ['./materiaal-beheren.component.css']
})
export class MateriaalBeherenComponent implements OnInit {
  Model: Materiaal;
  materialen;
  closeResult: string;
  constructor(private fb: FormBuilder, private _service: ServicesService, private modalService: NgbModal, private _snackBar: MatSnackBar) {
    this.InstantiateLists();
  }

  createForm = this.fb.group({
    naam: ['', Validators.required]
  });

  InstantiateLists() {
    this._service.getAllMaterialen().subscribe(result => {
      this.materialen = of(result.records);
    });
  }
  ngOnInit() {
  }

  Delete(materiaal: Materiaal) {
    this._service.deleteSoortMeting(materiaal).subscribe(result => { this.InstantiateLists() });
  }

  Edit() {
    this.openSnackBar();
    this._service.updateMateriaal(this.Model).subscribe(result => { this.InstantiateLists() });

  }

  openSnackBar() {
    this._snackBar.open("Het materiaal is aangepast!", "Close", {
      duration: 5000,
    });
  }
  open(content, materiaal: Materiaal) {
    this.Model = materiaal;
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
