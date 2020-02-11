import { Component, OnInit } from '@angular/core';
import { Gebruiker } from 'src/app/models/gebruiker.model';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { ServicesService } from 'src/app/services/services.service';
import { Rol } from 'src/app/models/rol.model';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-gebruiker-toevoegen',
  templateUrl: './gebruiker-toevoegen.component.html',
  styleUrls: ['./gebruiker-toevoegen.component.css']
})
export class GebruikerToevoegenComponent implements OnInit {

  model = new Gebruiker(0, 0, "", "", "j", "", "", "", "");

  rollen = new Observable<Rol[]>();

  Form = this.fb.group({
    voornaam: ['', Validators.required],
    achternaam: ['', Validators.required],
    telefoonnummer: ['', Validators.required],
    email: ['', Validators.required],
    wachtwoord: ['', Validators.required],
    wachtwoordc: ['', Validators.required],
    rol: ['', Validators.required]
  }, { validator: this.matchingPasswords('wachtwoord', 'wachtwoordc') });

  matchingPasswords(passwordKey: string, passwordConfirmationKey: string) {
    return (group: FormGroup) => {
      let passwordInput = group.controls[passwordKey];
      let passwordConfirmationInput = group.controls[passwordConfirmationKey];
      if (passwordInput.value !== passwordConfirmationInput.value) {
        return passwordConfirmationInput.setErrors({ notEquivalent: true })
      }
      else {
        passwordConfirmationInput.setErrors(passwordConfirmationInput.validator(passwordConfirmationInput))
      }
    }
  }

  constructor(private fb: FormBuilder, private _service: ServicesService) {
    this.InstantiateLists();
  }

  InstantiateLists() {
    this._service.getAllRollen().subscribe(result => {
      this.rollen = of(result.records);
    });
  }

  ngOnInit() {
  }

  onSubmit() {
    this._service.addGebruiker(this.model).subscribe();
  }

}
