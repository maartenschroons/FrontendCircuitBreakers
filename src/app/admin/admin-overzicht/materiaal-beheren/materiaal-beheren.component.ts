import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ServicesService } from 'src/app/services/services.service';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { Materiaal } from 'src/app/models/materiaal.model';
import { of } from 'rxjs';

@Component({
  selector: 'app-materiaal-beheren',
  templateUrl: './materiaal-beheren.component.html',
  styleUrls: ['./materiaal-beheren.component.css']
})
export class MateriaalBeherenComponent implements OnInit {
  materiaalModel: Materiaal;
  materiaalen;
  closeResult: string;
  constructor(private fb: FormBuilder, private _service: ServicesService, private modalService: NgbModal) {
    this.InstantiateLists();
  }

  createDruifSoortForm = this.fb.group({
    naam: ['', Validators.required]
  });

  InstantiateLists() {
    this._service.getAllDruifsoorten().subscribe(result => {
      this.materiaalen = of(result.records);
      console.log(result)
    });
  }
  ngOnInit() {
  }

  Delete(materiaal: Materiaal) {
    this._service.deleteMateriaal(materiaal).subscribe(result => { this.InstantiateLists() });
  }
  
  Edit() {
    this._service.updateMateriaal(this.materiaalModel).subscribe(result => { this.InstantiateLists() });
  }


  open(content, materiaal: Materiaal) {
    this.materiaalModel = materiaal;
    console.log(this.materiaalModel);
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
