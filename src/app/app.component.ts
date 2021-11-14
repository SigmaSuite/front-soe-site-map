import { Component, OnInit, SystemJsNgModuleLoader } from '@angular/core';
import {auth$, login}  from '@Sigma/auth';
import { mountRootParcel} from "single-spa";
import {Login} from "@Sigma/login";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'SiteMap';
  loginStatus= "uninitialized"
  mountParcel = mountRootParcel;
   spaSite;

  ngOnInit(){
    // login("test", "test");
    this.spaSite =Login; 
    auth$.subscribe(res=> this.loginStatus = res)
  }

  reload(){
    console.log(auth$);
    login("test", "test");
    auth$.subscribe(res=> this.loginStatus = res)
  }
}
