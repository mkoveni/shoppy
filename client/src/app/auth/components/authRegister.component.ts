import { Component, OnInit, Injector } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { BaseComponent } from '../../base.component';
import { FormBuilder, Validators } from '@angular/forms';
import { visitAll } from '@angular/compiler';
import { UniqueValidationProvider } from '../../validators/providers';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth-register',
  templateUrl: './auth.register.component.html',
  styleUrls: ['./auth.register.component.css']
})
export class AuthRegisterComponent extends BaseComponent implements OnInit {

  private uniqueValidator: UniqueValidationProvider;

  constructor(formBuilder: FormBuilder, validatorProvider: UniqueValidationProvider,
    private authService: AuthService, private router: Router) {
    super(formBuilder);

    this.uniqueValidator = validatorProvider;
  }

  ngOnInit() {

    this.initialForm();
  }

  submit () {

    this.authService.register({
      first_name: this.input('first_name'),
      last_name: this.input('last_name'),
      email: this.input('email'),
      password: this.input('password')
    }).subscribe(res => {

      this.authService.setAuthState(true);
      this.authService.setUser(res['data']);
      this.authService.saveToken(res['meta']['token']);

      this.router.navigateByUrl('/login');
    });
  }


  getFields() {

    return {
      first_name: [null, [Validators.required, Validators.minLength(3)]],
      last_name: [null, [Validators.required, Validators.minLength(3)]],
      email: [null, [Validators.email], [this.uniqueValidator.uniqueEmail()]],
      password: [null, [Validators.required, Validators.minLength(6)]],
    };
  }
}
