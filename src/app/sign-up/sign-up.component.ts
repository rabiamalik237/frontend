import { UserDataService } from './../services/user-data.service';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent {
  registerForm: FormGroup;
  submitted = false;
  userForm:any;
  userResponse: any;
  constructor(private readonly formBuilder: FormBuilder, private readonly http: HttpClient,public userData:UserDataService) { }
  ngOnInit() {
    this.userForm = this.formBuilder.group({
      Name: ['', [Validators.required]],
      Password: ['',[Validators.required,Validators.minLength(6)]],
      Email: ['', [Validators.required, Validators.email]],
      ConfirmPwd: ['', [Validators.required]]
    },
     {
      validator: this.mustMatch('Password', 'ConfirmPwd')
    }
    );
  }
  get rf() {
    return this.registerForm.controls;
  }
   onSubmit(){
    if(this.userForm.valid){
      console.log(this.userForm.value,"this.userForm");
      this.userResponse= this.userData.userSave(this.userForm.value);
      // debugger;
      // console.log(this.userResponse)
      // if(this.userResponse.success){
      // console.log("userResponse",this.userResponse)
      //}
    }
  }
  mustMatch(controlName: string, matchingControlName: string) {
    return (formGroup: FormGroup) => {
      const control = formGroup.controls[controlName];
      const matchingControl = formGroup.controls[matchingControlName];

      if (matchingControl.errors && !matchingControl.errors['mustMatch']) {
        return;
      }
      if (control.value !== matchingControl.value) {
        matchingControl.setErrors({ mustMatch: true });
      } else {
        matchingControl.setErrors(null);
      }
    };
  }
}
