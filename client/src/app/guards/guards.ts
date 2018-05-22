
import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, Router, NavigationEnd} from '@angular/router';
import {select} from 'ng2-redux';
import 'rxjs/add/operator/take';
import 'rxjs/add/operator/filter';
import { INTENDED_ROUTE } from '../constants';
import { AuthService } from '../services/auth.service';

@Injectable()
export class AuthenticatedGuard implements CanActivate {


    constructor(private router: Router, private auth: AuthService) {}

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {


        if (!this.auth.tokenExists()) {

          localStorage.setItem(INTENDED_ROUTE, state.url);

          console.log(state.url)

          this.router.navigateByUrl('/login');

          return false;
        }
        return true;
    }

}

@Injectable()
export class GuestGuard implements CanActivate {

    constructor(private router: Router, private auth: AuthService) {
    }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        const auth = this.auth.check().take(1);

        if (this.auth.tokenExists()) {
          this.router.navigateByUrl('/profile/account');
          return false;
        }
        return true;
    }

}
