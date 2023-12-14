import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';
import { AuthService } from './auth.service';


export const authGuard: CanActivateFn = (route, state) => {
  
  const authService =  inject(AuthService);
  const routwer = inject(Router);
  if (authService.userData.getValue() != null) {
    return true; 
  } else {
    routwer.navigate(['/login'])
    return false;
  }
};
