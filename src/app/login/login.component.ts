import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  errorMessage: string = '';
  isLoading: boolean = false;
  constructor(private _AuthService:AuthService ,private _Router:Router) {}
  loginForm: FormGroup = new FormGroup({
    email: new FormControl(null, [Validators.email, Validators.required]),
    password: new FormControl(null, [
      Validators.required,
      Validators.pattern('^[A-Z][a-z]{3,8}'),
    ]),
  });
  submitRegisterForm(loginForm: FormGroup) {
    if(loginForm.valid){
      this._AuthService.login(loginForm.value)
      this.isLoading = true
      localStorage.setItem('myKey', JSON.stringify(loginForm.value));
      this._AuthService.userServiceData()
      this._Router.navigate(['/home'])
    }
  }
}
