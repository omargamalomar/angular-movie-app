import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class AuthService {
  authenticated: any;
  isLoggedIn(): boolean {
    return !!localStorage.getItem('myKey');
  }

  constructor(private _HttpClient:HttpClient, private _Router:Router) {
    if(localStorage.getItem("myKey")){
      this.userServiceData()
    }
  }
  userData = new BehaviorSubject(null)
  userServiceData(){
    let localist:any =  JSON.stringify(localStorage.getItem("myKey"));
    this.userData.next(localist)
  }
  signUp(formData:object):Observable<any>{
  return this._HttpClient.post('https://route-egypt-api.herokuapp.com/signup',formData)
  }
  login(formData:object):Observable<any>{
  return this._HttpClient.post('https://route-egypt-api.herokuapp.com/signup',formData)
  }
  signOut(){
    localStorage.removeItem('myKey');
    this.userData.next(null);
    this._Router.navigate(['/login'])
  }
  
}
