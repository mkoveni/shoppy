import { FormGroup, FormBuilder } from '@angular/forms';

export class BaseComponent {
  form: FormGroup;


  constructor(builder: FormBuilder) {
    this.form = builder.group(this.getFields());
  }

  input(name: string) {
    return this.form.controls[name].value;
  }

  error(name: string) {
    return !this.form.controls[name].valid && this.form.controls[name].touched;
  }

  getFields() {

    return {};
  }
}
