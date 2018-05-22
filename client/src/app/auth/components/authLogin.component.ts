import { select } from 'ng2-redux';
import { Component } from '@angular/core';
import { BaseComponent } from '../../base.component';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { tassign } from 'tassign';
import { INTENDED_ROUTE } from '../../constants';
import { Router } from '@angular/router';

@Component({
    selector: 'app-auth-login',
    templateUrl: './auth.login.component.html',
    styleUrls: ['./auth.login.component.css']
})
export class AuthLoginComponent extends BaseComponent
{

    constructor(formBuilder: FormBuilder, private auth: AuthService, private router: Router) {
      super(formBuilder);
    }

    getFields() {

      return {
        email: [null, Validators.required],
        password: [null, Validators.required]
      };
    }

    submit() {

      this.auth.login(this.input('email'), this.input('password'))
      .subscribe(response => {
        console.log(response['data']);
        this.auth.setAuthState(true);
        this.auth.setUser(response['data']);
        this.auth.saveToken(response['meta']['token']);

        if (!!localStorage.getItem(INTENDED_ROUTE)) {

            const route = localStorage.getItem(INTENDED_ROUTE);
            localStorage.removeItem(INTENDED_ROUTE);

            this.router.navigateByUrl(route);
        }
      });
    }
}