import { Component, OnInit } from '@angular/core';
import { select } from 'ng2-redux';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {

  @select(s => s.auth.user) user;

  constructor() { }

  ngOnInit() {
  }

}
