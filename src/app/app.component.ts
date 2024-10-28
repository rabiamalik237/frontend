import { Component } from '@angular/core';
import { UserDataService } from './services/user-data.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  users:any;
  constructor(private readonly userData:UserDataService ){
  //   userData.user('Name','Password').subscribe((data:any)=>{
  //     console.warn("data",data);
  //     this.users=data;
  //     console.log(this.users,"users");
  //   });
  }
}

