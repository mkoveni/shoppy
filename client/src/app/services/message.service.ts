import { Injectable, Injector } from '@angular/core';
import { ToastyService, ToastOptions } from 'ng2-toasty';


@Injectable()
export class MessageService {

  private toasty: ToastyService;
  options: ToastOptions =  {
    title: '',
    theme: 'bootstrap',
    timeout: 7000,
    showClose: true};

  constructor(injector: Injector) {
    this.toasty = injector.get(ToastyService);
  }

  setOption(key, value) {
    this.options[key] = value;
  }

  error(title, message) {
    this.prepareMessage(title, message);

    this.toasty.error(this.options);
  }

  info(title, message) {
    this.prepareMessage(title, message);

    this.toasty.info(this.options);
  }

  success(title, message) {
    this.prepareMessage(title, message);

    this.toasty.success(this.options);
  }

  warning(title, message) {
    this.prepareMessage(title, message);

    this.toasty.warning(this.options);
  }

  private prepareMessage(title, message) {
    this.setOption('title', title);
    this.setOption('msg', message);
  }

}
