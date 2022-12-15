import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
  constructor(private _route:Router){}
  ngOnInit(){}
  goToLogin(){
    this._route.navigate(['/healthasyst/login']);
  }
}
