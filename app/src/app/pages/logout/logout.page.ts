import { Component, OnInit } from '@angular/core';

import { Plugins } from '@capacitor/core';
const { Storage } = Plugins;

@Component({
  selector: 'app-logout',
  templateUrl: './logout.page.html',
  styleUrls: ['./logout.page.scss'],
})
export class LogoutPage implements OnInit {

  constructor() { }

  async unsetLogged() {
    await Storage.set({key: "logged", value: 'false'});

  }

  ngOnInit() {
    this.unsetLogged();
  }

}
