import { Component, OnInit } from '@angular/core';
import {auth$, login}  from '@Sigma/auth';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'SiteMap';
  loginStatus= "uninitialized"

  ngOnInit(){
    login("test", "test");
    auth$.subscribe(res=> this.loginStatus = res)
  }

  reload(){
    console.log(auth$);
    login("test", "test");
    auth$.subscribe(res=> this.loginStatus = res)
  }
}
