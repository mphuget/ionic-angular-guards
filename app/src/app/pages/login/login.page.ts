import { Component, OnInit } from '@angular/core';

import { Plugins } from '@capacitor/core';
const { Storage } = Plugins;

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor() { }

  async setLogged() {
    await Storage.set({key: "logged", value: 'true'});
  }

  ngOnInit() {
    this.setLogged();
  }

}
