import { Injectable, Injector } from '@angular/core';
import { AbstractControl, ValidationErrors, AsyncValidatorFn } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import { AuthService } from '../services/auth.service';

@Injectable()
export class UniqueValidationProvider {

  private authService: AuthService;

  constructor(injector: Injector) {
    this.authService = injector.get(AuthService);
  }

  uniqueEmail(): AsyncValidatorFn {

    return (control: AbstractControl): Promise<ValidationErrors | null> | Observable<ValidationErrors | null> => {

      return this.authService.validateEmail(control.value).map(
        status => {
          return (status === 422) ? {'EmailExists': true} : null;
        }
      );
    };
  }
}
