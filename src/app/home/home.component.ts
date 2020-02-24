import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServicesService } from '../services/services.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  login: boolean;

  constructor(private router: Router, private _service: ServicesService) {
    this._service.isLoggedin.subscribe(e => {
      this.login = e.valueOf();
    })
  }

  ngOnInit() {
  }

  Login() {
    this.router.navigateByUrl('/login');
  }

}
