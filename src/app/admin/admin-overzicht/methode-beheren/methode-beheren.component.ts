import { Component, OnInit } from '@angular/core';
import { Persmethode } from 'src/app/models/persmethode.model';
import { FormBuilder, Validators } from '@angular/forms';
import { ServicesService } from 'src/app/services/services.service';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { of } from 'rxjs';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-methode-beheren',
  templateUrl: './methode-beheren.component.html',
  styleUrls: ['./methode-beheren.component.css']
})
export class MethodeBeherenComponent implements OnInit {

  Model: Persmethode;
  methodes;
  closeResult: string;
  constructor(private fb: FormBuilder, private _service: ServicesService, private modalService: NgbModal, private _snackBar: MatSnackBar) {
    this.InstantiateLists();
  }

  createForm = this.fb.group({
    naam: ['', Validators.required]
  });

  InstantiateLists() {
    this._service.getAllPersMethodes().subscribe(result => {
      this.methodes = of(result.records);
    });
  }
  ngOnInit() {
  }

  Delete(methode: Persmethode) {
    this._service.deletePersMethode(methode).subscribe(result => { this.InstantiateLists() });
  }

  Edit(methode: Persmethode) {
    this.openSnackBar();
    this._service.updateMethode(this.Model).subscribe(result => { this.InstantiateLists() });
  }
  openSnackBar() {
    this._snackBar.open("De persmethode is aangepast!", "Close", {
      duration: 5000,
    });
  }

  open(content, methode: Persmethode) {
    this.Model = methode;
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
