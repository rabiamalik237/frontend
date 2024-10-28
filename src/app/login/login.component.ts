import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder,Validators } from '@angular/forms';
import { UserDataService } from './../services/user-data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  returnUrl:string;
  userForm:any;
  success:boolean =true;
  userResponse: any;
email: any;
  constructor(private formBuilder: FormBuilder, private http: HttpClient,public userData:UserDataService, private readonly router: Router) { }
  ngOnInit() {
    this.userForm = this.formBuilder.group({
      Email: ['', [Validators.required]],
      Password: ['',[Validators.required]]
    });
    this.returnUrl = 'home';
  }
  onSubmit() {
    if (this.userForm.valid) {
      // Call the loginUser function and handle the Promise
      this.userData.loginUser(this.userForm.value).then(success => {
        this.success = success;
        if (success) {
          console.log('Login was successful');
        } else {
          console.log('Login failed');
        }
      }).catch(error => {
        console.error('Error during login', error);
      });
    }
  }
}
