import { Router, Routes } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserDataService {
  userResponse:any;
  url="https://localhost:44381/api/";
  constructor(private readonly http:HttpClient, private readonly router: Router) { }


  loginUser(payload: any): Promise<boolean> {
    return this.http.post<any>(`${this.url}user/login`, payload).toPromise()
      .then(data => {
        const token = data?.token;
        if (token) {
          localStorage.setItem('token', JSON.stringify(token));
          this.router.navigate(['home']);
          console.log('Login successful, token:', token);
          return true; // Return success
        }
        return false; // Return failure if no token
      })
      .catch(error => {
        console.error('There was an error!', error);
        return false; // Return failure on error
      });
  }


  userSave(payload:any){
    var response:any;
    this.http.post<any>(`${this.url}user`,payload).subscribe({
      next: data => {
          this.userResponse = data;
          this.router.navigate(['']);
      },
      error: error => {
         // this.errorMessage = error.message;
          console.error('There was an error!', error);
      }
  })
     return this.userResponse;
  }
}
