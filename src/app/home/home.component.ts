import { Router } from '@angular/router';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  constructor(private readonly router: Router) { }
  ngOnInit() {
    const tokenValidation = localStorage.getItem('token');
    console.log(tokenValidation);
    if(!tokenValidation)
    {
      this.router.navigate(['']);
    }
    else{
      this.router.navigate(['home']);
    }
  }

  logout(){
    debugger;
    localStorage.removeItem('token');
    this.router.navigate(['']);
  }
}
