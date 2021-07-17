import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

import { AuthService } from '../../../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardGuard implements CanActivate {

  constructor(private service: AuthService, private router: Router) {

  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean | UrlTree {
    let url: string = state.url;
    return this.checkLogin(url);
  }


  checkLogin(url: string): any {
    console.log("Url" + url);

    let val: any = localStorage.getItem('isUserLoggedIn');

    if (val != null && val == "true") {

      if (url == "/login") {
        this.router.parseUrl('/expense');
      }

      else
        return true;
    }
    else {
      return this.router.parseUrl('/login');
    }

  }

}
