import { Component, OnInit } from '@angular/core';
import { Gebruiker } from 'src/app/models/gebruiker.model';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { ServicesService } from 'src/app/services/services.service';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { of } from 'rxjs';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-gebruiker-beheren',
  templateUrl: './gebruiker-beheren.component.html',
  styleUrls: ['./gebruiker-beheren.component.css']
})
export class GebruikerBeherenComponent implements OnInit {

  Model: Gebruiker;
  gebruikers;
  closeResult: string;
  constructor(private fb: FormBuilder, private _service: ServicesService, private modalService: NgbModal, private _snackBar: MatSnackBar) {
    this.InstantiateLists();
  }

  createForm = this.fb.group({
    voornaam: ['', Validators.required],
    achternaam: ['', Validators.required],
    telefoonnummer: ['', Validators.required],
    email: ['', Validators.required],
    wachtwoord: ['', Validators.required]
  });


  InstantiateLists() {
    this._service.getAllGebruikers().subscribe(result => {
      this.gebruikers = of(result.records);
    });
  }
  ngOnInit() {
  }
  openSnackBar() {
    this._snackBar.open("de gebruiker is aangepast!", "Close", {
      duration: 5000,
    });
  }
  Edit() {
    this.openSnackBar();
    this._service.updateGebruiker(this.Model).subscribe(result => { this.InstantiateLists() });
  }

  open(content, gebruiker: Gebruiker) {
    this.Model = gebruiker;
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
