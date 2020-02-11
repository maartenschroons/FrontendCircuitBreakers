import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-toon-dashboard',
  templateUrl: './toon-dashboard.component.html',
  styleUrls: ['./toon-dashboard.component.css']
})
export class ToonDashboardComponent implements OnInit {
  private routeSub: Subscription;
  private iframe: SafeUrl;
  id=0
  constructor(private route: ActivatedRoute, private router: Router, public sanitizer: DomSanitizer) { }

  ngOnInit() {
    this.routeSub=this.route.params.subscribe(params=>{
      this.id=params['id']
      this.iframe = 'http://192.168.0.105:3000/d/76B5JFZRz/vinificatie?orgId=1&refresh=5m&from=now-7d&to=now&theme=light&kiosk&var-vat=' + this.id
      console.log(this.id, this.iframe)
    })

    
  }

}
