import { Injectable } from '@angular/core';
import { AuthService, } from '../pages/login/auth.service';
import { ActivatedRouteSnapshot, Router, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService {

  constructor(public authService: AuthService, private router: Router) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable <boolean> | boolean {
    if (this.authService.userAutenticado()) {
      return true;
    }

    this.router.navigate(['/login']);
    return false;
  }
}
