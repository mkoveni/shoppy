import { FormGroup, FormBuilder } from '@angular/forms';
import { AuthService } from './services/auth.service';


export abstract class BaseComponent {
  protected form: FormGroup;

  private builder: FormBuilder;

  constructor(builder: FormBuilder) {
    this.builder = builder;
  }

  input(name: string) {
    return this.form.controls[name].value;
  }

  getInputErrors(name: string) {

    return this.form.controls[name].errors;
  }

  error(name: string) {
    return !this.form.controls[name].valid && this.form.controls[name].touched;
  }

  abstract getFields();

  initialForm() {
    this.form = this.builder.group(this.getFields());
  }
}
