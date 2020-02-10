import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-toon-dashboard',
  templateUrl: './toon-dashboard.component.html',
  styleUrls: ['./toon-dashboard.component.css']
})
export class ToonDashboardComponent implements OnInit {
  private routeSub: Subscription;
  id=0
  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.routeSub=this.route.params.subscribe(params=>{
      this.id=params['id']
      console.log(this.id)
    })
  }

}
