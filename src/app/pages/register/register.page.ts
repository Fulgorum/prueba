import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  intercambiarCards: boolean = false;

  constructor() {
  }

  ngOnInit() {
  }

  intercambiarPosition() {
    this.intercambiarCards = !this.intercambiarCards;
  }

}
