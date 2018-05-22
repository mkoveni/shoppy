import { AbstractControl } from '@angular/forms';


export class CustomValidators
{
    public static matchPasswords(ac: AbstractControl)
    {
        const firstControl = ac.get('password');
        const secondControl = ac.get('confirm');

        if (firstControl.value !== secondControl.value) {

            secondControl.setErrors({ MatchFields: true });
        }

        return null;
    }
}