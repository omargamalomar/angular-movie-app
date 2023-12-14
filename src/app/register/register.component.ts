import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  errorMessage: string = '';
  isLoading: boolean = false;
  constructor(private _AuthService: AuthService, private _Router:Router) {}
  registerGroup: FormGroup = new FormGroup({
    frist_name: new FormControl(null, [
      Validators.minLength(4),
      Validators.maxLength(7),
      Validators.required,
    ]),
    last_name: new FormControl(null, [
      Validators.minLength(3),
      Validators.maxLength(7),
      Validators.required,
    ]),
    age: new FormControl(null, [
      Validators.min(16),
      Validators.max(40),
      Validators.required,
    ]),
    email: new FormControl(null, [Validators.email, Validators.required]),
    password: new FormControl(null, [
      Validators.required,
      Validators.pattern('^[A-Z][a-z]{3,8}'),
    ]),
  });
  submitRegisterForm(registerGroup: FormGroup) {
    this.isLoading = true
    this._Router.navigate(['/login'])
  }
}
