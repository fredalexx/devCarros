import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  hide = true;
  operacao: boolean = true;

  value1: string | undefined;
  value2: string | undefined;

  constructor() {}

  ngOnInit() {}
}
