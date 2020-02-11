import { Component, OnInit } from '@angular/core';
import { UserLogin } from '../models/user-login.model';
import { Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { ServicesService } from '../services/services.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  login: UserLogin = new UserLogin("", "");
  loginForm = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', Validators.required]
  })


  constructor(private fb: FormBuilder, private _service: ServicesService, private router: Router) { }

  ngOnInit() {
  }

  onSubmit() {
    this._service.Authenticate(this.login).subscribe(result => {
      this._service.isLoggedin.next(result.id ? true : false);
      localStorage.setItem("token", result.id.toString());
      this.router.navigateByUrl('/dashboard');
      this._service.setUser(result);
      if (result.rolId == 1) {
        this._service.setIsAdmin(true);
      } else {
        this._service.setIsAdmin(false);
      }
    })
  }
}
